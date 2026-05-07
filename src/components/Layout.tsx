import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomAction } from "./MobileBottomAction";

export function Layout() {
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
      <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomAction />
    </div>
  );
}
