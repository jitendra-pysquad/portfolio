"use client";

import React from "react";

export type TabType =
  | "about"
  | "resume"
  | "skills"
  | "portfolio"
  | "architecture"
  | "certifications"
  | "contact";

interface TopNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function TopNav({
  activeTab,
  setActiveTab,
  theme,
  onToggleTheme,
}: TopNavProps) {
  const tabs: { id: TabType; label: string }[] = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "architecture", label: "Architecture" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="top-nav fade-in">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-btn ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
          id={`nav-btn-${tab.id}`}
        >
          {tab.label}
        </button>
      ))}

      <button
        className="theme-toggle nav-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle Theme"
        title="Toggle Theme"
      >
        <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
      </button>
    </nav>
  );
}
