import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "../lib/utils";

/** Global header yüksekliği — Layout’taki ana içerik üst dolgusuyla aynı rem değerinde olmalı. */
export const HEADER_NAV_HEIGHT = "h-16";
/** Büyük logo taşır; içerik üstten logo altına kadar boşluk (≈ slider üst kenarı için yeterli) */
export const HEADER_MAIN_PADDING_TOP = "pt-24";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" },
    { name: "Blog", path: "/blog" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 w-full overflow-visible border-b transition-colors duration-200",
          HEADER_NAV_HEIGHT,
          isScrolled
            ? "border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
            : "border-slate-100 bg-white"
        )}
      >
        <div className="relative h-full overflow-visible">
        <div
          className={cn(
            "relative mx-auto flex h-full max-w-7xl items-center justify-between gap-3 overflow-visible",
            "px-4 sm:gap-5 sm:px-6 lg:px-8"
          )}
        >
          <Link
            to="/"
            className={cn(
              "pointer-events-auto absolute left-4 top-1/2 z-[45] flex w-max max-w-none -translate-y-1/2 items-center overflow-visible sm:left-6 lg:left-8",
              "outline-offset-4"
            )}
            aria-label="Anasayfa — Demir Vidanjör"
          >
            <picture className="m-0 block max-w-none overflow-visible p-0 leading-none">
              <source srcSet="/logo-header.webp?v=10" type="image/webp" />
              <img
                id="site-header-logo"
                src="/logo-header.png?v=10"
                alt="Demir Vidanjör Logo"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </Link>

          <div
            className="pointer-events-none w-[clamp(160px, 50vw, 300px)] shrink-0 md:w-[22rem] lg:w-[28rem]"
            aria-hidden
          />

          <nav className="hidden shrink-0 items-center gap-x-7 md:flex md:justify-end" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[0.9375rem] font-medium tracking-tight transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
                  location.pathname === link.path ? "text-red-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="tel:+905422105627"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/25 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none md:inline-flex md:px-6"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              <span>Hemen Ara</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              className="rounded-lg p-2.5 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 max-h-[min(70vh,28rem)] overflow-y-auto border-b border-slate-100 bg-white shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-4 pb-4 pt-2" aria-label="Mobil navigasyon">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "rounded-lg px-3 py-3.5 text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-red-50 text-red-600"
                      : "text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  );
}
