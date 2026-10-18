"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";

export default function AboutTab() {
  const services = [
    {
      icon: "fas fa-server",
      title: "Backend Architecture & REST APIs",
      description:
        "Building production-grade, scalable REST APIs using Python, Django, DRF, and FastAPI with robust PostgreSQL data modeling, JWT authentication, and fine-grained RBAC.",
    },
    {
      icon: "fas fa-bolt",
      title: "Async Task Queues & Workers",
      description:
        "Architecting asynchronous background processing and automated scheduled jobs with Redis, Celery, and Celery Beat to handle heavy workflows without request latency.",
    },
    {
      icon: "fas fa-credit-card",
      title: "Payment & Webhook Workflows",
      description:
        "Integrating Razorpay payment gateways with end-to-end subscription management, HMAC-SHA256 signature verification, and idempotent webhook handling.",
    },
    {
      icon: "fas fa-brain",
      title: "AI Services & RAG Systems",
      description:
        "Developing AI-powered backend systems using LangGraph, Azure OpenAI, and ChromaDB vector search for context-grounded conversational workflows and knowledge retrieval.",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Deployment & DevOps",
      description:
        "Deploying and orchestrating applications on AWS EC2, S3, RDS, and Lambda using Docker containerization, Gunicorn, Nginx reverse proxy, and Linux environments.",
    },
    {
      icon: "fas fa-plug",
      title: "Enterprise & Healthtech APIs",
      description:
        "Connecting multi-channel messaging (WhatsApp, Telegram, Slack) with CRMs (HubSpot, Salesforce, Odoo) and healthcare protocols (NHCX, ABDM).",
    },
  ];

  const allTechList = [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Celery Beat",
    "LangGraph",
    "Azure OpenAI",
    "ChromaDB",
    "Vector Databases",
    "RAG",
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
    "Docker",
    "Gunicorn",
    "Nginx",
    "Razorpay",
    "Webhooks",
    "JWT & RBAC",
    "Pytest",
    "Swagger / OpenAPI",
    "Selenium",
    "Web Scraping",
    "NHCX / ABDM",
    "Git & GitHub",
    "Linux",
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title">About Me</h2>

      {/* Bio Paragraphs */}
      <p className="about-text" style={{ animationDelay: "0.1s" }}>
        I am a <strong className="gradient-text">Python Backend Developer</strong> at{" "}
        <strong>PySquad Informatics</strong> with <strong>3.5+ years of experience</strong>{" "}
        building scalable REST APIs, microservices, and reliable backend architectures using{" "}
        <strong>Python, Django, Django REST Framework, FastAPI, PostgreSQL, Redis, and Celery</strong>.
      </p>

      <p className="about-text" style={{ animationDelay: "0.15s" }}>
        My core expertise spans <strong>JWT authentication</strong>, <strong>role-based access control (RBAC)</strong>, 
        <strong> asynchronous task processing</strong>, <strong>Razorpay payment and subscription workflows</strong>, 
        <strong> webhooks</strong>, and <strong>third-party API integrations</strong> with Swagger documentation and pytest suites. 
        I am also actively building and upskilling in <strong>RAG-based AI services</strong> with <strong>Azure OpenAI</strong>, 
        <strong> LangGraph</strong>, and <strong>ChromaDB</strong>.
      </p>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-box fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="stat-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="stat-info">
            <h3>3.5+</h3>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="stat-box fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="stat-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="stat-info">
            <h3>6+</h3>
            <p>Production Systems</p>
          </div>
        </div>

        <div className="stat-box fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="stat-icon">
            <i className="fas fa-plug"></i>
          </div>
          <div className="stat-info">
            <h3>15+</h3>
            <p>API Integrations</p>
          </div>
        </div>

        <div className="stat-box fade-in" style={{ animationDelay: "0.35s" }}>
          <div className="stat-icon">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="stat-info">
            <h3>99.9%</h3>
            <p>Queue Reliability</p>
          </div>
        </div>
      </div>

      {/* What I'm Doing / Engineering Services */}
      <h3 className="services-heading">What I&apos;m Doing</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card fade-in"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <div className="service-content">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Pills */}
      <div className="tech-stack-section fade-in" style={{ animationDelay: "0.4s" }}>
        <h3 className="tech-stack-heading">Technologies &amp; Frameworks</h3>
        <div className="tech-stack-pills">
          {allTechList.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
