export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI / LLM" | "Enterprise Backend" | "SaaS & Payments" | "Web Scraping & APIs";
  description: string;
  techStack: string[];
  metrics: string[];
  highlights: string[];
  architectureDiagram?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badgeColor: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export const RESUME_DATA = {
  personal: {
    name: "Jitendra Chaudhary",
    title: "Python Backend Developer & AI Systems Engineer",
    experienceYears: "3.5+",
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 99785 98171",
    email: "jitendrachaudhary9971@gmail.com",
    linkedin: "https://linkedin.com/in/jitendrachaudharych",
    linkedinHandle: "linkedin.com/in/jitendrachaudharych",
    github: "https://github.com",
    status: "Available for Senior Backend & AI Engineering Roles",
    bio: "Python Backend Developer with 3.5+ years of experience building scalable REST APIs and backend services using Python, Django, Django REST Framework, FastAPI, PostgreSQL, Redis, and Celery. Experienced in JWT authentication, role-based access control, asynchronous task processing, Razorpay payment and subscription workflows, webhooks, third-party API integrations, Swagger API documentation, and testing with pytest. Experienced in deploying applications on AWS EC2 with Gunicorn, Nginx, and Docker, and actively upskilling in RAG-based AI services with Azure OpenAI and ChromaDB.",
  },

  stats: [
    { label: "Years Experience", value: "3.5+" },
    { label: "Production Backend Systems", value: "4+" },
    { label: "Third-Party Integrations", value: "15+" },
    { label: "Async Queue & Webhooks", value: "99.9%" },
  ],

  skillCategories: [
    {
      category: "Languages & Frameworks",
      icon: "code",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django & Django REST Framework (DRF)", level: 95 },
        { name: "FastAPI", level: 90 },
        { name: "Backend Architecture & Design Patterns", level: 90 },
        { name: "Selenium & Web Scraping", level: 85 },
      ],
    },
    {
      category: "Databases & Caching",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: 92 },
        { name: "Redis (Caching & Message Broker)", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "SQLAlchemy & Django ORM", level: 92 },
        { name: "Query Optimization & Indexing", level: 88 },
      ],
    },
    {
      category: "Async & Task Queues",
      icon: "cpu",
      skills: [
        { name: "Celery & Celery Beat", level: 92 },
        { name: "Asynchronous Processing", level: 90 },
        { name: "Webhook Ingestion & Idempotency", level: 92 },
        { name: "Scheduled Cron Jobs & Background Tasks", level: 90 },
      ],
    },
    {
      category: "Cloud, DevOps & Deployment",
      icon: "cloud",
      skills: [
        { name: "AWS (EC2, S3, RDS, Lambda, Route 53)", level: 85 },
        { name: "CloudFormation & CloudWatch", level: 80 },
        { name: "Docker & Containerization", level: 85 },
        { name: "Gunicorn & Nginx Reverse Proxy", level: 88 },
        { name: "Linux Administration & Shell Scripting", level: 85 },
      ],
    },
    {
      category: "AI, LLMs & Vector Search",
      icon: "sparkles",
      skills: [
        { name: "RAG (Retrieval-Augmented Generation)", level: 85 },
        { name: "Azure OpenAI Integration", level: 85 },
        { name: "LangGraph Agentic Workflows", level: 82 },
        { name: "ChromaDB & Vector Databases", level: 84 },
        { name: "Prompt Engineering & Token Optimization", level: 82 },
      ],
    },
    {
      category: "Integrations & APIs",
      icon: "share-2",
      skills: [
        { name: "Razorpay Payments & Subscriptions", level: 92 },
        { name: "WhatsApp & Telegram Bot APIs", level: 90 },
        { name: "Slack & Discord Webhooks", level: 88 },
        { name: "HubSpot, Salesforce & Odoo CRM", level: 85 },
        { name: "Healthcare APIs (NHCX, ABDM)", level: 84 },
        { name: "Zendesk & Freshdesk Helpdesks", level: 86 },
      ],
    },
    {
      category: "Testing & Developer Tools",
      icon: "tool",
      skills: [
        { name: "Pytest & Django TestCase", level: 88 },
        { name: "Swagger / OpenAPI Documentation", level: 90 },
        { name: "Git, GitHub & Bitbucket", level: 90 },
        { name: "CI/CD Workflows (Basic)", level: 80 },
        { name: "VS Code & Postman", level: 92 },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      company: "PySquad Informatics",
      role: "Python Backend Developer",
      location: "Ahmedabad, Gujarat, India",
      period: "Feb 2023 – Present",
      current: true,
      type: "Full-Time",
      description: [
        "Build and maintain production-grade REST APIs and scalable backend services using Python, Django, and Django REST Framework (DRF), with PostgreSQL for data modeling and JWT authentication, role-based access control (RBAC), and permission-based API access for multiple user roles.",
        "Deploy Django applications on AWS EC2 using Gunicorn and Nginx, with Docker containers where required for consistent environments.",
        "Run asynchronous background processing and scheduled jobs with Redis, Celery, and Celery Beat to handle long-running workflows and automated tasks without blocking requests.",
        "Integrate the Razorpay payment gateway with subscription management, payment verification, and webhook processing for resilient, idempotent billing workflows.",
        "Develop third-party API integrations with WhatsApp, Slack, Discord, Telegram, CRM/ERP (HubSpot, Salesforce, Odoo), and healthcare platforms (NHCX, ABDM) to automate multi-system data synchronization.",
        "Develop AI-powered backend services using LangGraph, Azure OpenAI, and ChromaDB for RAG-based knowledge retrieval, conversational workflows, and LLM integrations.",
      ],
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
    },
    {
      company: "Agile Technology",
      role: "Python / Django Developer",
      location: "Ahmedabad, Gujarat, India",
      period: "6 Months",
      current: false,
      type: "Full-Time",
      description: [
        "Developed backend features in Python and Django, including REST APIs, database schema operations, and core business logic.",
        "Collaborated on the integration of frontend client applications with backend REST endpoints using PostgreSQL.",
        "Conducted code debugging, query optimization, and maintained version-controlled feature releases via Git-based workflows.",
      ],
      technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Git", "Debugging"],
    },
  ] as Experience[],

  projects: [
    {
      id: "niva",
      title: "NIVA – Agentic AI Chatbot Platform",
      subtitle: "Omnichannel AI Assistant with RAG & Enterprise CRM Connectors",
      category: "AI / LLM",
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
        "Constructed an omnichannel integration layer connecting WhatsApp, Instagram, Slack, Telegram, Discord, Microsoft Teams, and LINE, combined with bidirectional CRM sync into HubSpot, Salesforce/SAP, Odoo, Zendesk, and Freshdesk.",
      ],
      featured: true,
    },
    {
      id: "carenav",
      title: "CareNav – Hospital Insurance Claims Platform",
      subtitle: "Multi-Tenant Healthcare Pre-Auth & Claims Engine with NHCX / ABDM",
      category: "Enterprise Backend",
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
      featured: true,
    },
    {
      id: "sharelyze",
      title: "ShareLyze – Document Sharing & Analytics",
      subtitle: "Secure Content Distribution Platform with Engagement Telemetry",
      category: "SaaS & Payments",
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
      featured: true,
    },
    {
      id: "startlyze",
      title: "Startlyze – E-Commerce Price Monitoring",
      subtitle: "Headless Web Scraping Engine & Real-Time Price Analytics API",
      category: "Web Scraping & APIs",
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
      featured: true,
    },
  ] as Project[],

  certifications: [
    {
      name: "Python Programming Certification",
      issuer: "IBM",
      year: "Apr 2026",
      badgeColor: "#3b82f6",
    },
    {
      name: "Django for Everybody Specialization",
      issuer: "University of Michigan",
      year: "2026",
      badgeColor: "#10b981",
    },
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      year: "2026",
      badgeColor: "#f59e0b",
    },
    {
      name: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      year: "2026",
      badgeColor: "#06b6d4",
    },
  ] as Certification[],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Smt. B.K. Mehta (IT Centre) BCA College",
    period: "Aug 2018 – Apr 2022",
    location: "Gujarat, India",
    details: "Core coursework in Computer Science, Database Management Systems (DBMS), Data Structures & Algorithms, Object-Oriented Programming, and Software Engineering.",
  },

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Hindi", proficiency: "Full Professional / Fluent" },
    { name: "Gujarati", proficiency: "Native / Bilingual" },
  ],
};
