"use client";

import React, { useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
}

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<{ [key: number]: boolean }>({
    0: true,
    1: false,
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const experiences: ExperienceItem[] = [
    {
      role: "Python Backend Developer",
      company: "PySquad Informatics",
      location: "Ahmedabad, Gujarat",
      period: "Feb 2023 – Present",
      technologies: [
        "Python",
        "Django",
        "DRF",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Celery Beat",
        "Azure OpenAI",
        "LangGraph",
        "ChromaDB",
        "AWS EC2",
        "Docker",
        "Gunicorn",
        "Nginx",
        "Razorpay",
      ],
      responsibilities: [
        "Build and maintain production-grade REST APIs and scalable backend services using Python, Django, and Django REST Framework (DRF), with PostgreSQL for data modeling and JWT authentication, role-based access control (RBAC), and permission-based API access for multiple user roles.",
        "Deploy Django applications on AWS EC2 using Gunicorn and Nginx, with Docker containers where required for consistent environments.",
        "Run asynchronous background processing and scheduled jobs with Redis, Celery, and Celery Beat to handle long-running workflows and automated tasks without blocking requests.",
        "Integrate the Razorpay payment gateway with subscription management, payment verification, and webhook processing for resilient, idempotent billing workflows.",
        "Develop third-party API integrations with WhatsApp, Slack, Discord, Telegram, CRM/ERP (HubSpot, Salesforce, Odoo), and healthcare platforms (NHCX, ABDM) to automate multi-system data synchronization.",
        "Develop AI-powered backend services using LangGraph, Azure OpenAI, and ChromaDB for RAG-based knowledge retrieval, conversational workflows, and LLM integrations.",
      ],
    },
    {
      role: "Python / Django Developer",
      company: "Agile Technology",
      location: "Ahmedabad, Gujarat",
      period: "6 Months",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "REST APIs",
        "Git",
        "Debugging",
      ],
      responsibilities: [
        "Developed backend features in Python and Django, including REST APIs, database schema operations, and core business logic.",
        "Collaborated on the integration of frontend client applications with backend REST endpoints using PostgreSQL.",
        "Conducted code debugging, query optimization, and maintained version-controlled feature releases via Git-based workflows.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-12 relative bg-sky-50/50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-sky-200 ml-4 md:ml-10 space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedIndex[idx];
            return (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline Circle Node */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-sky-500 shadow-xs z-10" />

                {/* Experience Card */}
                <div className="bg-white rounded-xl border border-sky-100 p-6 shadow-md hover:shadow-lg hover:border-sky-300 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-sky-700 font-semibold text-lg">
                        {exp.company}{" "}
                        <span className="text-slate-500 text-sm font-normal">
                          — {exp.location}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full whitespace-nowrap border border-sky-200 font-medium">
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
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full border border-sky-200/80 bg-sky-50 text-sky-800 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Accordion toggle button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center gap-2 text-sm text-sky-700 hover:text-sky-800 font-semibold mt-2 focus:outline-none cursor-pointer"
                  >
                    <span>
                      {isExpanded ? "Hide Responsibilities" : "Show Responsibilities"}
                    </span>
                    {isExpanded ? (
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
                        className="w-4 h-4"
                      >
                        <path d="m18 15-6-6-6 6" />
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
                        className="w-4 h-4"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <ul className="mt-4 space-y-3 pt-4 border-t border-sky-100 animate-fadeIn">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
