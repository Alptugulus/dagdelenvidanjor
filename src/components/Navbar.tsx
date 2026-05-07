import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
          "fixed top-0 left-0 right-0 z-40 h-16 overflow-visible transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex h-16 shrink-0 items-center overflow-visible"
            aria-label="Anasayfa — Dağdelen Vidanjör"
          >
            <img
              src="/logo-header.png"
              alt="Dağdelen Vidanjör Logo"
              className="h-10 w-auto max-w-[min(82vw,300px)] object-contain object-left sm:h-11 sm:max-w-[340px] md:h-12 md:max-w-[400px] lg:h-[52px] lg:max-w-[min(460px,calc(100vw-32rem))]"
              width={937}
              height={242}
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-red-600",
                  location.pathname === link.path ? "text-red-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button / Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+905422105627"
              className="hidden md:flex items-center space-x-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-red-500/30 border-t border-red-400/30"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Hemen Ara</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-t border-slate-100 bg-white shadow-lg">
            <nav className="flex flex-col space-y-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium",
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
      </header>
    </>
  );
}
