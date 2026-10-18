"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";

export default function ResumeTab() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Resume</h2>

      <div style={{ display: "grid", gap: "2.5rem", marginTop: "1rem" }}>
        {/* Experience Section */}
        <div className="fade-in" style={{ animationDelay: "0.1s" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "var(--text-main)",
            }}
          >
            <i className="fas fa-briefcase" style={{ color: "var(--primary-color)" }}></i>{" "}
            Experience
          </h3>

          <div className="timeline-wrapper">
            {RESUME_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-date">{exp.period}</div>
                <h4 className="timeline-title">{exp.role}</h4>
                <div className="timeline-company">
                  {exp.company} • 📍 {exp.location}
                </div>
                <ul className="timeline-desc">
                  {exp.description.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>

                {/* Tech Pills for each job */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginTop: "0.85rem",
                  }}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="fade-in" style={{ animationDelay: "0.2s" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "var(--text-main)",
            }}
          >
            <i
              className="fas fa-graduation-cap"
              style={{ color: "var(--primary-color)" }}
            ></i>{" "}
            Education
          </h3>

          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-date">{RESUME_DATA.education.period}</div>
              <h4 className="timeline-title">{RESUME_DATA.education.degree}</h4>
              <div className="timeline-company">{RESUME_DATA.education.institution} • {RESUME_DATA.education.location}</div>
              <ul className="timeline-desc">
                <li>{RESUME_DATA.education.details}</li>
                <li>Comprehensive study of Database Management Systems, Data Structures, OOP, Software Engineering.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
