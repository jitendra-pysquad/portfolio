"use client";

import React from "react";
import { asset } from "@/lib/basePath";

const TYPING_TITLES = [
  "Python Backend Developer",
  "Django & DRF Specialist",
  "AI Systems & RAG Engineer",
  "Celery & Redis Architect",
  "FastAPI & Microservices Dev",
];

export default function HeroSection() {

  return (
    <section
      id="home"
      aria-label="Hero — Introduction"
      className="min-h-screen flex items-center pt-32 pb-8 relative overflow-hidden bg-slate-50"
    >
      {/* Spinning Orbital Decorative SVG */}
      <svg
        className="absolute top-25 right-[42%] w-32 h-32 text-slate-300/60 -z-0 pointer-events-none animate-[spin_30s_linear_infinite]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="50" cy="50" r="48" />
        <ellipse cx="50" cy="50" rx="48" ry="15" />
        <ellipse cx="50" cy="50" rx="15" ry="48" />
        <ellipse cx="50" cy="50" rx="48" ry="30" />
        <ellipse cx="50" cy="50" rx="30" ry="48" />
      </svg>

      {/* Ambient Radial Gradient Blobs */}
      <div className="absolute bottom-[-20%] -right-48 w-96 h-96 bg-gradient-to-tr from-emerald-300/80 to-lime-200/80 rounded-full -z-0 pointer-events-none mix-blend-multiply" />
      <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/20 to-emerald-400/10 rounded-full blur-[100px] -z-0 pointer-events-none" />
      <div className="absolute -top-10 right-32 w-96 h-96 bg-sky-400/20 rounded-full blur-[130px] -z-0 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-[130px] -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Text & Actions */}
        <div className="md:col-span-7 flex flex-col items-start">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-emerald-300 rounded-full bg-emerald-50 text-emerald-800 text-sm font-semibold shadow-2xs animate-fade-in-up">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Senior Backend &amp; AI Roles</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-slate-900 animate-fade-in-up animation-delay-100">
            Hi, I&apos;m <br />
            <span className="text-gradient drop-shadow-[0_2px_15px_rgba(2,132,199,0.2)]">
              Jitendra Chaudhary
            </span>
          </h1>

          {/* Types a role, deletes it, then types the next one */}
          <p
            className="relative mb-6 text-xl font-semibold text-sky-600 sm:text-2xl"
            style={{ height: "2.75rem" }}
          >
            {TYPING_TITLES.map((title, index) => (
              <span
                key={title}
                className="absolute left-0 top-0 overflow-hidden whitespace-nowrap border-r-2 border-sky-500 pr-0.5"
                style={{
                  animation: "type-delete 20s steps(300, end) infinite both",
                  animationDelay: `${index * 4}s`,
                }}
              >
                {title}
              </span>
            ))}
          </p>
          <style>{`
            @keyframes type-delete {
              0% { max-width: 0; }
              8% { max-width: 32ch; }
              12% { max-width: 32ch; }
              18%, 100% { max-width: 0; }
            }
          `}</style>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-normal animate-fade-in-up animation-delay-300">
            Building fast, robust backend architectures, scalable RESTful APIs, and
            production-ready RAG AI services using Python, Django, DRF, FastAPI,
            PostgreSQL, Redis, and Celery.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-400">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/25 active:scale-95 cursor-pointer"
            >
              View Projects
            </a>
            <a
              href={asset("/Resume_Jitendra_Chaudhary.pdf")}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-white border border-sky-200 hover:border-sky-500 hover:text-sky-700 text-slate-700 rounded-xl font-semibold transition-all flex items-center gap-2 group hover:bg-sky-50 shadow-sm active:scale-95 cursor-pointer"
            >
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
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-sky-600"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div
            className="flex items-center gap-4 animate-fade-in-up animation-delay-500"
            aria-label="Social profiles"
          >
            <a
              href="https://github.com/jitendra-pysquad/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-3.5 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full transition-all border border-sky-100 hover:border-sky-300 shadow-xs hover:scale-110"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="w-5 h-5"
                height="1em"
                width="1em"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jitendrachaudharych"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-3.5 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full transition-all border border-sky-100 hover:border-sky-300 shadow-xs hover:scale-110"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-5 h-5"
                height="1em"
                width="1em"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            <a
              href="mailto:jitendrachaudhary9971@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email profile"
              className="p-3.5 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full transition-all border border-sky-100 hover:border-sky-300 shadow-xs hover:scale-110"
            >
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
                className="w-5 h-5"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Avatar with Gradient Ring */}
        <div className="md:col-span-5 flex justify-center items-center animate-scale-in animation-delay-200">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 bg-gradient-to-tr from-sky-400 via-cyan-500 to-teal-400 shadow-[0_10px_40px_rgba(2,132,199,0.25)] transition-all duration-500 hover:scale-105">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
              <img
                alt="Jitendra Chaudhary"
                className="w-full h-full object-cover object-[center_15%]"
                src={asset("/profile.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
