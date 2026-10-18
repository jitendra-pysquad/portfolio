"use client";

import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-sky-100 ${
        isScrolled ? "shadow-md shadow-sky-100/50" : "shadow-sm shadow-sky-100/40"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          aria-label="Go to top of page"
        >
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-sky-500/25">
            <span className="text-base font-extrabold text-white tracking-wider">
              JC
            </span>
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors whitespace-nowrap">
            Jitendra Chaudhary
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-4 lg:gap-7"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm lg:text-base font-semibold transition-colors cursor-pointer relative py-1 whitespace-nowrap ${
                  isActive
                    ? "text-sky-600 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-500 after:rounded-full"
                    : "text-slate-800 hover:text-sky-700"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-900 hover:text-sky-600 p-2 focus:outline-none flex-shrink-0 cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 pointer-events-auto p-4"
            : "max-h-0 opacity-0 pointer-events-none p-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? "text-sky-600 bg-sky-50 font-bold"
                    : "text-slate-800 hover:text-sky-700 hover:bg-sky-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
