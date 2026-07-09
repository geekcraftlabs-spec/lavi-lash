"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // Initialize on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery/lashes", label: "Lashes" },
    { href: "/gallery/nails", label: "Nails" },
    { href: "/gallery/waxing", label: "Waxing" },
    { href: "/pricelist", label: "Pricelist" },
    { href: "/appointment", label: "Book Now" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdf8f6]/95 backdrop-blur-sm shadow-sm border-b border-[#d4a0a0]/20"
          : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-['Pacifico'] text-[#d4a0a0]">
              Lavi Lash
            </span>
            <span className="text-xs text-[#6b5555] hidden sm:inline">|</span>
            <span className="text-sm font-medium text-[#6b5555] hidden sm:inline">Nails</span>
          </Link>

          <div className="hidden md:flex items-center gap-5 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition ${
                  pathname === link.href
                    ? "text-[#d4a0a0] border-b-2 border-[#d4a0a0]"
                    : "text-[#6b5555] hover:text-[#d4a0a0] hover:border-b-2 hover:border-[#d4a0a0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#3d2c2c] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#3d2c2c] transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#3d2c2c] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#fdf8f6] border-b border-[#d4a0a0]/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-3 rounded-lg transition ${
                  pathname === link.href
                    ? "bg-[#d4a0a0] text-white"
                    : "hover:bg-[#e8d5d5] text-[#3d2c2c]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}