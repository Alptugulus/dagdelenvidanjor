import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomAction } from "./MobileBottomAction";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomAction />
    </div>
  );
}
