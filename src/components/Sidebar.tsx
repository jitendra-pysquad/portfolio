"use client";

import React, { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/basePath";
import { RESUME_DATA } from "@/data/resumeData";

interface SidebarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <aside className="sidebar">
      {/* Theme Toggle in Top Right of Sidebar */}
      <button
        onClick={onToggleTheme}
        className="theme-toggle sidebar-toggle"
        aria-label="Toggle Theme"
        title="Toggle Light/Dark Theme"
      >
        <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
      </button>

      {/* Profile Image with Animated Pulsing Ring & Green Online Status */}
      <div className="profile-img-container">
        <div className="profile-img-inner">
          <Image
            src={asset("/avatar.jpg")}
            alt={RESUME_DATA.personal.name}
            width={135}
            height={135}
            className="profile-img"
            priority
          />
        </div>
        <div className="active-status" title="Available for opportunities"></div>
      </div>

      {/* Name & Headline */}
      <h2>
        <span className="gradient-text">{RESUME_DATA.personal.name}</span>
      </h2>

      {/* Badges */}
      <div className="badges">
        <span className="badge">Python Backend Developer</span>
        <span className="badge">3.5+ Years Exp</span>
        <span className="badge">PySquad Informatics</span>
      </div>

      {/* Contact Info List */}
      <ul className="info-list">
        {/* Email */}
        <li
          className="info-item"
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
        >
          <div className="info-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="info-content">
            <p>EMAIL {copiedType === "email" ? "(COPIED!)" : ""}</p>
            <h4>{RESUME_DATA.personal.email}</h4>
          </div>
        </li>

        {/* Phone */}
        <li
          className="info-item"
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
        >
          <div className="info-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="info-content">
            <p>PHONE {copiedType === "phone" ? "(COPIED!)" : ""}</p>
            <h4>{RESUME_DATA.personal.phone}</h4>
          </div>
        </li>

        {/* Location */}
        <li className="info-item">
          <div className="info-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="info-content">
            <p>LOCATION</p>
            <h4>{RESUME_DATA.personal.location}</h4>
          </div>
        </li>


      </ul>

      {/* Direct Resume PDF Download Button */}
      <a
        href={asset("/Resume_Jitendra_Chaudhary.pdf")}
        download="Resume_Jitendra_Chaudhary.pdf"
        className="btn-download"
        id="sidebar-cv-btn"
        title="Click to directly download resume PDF"
      >
        <i className="fas fa-download"></i> Download Resume
      </a>

      {/* Social Links */}
      <div className="social-links">
        <a
          href={RESUME_DATA.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="LinkedIn Profile"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="GitHub Profile"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href={`mailto:${RESUME_DATA.personal.email}`}
          className="social-link"
          title="Send Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://wa.me/919978598171"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="WhatsApp Chat"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </aside>
  );
}
