"use client";

import React from "react";

export default function EducationSection() {
  const certifications = [
    {
      name: "Python Programming Certification",
      issuer: "IBM",
      year: "Apr 2026",
    },
    {
      name: "Django for Everybody Specialization",
      issuer: "University of Michigan",
      year: "2026",
    },
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      year: "2026",
    },
    {
      name: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      year: "2026",
    },
  ];

  return (
    <section
      id="education"
      aria-label="Education & Certifications"
      className="py-12 relative bg-sky-50/50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Education &amp; Certifications
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full" />
        </div>

        {/* Degree Education Card */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 group-hover:scale-110 transition-transform">
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
                    className="w-6 h-6 text-sky-600"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
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
                    className="w-4 h-4 text-sky-500"
                  >
                    <path d="M8 2v3" />
                    <path d="M16 2v3" />
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                  <span>Aug 2018 – Apr 2022</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-sky-700 font-semibold text-lg mb-4">
                Smt. B.K. Mehta (IT Centre) BCA College{" "}
                <span className="text-slate-500 text-sm font-normal">
                  — Palanpur, Gujarat
                </span>
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Comprehensive coursework in Computer Science, Database Management
                Systems (DBMS), Relational Data Modeling, Data Structures &amp;
                Algorithms, Object-Oriented Programming, and Software Engineering.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Certifications Subsection */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
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
              className="text-sky-600 w-6 h-6"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
            <span>Professional Certifications</span>
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white p-6 rounded-xl border border-sky-100 shadow-sm hover:border-sky-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-slate-600 text-sm">{cert.issuer}</p>
                </div>
                <div>
                  <span className="inline-block mt-4 text-xs text-sky-700 font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
