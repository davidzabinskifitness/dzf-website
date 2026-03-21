"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/training", label: "Training" },
  { href: "/golf-fitness", label: "Golf Fitness" },
  { href: "/facility", label: "The Garage" },
  { href: "/online-coaching", label: "Online Coaching" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#141414]/95 backdrop-blur-sm border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="David Zabinski Fitness"
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#CC0000]"
                    : "text-[#e5e5e5] hover:text-[#CC0000]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Social icons */}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-[#2a2a2a]">
              <a
                href="https://www.instagram.com/david__zabinski/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#a0a0a0] hover:text-[#CC0000] transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@davidzabinskifitness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#a0a0a0] hover:text-[#CC0000] transition-colors"
              >
                <YouTubeIcon />
              </a>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 border-t border-[#2a2a2a] pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#CC0000]"
                    : "text-[#e5e5e5] hover:text-[#CC0000]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/david__zabinski/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#a0a0a0] hover:text-[#CC0000] transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@davidzabinskifitness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#a0a0a0] hover:text-[#CC0000] transition-colors"
              >
                <YouTubeIcon />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
