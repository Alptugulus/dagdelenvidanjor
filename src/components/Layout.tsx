import { useEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Navbar, HEADER_MAIN_PADDING_TOP } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomAction } from "./MobileBottomAction";

export function Layout() {
  const location = useLocation();
  const isFirstPath = useRef(true);

  useEffect(() => {
    if (!window.gtag) return;

    const path = location.pathname + location.search;

    // İlk sayfa görüntüsü index.html içindeki gtag("config") ile gider.
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }

    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document.title,
    });
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <ScrollRestoration />
      <a
        href="#main-content"
        className="skip-to-main rounded-lg bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-lg ring-2 ring-red-600 ring-offset-2"
      >
        İçeriğe geç
      </a>
      <Navbar />
      <main id="main-content" className={`flex-1 ${HEADER_MAIN_PADDING_TOP}`} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomAction />
    </div>
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
