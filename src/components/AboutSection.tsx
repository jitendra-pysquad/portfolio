"use client";

import React from "react";
import { asset } from "@/lib/basePath";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="py-12 bg-white relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative ambient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-20">
          {/* Left Column: Bio, CV button, Contact Details */}
          <div className="w-full lg:w-3/5 flex flex-col items-start">
            <div className="text-base md:text-lg text-slate-700 leading-relaxed font-normal mb-8 space-y-4">
              <p>
                I&apos;m a Python Backend Developer &amp; AI Systems Engineer based in
                Ahmedabad, Gujarat with over 3.5 years of hands-on experience crafting
                production-grade RESTful APIs, high-throughput asynchronous processing
                pipelines, and scalable backend platforms using Python, Django, DRF,
                FastAPI, PostgreSQL, Redis, and Celery.
              </p>
              <p>
                Experienced in architecting multi-tenant role-based access control (RBAC),
                resilient payment gateways with Razorpay and webhook idempotency, third-party
                enterprise integrations (WhatsApp, Slack, HubSpot, Salesforce), and deploying
                Dockerized architectures on AWS EC2 with Gunicorn and Nginx. Actively developing
                intelligent agentic RAG workflows using LangGraph, Azure OpenAI, and ChromaDB.
              </p>
            </div>

            <div className="mb-10">
              <a
                href={asset("/Resume_Jitendra_Chaudhary.pdf")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-sky-50 border border-sky-200 hover:bg-sky-500 hover:text-white text-sky-700 rounded-xl transition-all duration-300 font-semibold text-lg group active:scale-95 shadow-md shadow-sky-100/60 cursor-pointer"
              >
                <span>Download CV</span>
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
                  className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </a>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-sky-100 pt-8 w-full">
              {/* Email */}
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-sky-700 uppercase tracking-wider font-bold flex items-center gap-1.5">
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
                    className="w-3.5 h-3.5 text-sky-500"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  Email
                </span>
                <a
                  href="mailto:jitendrachaudhary9971@gmail.com"
                  className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors truncate"
                >
                  jitendrachaudhary9971@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-sky-700 uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-3.5 h-3.5 text-sky-500"
                    height="1em"
                    width="1em"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/919978598171"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors"
                >
                  +91 99785 98171
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-sky-700 uppercase tracking-wider font-bold flex items-center gap-1.5">
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
                    className="w-3.5 h-3.5 text-sky-500"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Stat Cards */}
          <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="bg-white border border-sky-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-sky-100/50 hover:border-sky-300 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-xs">
                3.5+
              </h3>
              <p className="text-base text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                Years Experience
              </p>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-sky-100/50 hover:border-sky-300 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-xs">
                6+
              </h3>
              <p className="text-base text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                Production Backend Systems
              </p>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-sky-100/50 hover:border-sky-300 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-xs">
                15+
              </h3>
              <p className="text-base text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                Third-Party Integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
