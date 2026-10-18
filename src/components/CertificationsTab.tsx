"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";

export default function CertificationsTab() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Certifications &amp; Credentials</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          margin: "1.5rem 0 2.5rem",
        }}
      >
        {RESUME_DATA.certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              background: "var(--bg-item)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-md)",
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              boxShadow: "0 4px 15px var(--bs-light)",
              transition: "var(--transition)",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "var(--icon-bg)",
                color: "var(--primary-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                flexShrink: 0,
              }}
            >
              <i className="fas fa-certificate"></i>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  marginBottom: "0.2rem",
                }}
              >
                {cert.name}
              </h4>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                {cert.issuer} • <span style={{ color: "var(--primary-color)", fontWeight: 600 }}>{cert.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Languages Grid */}
      <h3 className="services-heading">Spoken Languages</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {RESUME_DATA.languages.map((lang, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--bg-item)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-md)",
              padding: "1.2rem 1.4rem",
              boxShadow: "0 4px 12px var(--bs-light)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "var(--text-main)",
                marginBottom: "0.25rem",
              }}
            >
              {lang.name}
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {lang.proficiency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
