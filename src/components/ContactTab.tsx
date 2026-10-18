
"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resumeData";

export default function ContactTab() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const contactLinks = [
    {
      id: "email",
      platform: "Email",
      handle: RESUME_DATA.personal.email,
      desc: "Send me an email or click to copy",
      iconClass: "fas fa-envelope",
      url: `mailto:${RESUME_DATA.personal.email}`,
      copyText: RESUME_DATA.personal.email,
    },
    {
      id: "whatsapp",
      platform: "WhatsApp / Phone",
      handle: RESUME_DATA.personal.phone,
      desc: "Instant chat on WhatsApp",
      iconClass: "fab fa-whatsapp",
      url: "https://wa.me/919978598171",
      copyText: RESUME_DATA.personal.phone,
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      handle: RESUME_DATA.personal.linkedinHandle,
      desc: "Connect with me on LinkedIn",
      iconClass: "fab fa-linkedin-in",
      url: RESUME_DATA.personal.linkedin,
    },
    {
      id: "location",
      platform: "Location",
      handle: RESUME_DATA.personal.location,
      desc: "Available for on-site & remote roles",
      iconClass: "fas fa-map-marker-alt",
      url: "https://maps.google.com/?q=Ahmedabad,+Gujarat,+India",
    },
  ];

  return (
    <div className="fade-in contact-section">
      {/* Section Header */}
      <div className="section-header" style={{ marginBottom: "2rem" }}>
        <h2 className="section-title">Get in Touch</h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            marginTop: "0.25rem",
            lineHeight: 1.6,
          }}
        >
          I&apos;m always open to discussing new backend engineering roles, scalable system architectures, or opportunities to collaborate.
        </p>
      </div>

      {/* Enhanced Contact Cards (Matching Reference) */}
      <div className="contact-grid-enhanced">
        {contactLinks.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="contact-card-v2 fade-in"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            onClick={(e) => {
              if (item.copyText && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                copyToClipboard(item.copyText, item.id);
              }
            }}
          >
            <div className="card-v2-icon">
              <i className={item.iconClass}></i>
            </div>
            <div className="card-v2-content">
              <span>{item.platform}</span>
              <h3>
                {item.handle}
                {copiedType === item.id && (
                  <span style={{ color: "#22c55e", fontSize: "0.75rem", marginLeft: "6px" }}>
                    ✓ Copied!
                  </span>
                )}
              </h3>
              <p>{item.desc}</p>
            </div>
            <div className="card-v2-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        ))}
      </div>

      {/* Extraordinary CTA Box (Matching Reference) */}
      <div className="cta-box fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="cta-content">
          <h3>
            Let&apos;s build something{" "}
            <span className="gradient-text">extraordinary</span>
          </h3>
          <p>
            Experienced Python Backend Developer with 3.5+ years of delivering scalable APIs, Celery task pipelines, and agentic AI services. Currently available for full-time senior positions.
          </p>
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="btn-cta"
            id="cta-get-in-touch"
          >
            Get in Touch <i className="fas fa-paper-plane"></i>
          </a>
        </div>

        <div className="availability-indicator-v2">
          <div className="pulse-dot"></div>
          <span>Available Now</span>
        </div>
      </div>
    </div>
  );
}
