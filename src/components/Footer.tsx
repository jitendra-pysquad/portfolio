"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-sky-50 via-cyan-50/50 to-sky-50 border-t border-sky-100 text-slate-700 text-sm py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Link */}
        <a
          href="#home"
          onClick={scrollToTop}
          aria-label="Go to top of page"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-sky-500/20">
            <span className="text-base font-extrabold text-white tracking-wider">
              JC
            </span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
            Jitendra Chaudhary
          </span>
        </a>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-xs text-slate-600">
          <span>© 2026 Jitendra Chaudhary. Built with Next.js &amp;</span>
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
            className="w-3.5 h-3.5 text-sky-500 fill-sky-500 inline-block animate-pulse"
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
        </p>
      </div>
    </footer>
  );
}
