"use client";

import React from "react";
import { asset } from "@/lib/basePath";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  metrics: string[];
  highlights: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectsSection() {
  const projects: ProjectItem[] = [
    {
      id: "niva",
      title: "NIVA – Agentic AI Chatbot Platform",
      subtitle: "Omnichannel AI Assistant with RAG & Enterprise CRM Connectors",
      category: "AI / LLM",
      image: asset("/projects/niva.png"),
      description:
        "An enterprise-scale agentic AI chatbot platform engineered with Python, Django REST Framework, LangGraph, Azure OpenAI, and ChromaDB. Features automated RAG-based knowledge retrieval, secure multi-tenant RBAC, Razorpay subscription billing, and real-time omnichannel orchestration.",
      techStack: [
        "Python",
        "Django",
        "DRF",
        "PostgreSQL",
        "Redis",
        "Celery",
        "LangGraph",
        "Azure OpenAI",
        "ChromaDB",
        "Razorpay",
      ],
      metrics: [
        "Multi-channel routing across 7+ chat networks",
        "Sub-second vector retrieval with ChromaDB",
        "Automated recurring subscriptions with Razorpay",
        "Zero-drop async webhook ingestion via Celery",
      ],
      highlights: [
        "Engineered scalable AI-powered backend services with LangGraph and Azure OpenAI, enabling intelligent multi-turn conversation workflows and vector database search over private company documents.",
        "Designed secure REST APIs with Django, DRF, and PostgreSQL with JWT token authentication, granular role-based access control (RBAC), and tenant data isolation.",
        "Implemented automated subscription management, payment signature verification, and idempotency-guaranteed webhook processors using Redis and Celery.",
        "Constructed an omnichannel integration layer connecting WhatsApp, Instagram, Slack, Telegram, Discord, Microsoft Teams, and LINE, combined with bidirectional CRM sync into HubSpot, Salesforce, Odoo, and Zendesk.",
      ],
      githubUrl: "https://github.com/jitendra-pysquad/",
      liveUrl: "https://getniva.ai/",
    },
    {
      id: "carenav",
      title: "CareNav – Hospital Insurance Claims Platform",
      subtitle: "Multi-Tenant Healthcare Pre-Auth & Claims Engine with NHCX / ABDM",
      category: "Enterprise Backend",
      image: asset("/projects/carenav.png"),
      description:
        "A compliant, multi-tenant hospital insurance claims engine where medical institutions manage patient records, invoice generation, pre-authorization, and final claims while insurance adjudicators review and decide settlements.",
      techStack: [
        "Python",
        "Django",
        "DRF",
        "PostgreSQL",
        "Redis",
        "Celery",
        "AWS S3",
        "pytest",
        "Swagger",
        "NHCX / ABDM",
      ],
      metrics: [
        "Multi-hospital tenant data isolation via RBAC",
        "Compliant Indian health protocols (NHCX & ABDM)",
        "Secure claim document vault on AWS S3 with signed URLs",
        "Automated insurer email sync & status poller",
      ],
      highlights: [
        "Developed comprehensive Django REST APIs for hospital administration, patient onboarding, claim submission, insurer query replies, and settlement tracking.",
        "Engineered strict JWT authentication with RBAC separating Hospital Staff, Billing Clerks, Insurance Adjudicators, and Master Administrators so each hospital strictly accesses their authorized data scope.",
        "Architected relational PostgreSQL data models for patients, policies, claims, and audit history logs with encrypted claim file uploads securely stored on AWS S3.",
        "Automated background processing with Celery and Redis for automated claim submissions, insurer email synchronization, and periodic payment settlement reconciliation.",
        "Enforced robust testing with pytest and Django TestCase alongside comprehensive Swagger / OpenAPI live documentation.",
      ],
      githubUrl: "https://github.com/jitendra-pysquad/",
      liveUrl: "https://hospital.carenavindia.ai/login?reson=inactive",
    },
    {
      id: "sharelyze",
      title: "ShareLyze – Document Sharing & Analytics",
      subtitle: "Secure Content Distribution Platform with Engagement Telemetry",
      category: "SaaS & Payments",
      image: asset("/projects/sharelyze.png"),
      description:
        "A high-security document sharing SaaS platform featuring passwordless email-OTP authentication, granular tiered permissions, Razorpay subscription checkouts, and deep link-engagement telemetry.",
      techStack: [
        "Python",
        "Django",
        "DRF",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Celery Beat",
        "Razorpay",
        "AWS S3",
        "Brevo",
      ],
      metrics: [
        "Passwordless Email-OTP verification system",
        "Real-time geolocation & device click analytics",
        "Automated daily digest dispatch via Celery Beat",
        "Tiered link-credit quotas (Free, Standard, Advanced)",
      ],
      highlights: [
        "Built passwordless email-OTP authentication and permission tiers, enforcing Razorpay checkout with cryptographic signature verification to unlock advanced feature sets.",
        "Tracked comprehensive share-link analytics including view counts, user device, geographic location, download events, and link expiration rules.",
        "Designed and scheduled daily engagement email summaries dispatched automatically to document creators using a Celery Beat background scheduler and Redis queue.",
        "Integrated AWS S3 for secure document asset storage and Brevo API for transactional email deliveries.",
      ],
      githubUrl: "https://github.com/jitendra-pysquad/",
    },
    {
      id: "startlyze",
      title: "Startlyze – E-Commerce Price Monitoring",
      subtitle: "Headless Web Scraping Engine & Real-Time Price Analytics API",
      category: "Web Scraping & APIs",
      image: asset("/projects/startlyze.jpg"),
      description:
        "An automated e-commerce market intelligence tool utilizing headless Python Selenium scraping to track, record, and alert on fluctuating retail product prices across South African e-commerce portals.",
      techStack: [
        "Python",
        "FastAPI",
        "Selenium",
        "REST API",
        "PostgreSQL",
        "Data Pipelines",
      ],
      metrics: [
        "Automated scheduled pricing scrapes",
        "High-concurrency async endpoints with FastAPI",
        "Historical price change tracking & outlier detection",
        "Robust anti-blocking extraction routines",
      ],
      highlights: [
        "Created an autonomous Python web scraping crawler using Selenium to monitor and extract structured product pricing data across multiple e-commerce websites in South Africa.",
        "Developed blazing-fast asynchronous FastAPI REST endpoints exposing clean pricing trends, min/max price variance, and competitive intelligence metrics for downstream analytics.",
        "Implemented resilient retry mechanisms, error handling, and proxy/header cycling to ensure consistent scraper uptime.",
      ],
      githubUrl: "https://github.com/jitendra-pysquad/",
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Featured Software Projects"
      className="py-12 bg-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl text-lg font-normal">
            A selection of production backend platforms, AI systems, and SaaS
            architectures I&apos;ve designed and engineered.
          </p>
        </div>

        <style>{`
          .project-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            right: auto;
            bottom: auto;
            transform: translate(-50%, -50%);
            margin: 0;
            width: min(42rem, calc(100vw - 2rem));
            max-height: min(90vh, 44rem);
            height: fit-content;
            border: 1px solid #e0f2fe;
            border-radius: 1rem;
            padding: 1.5rem;
            background: #fff;
            color: #0f172a;
            box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.35);
          }
          .project-popup::backdrop {
            background: rgba(15, 23, 42, 0.62);
          }
        `}</style>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/80 group transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Project Image Banner */}
              <div className="relative w-full bg-slate-100 border-b border-sky-100 flex-shrink-0">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-auto block"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 shadow-md backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2 min-h-[28px]">
                    {proj.title}
                  </h3>
                  <p className="text-sky-600 font-semibold text-xs mb-3">
                    {proj.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Tech stack pills with tag icon */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-sky-50 text-sky-800 border border-sky-200/80"
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
                          className="w-3 h-3 text-sky-500"
                        >
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                        </svg>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-sky-100 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      popoverTarget={`metrics-${proj.id}`}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                    >
                      <span>Architecture &amp; Metrics</span>
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
                        className="w-3.5 h-3.5"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </button>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div id={`metrics-${proj.id}`} popover="auto" className="project-popup">
                <div className="flex items-start justify-between gap-4 mb-4 border-b border-sky-100 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                      {proj.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">{proj.title}</h3>
                    <p className="text-slate-500 text-sm">{proj.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    popoverTarget={`metrics-${proj.id}`}
                    popoverTargetAction="hide"
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">{proj.description}</p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-3">
                    Key Performance Metrics &amp; Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {proj.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl text-xs font-medium text-slate-800"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-3">
                    System Architecture &amp; Implementation Details
                  </h4>
                  <ul className="space-y-2.5">
                    {proj.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
