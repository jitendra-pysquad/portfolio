"use client";

import React, { useState } from "react";

type SkillCategory =
  | "All"
  | "Languages & Frameworks"
  | "Databases & Caching"
  | "Async & Cloud"
  | "AI & LLMs"
  | "Integrations & Tools";

interface SkillItem {
  name: string;
  category: SkillCategory;
  badge: string;
  iconBg: string;
  borderColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const categories: SkillCategory[] = [
    "All",
    "Languages & Frameworks",
    "Databases & Caching",
    "Async & Cloud",
    "AI & LLMs",
    "Integrations & Tools",
  ];

  const skills: SkillItem[] = [
    // Languages & Frameworks
    {
      name: "Python",
      category: "Languages & Frameworks",
      badge: "Language",
      iconBg: "bg-[#3776AB]/10",
      borderColor: "border-[#3776AB]/30",
      iconColor: "text-[#3776AB]",
      icon: (
        <svg viewBox="0 0 128 128" className="w-7 h-7 fill-current">
          <path d="M63.4 3c-15.7 0-25 6.8-25 19.5v14.4h25.4v3.6H25.4C11.5 40.5 0 51.5 0 65.4c0 14.1 11.5 24.3 25.4 24.3h7.6v-11c0-12.7 10.9-23.7 23.6-23.7h25.4V39.5c0-12.7-10.4-20.9-23.6-20.9h-8.7c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h8.7c2.6 0 4.8 2.1 4.8 4.8v3.6H38.4V22.5C38.4 12.2 47.9 3 63.4 3zm-9.3 11.6c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.4 2-4.4 4.4-4.4z" />
          <path d="M64.6 125c15.7 0 25-6.8 25-19.5v-14.4H64.2v-3.6h38.4c13.9 0 25.4-11 25.4-24.9 0-14.1-11.5-24.3-25.4-24.3h-7.6v11c0 12.7-10.9 23.7-23.6 23.7H45.6v15.5c0 12.7 10.4 20.9 23.6 20.9h8.7c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9h-8.7c-2.6 0-4.8-2.1-4.8-4.8v-3.6h25.4v22.2c0 10.3-9.5 19.5-25 19.5zm9.3-11.6c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4z" />
        </svg>
      ),
    },
    {
      name: "Django & DRF",
      category: "Languages & Frameworks",
      badge: "Backend",
      iconBg: "bg-[#092E20]/10",
      borderColor: "border-[#092E20]/30",
      iconColor: "text-[#092E20]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M11.146 0h3.333v16.71c-.792.125-1.396.167-2.063.167-3.416 0-4.916-1.583-4.916-4.542 0-3 1.77-4.708 4.437-4.708.438 0 .813.042 1.209.146V0zm-.042 10.438c-.375-.084-.667-.105-.98-.105-1.124 0-1.75.646-1.75 1.938 0 1.25.604 1.875 1.77 1.875.313 0 .584-.02.96-.083v-3.625zM24 6.77v14.48c0 5.437-2.875 7.624-7.562 7.624-2.438 0-4.23-.416-5.271-.979l1.104-2.854c.917.438 2.292.813 3.938.813 3.083 0 4.542-1.25 4.542-4.667v-.771c-.917 1.104-2.313 1.771-4.063 1.771-3.646 0-5.77-2.583-5.77-6.938 0-4.458 2.375-7.146 6.062-7.146 1.792 0 3.125.688 3.896 1.77V6.77H24zm-3.25 8.167c0-2.271-.979-3.771-2.77-3.771-1.688 0-2.709 1.458-2.709 3.771 0 2.271.979 3.729 2.709 3.729 1.791 0 2.77-1.5 2.77-3.729z" />
        </svg>
      ),
    },
    {
      name: "FastAPI",
      category: "Languages & Frameworks",
      badge: "Backend",
      iconBg: "bg-[#009688]/10",
      borderColor: "border-[#009688]/30",
      iconColor: "text-[#009688]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Selenium Scraping",
      category: "Languages & Frameworks",
      badge: "Scraping",
      iconBg: "bg-[#43B02A]/10",
      borderColor: "border-[#43B02A]/30",
      iconColor: "text-[#43B02A]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm1-13h-2v6h6v-2h-4z" />
        </svg>
      ),
    },

    // Databases & Caching
    {
      name: "PostgreSQL",
      category: "Databases & Caching",
      badge: "Database",
      iconBg: "bg-[#336791]/10",
      borderColor: "border-[#336791]/30",
      iconColor: "text-[#336791]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-5c0 .5-2.13 2-6 2s-6-1.5-6-2V9.77c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V12z" />
        </svg>
      ),
    },
    {
      name: "Redis Cache",
      category: "Databases & Caching",
      badge: "Caching",
      iconBg: "bg-[#DC382D]/10",
      borderColor: "border-[#DC382D]/30",
      iconColor: "text-[#DC382D]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2 1 7l11 5 11-5-11-5zm0 8.5L3.8 7 12 3.3 20.2 7 12 10.5zM1 12l11 5 11-5-2.2-1-8.8 4-8.8-4L1 12zm0 5l11 5 11-5-2.2-1-8.8 4-8.8-4L1 17z" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      category: "Databases & Caching",
      badge: "Database",
      iconBg: "bg-[#4479A1]/10",
      borderColor: "border-[#4479A1]/30",
      iconColor: "text-[#4479A1]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      name: "SQLAlchemy & ORM",
      category: "Databases & Caching",
      badge: "ORM",
      iconBg: "bg-[#D71F00]/10",
      borderColor: "border-[#D71F00]/30",
      iconColor: "text-[#D71F00]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
    },

    // Async & Cloud
    {
      name: "Celery & Beat",
      category: "Async & Cloud",
      badge: "Async Queue",
      iconBg: "bg-[#37814A]/10",
      borderColor: "border-[#37814A]/30",
      iconColor: "text-[#37814A]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
      ),
    },
    {
      name: "Docker Containers",
      category: "Async & Cloud",
      badge: "DevOps",
      iconBg: "bg-[#2496ED]/10",
      borderColor: "border-[#2496ED]/30",
      iconColor: "text-[#2496ED]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zM23.79 11.04c-.38-.28-1.25-.37-1.92-.24-.09-.64-.44-1.21-.99-1.68l-.37-.25-.25.37c-.49.73-.62 1.93-.11 2.73-.23.12-.68.29-1.28.29H.06a.07.07 0 0 0-.06.07c.07 2.05.7 4.01 1.79 5.62 1.5 2.22 3.86 3.66 6.64 4.06 4.96.72 10.02-.9 13.56-4.32.73-.7 1.48-1.57 2.03-2.58.07-.12.1-.25.13-.39.56-.02 1.77-.07 2.4-1.2.04-.07.18-.35.24-.46l-.35-.24z" />
        </svg>
      ),
    },
    {
      name: "AWS (EC2/S3/RDS)",
      category: "Async & Cloud",
      badge: "Cloud",
      iconBg: "bg-[#FF9900]/10",
      borderColor: "border-[#FF9900]/30",
      iconColor: "text-[#FF9900]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
      ),
    },
    {
      name: "Gunicorn & Nginx",
      category: "Async & Cloud",
      badge: "Deployment",
      iconBg: "bg-[#009639]/10",
      borderColor: "border-[#009639]/30",
      iconColor: "text-[#009639]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
      ),
    },

    // AI & LLMs
    {
      name: "LangGraph",
      category: "AI & LLMs",
      badge: "Agentic AI",
      iconBg: "bg-[#10A37F]/10",
      borderColor: "border-[#10A37F]/30",
      iconColor: "text-[#10A37F]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2a4 4 0 0 0-4 4c0 1.61 1 3 2.42 3.63L9.17 14H6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4c0-.7-.18-1.37-.5-1.95l1.83-3.67c.22.04.44.07.67.07s.45-.03.67-.07l1.83 3.67c-.32.58-.5 1.25-.5 1.95a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4h-3.17l-1.25-4.37C13 9 14 7.61 14 6a4 4 0 0 0-4-4z" />
        </svg>
      ),
    },
    {
      name: "Azure OpenAI",
      category: "AI & LLMs",
      badge: "LLM Systems",
      iconBg: "bg-[#0078D4]/10",
      borderColor: "border-[#0078D4]/30",
      iconColor: "text-[#0078D4]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M11.217 19.384a3.501 3.501 0 0 0 6.783-1.217v-5.167l-6-3.35m0 9.734L5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34-2.534v-6.946m-8-3.17c-1.391-.236-2.787.395-3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6-3.348M12.783 4.616a3.501 3.501 0 0 0-6.783 1.217v5.067l6 3.45m6-2.347a3.501 3.501 0 0 0-4.446-5.266l-4.34 2.534v6.946M18 16.302c1.391.236 2.787-.395 3.534-1.689a3.474 3.474 0 0 0-1.271-4.745l-4.308-2.514l-5.955 3.42" />
        </svg>
      ),
    },
    {
      name: "ChromaDB",
      category: "AI & LLMs",
      badge: "Vector DB",
      iconBg: "bg-[#FF6C37]/10",
      borderColor: "border-[#FF6C37]/30",
      iconColor: "text-[#FF6C37]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
    },
    {
      name: "RAG Architecture",
      category: "AI & LLMs",
      badge: "Retrieval",
      iconBg: "bg-[#0284C7]/10",
      borderColor: "border-[#0284C7]/30",
      iconColor: "text-[#0284C7]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
        </svg>
      ),
    },

    // Integrations & Tools
    {
      name: "Razorpay Payments",
      category: "Integrations & Tools",
      badge: "Payments",
      iconBg: "bg-[#0284C7]/10",
      borderColor: "border-[#0284C7]/30",
      iconColor: "text-[#0284C7]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      name: "Webhook Ingestion",
      category: "Integrations & Tools",
      badge: "Events",
      iconBg: "bg-[#00A5EF]/10",
      borderColor: "border-[#00A5EF]/30",
      iconColor: "text-[#00A5EF]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
        </svg>
      ),
    },
    {
      name: "Pytest & TDD",
      category: "Integrations & Tools",
      badge: "Testing",
      iconBg: "bg-[#0A9EDC]/10",
      borderColor: "border-[#0A9EDC]/30",
      iconColor: "text-[#0A9EDC]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      ),
    },
    {
      name: "Swagger / OpenAPI",
      category: "Integrations & Tools",
      badge: "API Docs",
      iconBg: "bg-[#85EA2D]/10",
      borderColor: "border-[#85EA2D]/30",
      iconColor: "text-[#85EA2D]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
    },
    {
      name: "Git & GitHub",
      category: "Integrations & Tools",
      badge: "Version Control",
      iconBg: "bg-[#F05032]/10",
      borderColor: "border-[#F05032]/30",
      iconColor: "text-[#F05032]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      name: "Postman",
      category: "Integrations & Tools",
      badge: "Testing",
      iconBg: "bg-[#FF6C37]/10",
      borderColor: "border-[#FF6C37]/30",
      iconColor: "text-[#FF6C37]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
        </svg>
      ),
    },
    {
      name: "Linux & Shell",
      category: "Integrations & Tools",
      badge: "DevOps",
      iconBg: "bg-[#FCC624]/10",
      borderColor: "border-[#FCC624]/30",
      iconColor: "text-[#E5A50A]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zm-8.29-3.71L6.41 12l3.3-3.29 1.41 1.41L8.83 12l2.29 2.29-1.41 1z" />
        </svg>
      ),
    },
    {
      name: "REST APIs & JWT",
      category: "Integrations & Tools",
      badge: "Security",
      iconBg: "bg-[#6366F1]/10",
      borderColor: "border-[#6366F1]/30",
      iconColor: "text-[#6366F1]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Skills & Expertise"
      className="py-12 bg-sky-50/50 relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative ambient blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base md:text-lg font-normal">
            Explore my core technical stack, backend architectures, asynchronous
            queues, and AI frameworks used to engineer scalable enterprise systems.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-500 to-cyan-600 text-white shadow-md shadow-sky-500/25 scale-105"
                      : "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-600 border border-sky-200/80 shadow-2xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-sm hover:shadow-xl hover:shadow-sky-100/80 hover:border-sky-400 transition-all duration-300 flex flex-col items-center justify-between text-center group hover:-translate-y-1.5 relative overflow-hidden min-h-[140px]"
            >
              {/* Top Accent Hover Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-2xl mb-3 flex items-center justify-center border ${skill.iconBg} ${skill.borderColor} ${skill.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-2xs`}
              >
                {skill.icon}
              </div>

              {/* Name & Badge */}
              <div className="w-full">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                  {skill.name}
                </h3>
                <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                  {skill.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
