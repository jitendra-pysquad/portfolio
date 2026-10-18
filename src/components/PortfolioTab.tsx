"use client";

import React, { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/basePath";
import { RESUME_DATA, Project } from "@/data/resumeData";

export default function PortfolioTab() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const categories = [
    "All",
    "AI / LLM",
    "Enterprise Backend",
    "SaaS & Payments",
    "Web Scraping & APIs",
  ];

  const projectImages: Record<string, string> = {
    niva: asset("/projects/niva.png"),
    carenav: asset("/projects/carenav.png"),
    sharelyze: asset("/projects/sharelyze.png"),
    startlyze: asset("/projects/startlyze.jpg"),
  };

  const filteredProjects =
    selectedCategory === "All"
      ? RESUME_DATA.projects
      : RESUME_DATA.projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fade-in">
      <h2 className="section-title">Portfolio</h2>

      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          margin: "1rem 0 2rem",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="badge"
            style={{
              cursor: "pointer",
              background: selectedCategory === cat ? "var(--primary-gradient)" : "var(--bg-item)",
              color: selectedCategory === cat ? "#ffffff" : "var(--text-muted)",
              borderColor: selectedCategory === cat ? "transparent" : "var(--border-color)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project: Project, index: number) => {
          const isExpanded = expandedId === project.id;
          const imgSrc = projectImages[project.id] || asset("/projects/niva.png");

          return (
            <div
              key={project.id}
              className="project-card fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Project Image Card Header */}
              <div
                className="project-img"
                onClick={() => setLightboxImage({ src: imgSrc, title: project.title })}
                title="Click to view full image"
              >
                <span className="project-tag">{project.category}</span>
                <Image
                  src={imgSrc}
                  alt={project.title}
                  width={600}
                  height={340}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                  priority={index < 2}
                />
              </div>

              {/* Card Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Architecture Highlights */}
                {isExpanded && (
                  <div
                    style={{
                      margin: "1rem 0",
                      padding: "1rem",
                      background: "var(--bs-light)",
                      borderRadius: "var(--border-radius-sm)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--primary-color)",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Production Highlights:
                    </div>
                    <ul
                      style={{
                        paddingLeft: "1.1rem",
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} style={{ marginBottom: "0.3rem" }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Card Footer Links */}
                <div className="project-links">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="live-link"
                  >
                    <i className={isExpanded ? "fas fa-chevron-up" : "fas fa-info-circle"}></i>
                    {isExpanded ? "Hide Details" : "Architecture Specs"}
                  </button>

                  <button
                    onClick={() => setLightboxImage({ src: imgSrc, title: project.title })}
                    className="live-link"
                    style={{ marginLeft: "auto" }}
                  >
                    <i className="fas fa-expand"></i> View UI
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "1000px",
              width: "100%",
              background: "var(--bg-card)",
              borderRadius: "var(--border-radius-md)",
              border: "1px solid var(--border-color)",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 1.5rem",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-main)" }}>
                {lightboxImage.title}
              </h4>
              <button
                onClick={() => setLightboxImage(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "1.2rem",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ position: "relative", width: "100%", height: "min(550px, 70vh)" }}>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                style={{ objectFit: "contain", background: "#06090e" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
