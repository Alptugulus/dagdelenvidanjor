import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  type GoogleReview,
} from "../data/googleReviews";
import { SITE_GOOGLE_REVIEWS_URL, SITE_NAME } from "../config/site";

const AUTO_MS = 6000;
const PAGE_SIZE_DESKTOP = 5;
/** Nokta göstergesi yerine sayaç eşiği */
const DOT_LIMIT = 7;

function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-6 w-6" : size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} üzerinden 5 yıldız`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${dim} ${i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
          aria-hidden
        />
      ))}
    </span>
  );
}

function GoogleMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const initial = review.author.trim().charAt(0).toUpperCase() || "?";
  return (
    <article className="flex h-full min-h-[200px] w-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:min-h-[220px] sm:p-6">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700"
            aria-hidden
          >
            {initial}
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">{review.author}</p>
            {review.relativeTime ? (
              <p className="text-xs text-slate-500">{review.relativeTime}</p>
            ) : null}
          </div>
        </div>
        <GoogleMark className="h-4 w-4 shrink-0 opacity-90" />
      </div>
      <Stars rating={review.rating} size="sm" />
      <p className="mt-3 line-clamp-6 flex-1 break-words text-sm leading-relaxed text-slate-600">
        “{review.text}”
      </p>
    </article>
  );
}

function chunkReviews(reviews: GoogleReview[], size: number): GoogleReview[][] {
  if (reviews.length === 0) return [];
  const pages: GoogleReview[][] = [];
  for (let i = 0; i < reviews.length; i += size) {
    pages.push(reviews.slice(i, i + size));
  }
  return pages;
}

function usePageSize() {
  const [pageSize, setPageSize] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPageSize(1);
      else if (w < 1024) setPageSize(2);
      else if (w < 1280) setPageSize(3);
      else setPageSize(PAGE_SIZE_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return pageSize;
}

export function GoogleReviewsSection() {
  const reviews = GOOGLE_REVIEWS;
  const hasReviews = reviews.length > 0;
  const pageSize = usePageSize();
  const pages = useMemo(() => chunkReviews(reviews, pageSize), [reviews, pageSize]);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setPage(0);
  }, [pageSize, reviews.length]);

  useEffect(() => {
    if (!hasReviews || pages.length <= 1 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setPage((prev) => (prev + 1) % pages.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [hasReviews, pages.length, paused]);

  const ratingLabel = GOOGLE_RATING.value.toLocaleString("tr-TR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const go = (next: number) => {
    if (pages.length === 0) return;
    setPage((next + pages.length) % pages.length);
  };

  const showDots = pages.length > 1 && pages.length <= DOT_LIMIT;
  const showCounter = pages.length > DOT_LIMIT;

  return (
    <section className="overflow-x-hidden bg-white py-16 sm:py-20" aria-labelledby="google-reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700">
            <GoogleMark className="h-4 w-4" />
            Google yorumları
          </div>
          <h2
            id="google-reviews-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {SITE_NAME} hakkında Google’da paylaşılan gerçek müşteri değerlendirmeleri.
          </p>

          <div className="mt-8 inline-flex max-w-full flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 sm:flex-row sm:gap-6 sm:px-8">
            <div className="flex items-center gap-3">
              <GoogleMark className="h-8 w-8" />
              <div className="text-left">
                <p className="text-3xl font-bold tracking-tight text-slate-900">{ratingLabel}</p>
                <p className="text-sm text-slate-500">
                  {GOOGLE_RATING.count > 0
                    ? `${GOOGLE_RATING.count} Google yorumu`
                    : "Google değerlendirmesi"}
                </p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" aria-hidden />
            <Stars rating={GOOGLE_RATING.value} size="lg" />
          </div>
        </div>

        {hasReviews ? (
          <div
            className="relative min-w-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0]?.clientX ?? null;
              setPaused(true);
            }}
            onTouchEnd={(e) => {
              const start = touchStartX.current;
              const end = e.changedTouches[0]?.clientX;
              touchStartX.current = null;
              setPaused(false);
              if (start == null || end == null) return;
              const delta = end - start;
              if (Math.abs(delta) < 48) return;
              go(delta < 0 ? page + 1 : page - 1);
            }}
          >
            <div className="overflow-hidden" aria-live="polite">
              <div
                key={`${pageSize}-${page}`}
                className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 animate-fade-slide"
              >
                {pages[page]?.map((review, i) => (
                  <ReviewCard
                    key={`${page}-${i}-${review.author}-${review.text.slice(0, 20)}`}
                    review={review}
                  />
                ))}
              </div>
            </div>

            {pages.length > 1 ? (
              <div className="mt-8 flex min-w-0 items-center justify-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => go(page - 1)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Önceki yorumlar"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>

                {showDots ? (
                  <div
                    className="flex max-w-[min(100%,14rem)] flex-wrap items-center justify-center gap-1.5"
                    role="tablist"
                    aria-label="Yorum sayfaları"
                  >
                    {pages.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={i === page}
                        aria-label={`Sayfa ${i + 1} / ${pages.length}`}
                        onClick={() => setPage(i)}
                        className={`h-2.5 rounded-full transition-all ${
                          i === page ? "w-8 bg-red-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                ) : null}

                {showCounter ? (
                  <p
                    className="min-w-[4.5rem] text-center text-sm font-medium tabular-nums text-slate-600"
                    aria-live="polite"
                  >
                    {page + 1} / {pages.length}
                  </p>
                ) : null}

                <button
                  type="button"
                  onClick={() => go(page + 1)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Sonraki yorumlar"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={`flex justify-center ${hasReviews ? "mt-10" : "mt-2"}`}>
          <a
            href={SITE_GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:px-6 sm:text-base"
          >
            <GoogleMark className="h-5 w-5 shrink-0" />
            <span className="truncate">Google’da tüm yorumları gör</span>
            <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
