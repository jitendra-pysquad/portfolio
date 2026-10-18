"use client";

import React from "react";

export default function SkillsTab() {
  const skillCategories = [
    {
      title: "Languages & Backend",
      skills: [
        { name: "Python", icon: "fab fa-python", color: "#3776AB" },
        { name: "Django", icon: "fas fa-feather-alt", color: "#092E20" },
        { name: "Django REST Framework (DRF)", icon: "fas fa-server", color: "#A30000" },
        { name: "FastAPI", icon: "fas fa-bolt", color: "#009688" },
        { name: "Backend Architecture", icon: "fas fa-cubes", color: "var(--primary-color)" },
        { name: "Selenium", icon: "fas fa-spider", color: "#43B02A" },
        { name: "Web Scraping", icon: "fas fa-code", color: "#FF6F00" },
      ],
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
        { name: "Redis", icon: "fas fa-layer-group", color: "#DC382D" },
        { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
        { name: "SQLAlchemy / ORM", icon: "fas fa-project-diagram", color: "#D71F00" },
        { name: "Query Optimization", icon: "fas fa-tachometer-alt", color: "#10B981" },
      ],
    },
    {
      title: "Async & Background Jobs",
      skills: [
        { name: "Celery", icon: "fas fa-tasks", color: "#37814A" },
        { name: "Celery Beat", icon: "fas fa-clock", color: "#22C55E" },
        { name: "Redis Message Broker", icon: "fas fa-exchange-alt", color: "#DC382D" },
        { name: "Asynchronous Processing", icon: "fas fa-microchip", color: "var(--primary-color)" },
        { name: "Webhooks", icon: "fas fa-paper-plane", color: "#F59E0B" },
      ],
    },
    {
      title: "Integrations & Third-Party APIs",
      skills: [
        { name: "Razorpay Payments & Subscriptions", icon: "fas fa-credit-card", color: "#0C2340" },
        { name: "WhatsApp Bot API", icon: "fab fa-whatsapp", color: "#25D366" },
        { name: "Slack API", icon: "fab fa-slack", color: "#4A154B" },
        { name: "Discord API", icon: "fab fa-discord", color: "#5865F2" },
        { name: "Telegram Bot API", icon: "fab fa-telegram", color: "#0088CC" },
        { name: "Healthcare APIs (NHCX, ABDM)", icon: "fas fa-heartbeat", color: "#EF4444" },
        { name: "HubSpot / Salesforce / Odoo CRM", icon: "fas fa-network-wired", color: "#FF7A59" },
        { name: "Zendesk & Freshdesk", icon: "fas fa-headset", color: "#03363D" },
        { name: "Brevo Email API", icon: "fas fa-envelope-open-text", color: "#0B99FF" },
      ],
    },
    {
      title: "Deployment & Cloud",
      skills: [
        { name: "AWS EC2", icon: "fab fa-aws", color: "#FF9900" },
        { name: "AWS S3", icon: "fas fa-box", color: "#569A31" },
        { name: "AWS RDS", icon: "fas fa-database", color: "#3B48CC" },
        { name: "AWS Lambda", icon: "fas fa-bolt", color: "#FF9900" },
        { name: "Route 53 & CloudWatch", icon: "fas fa-chart-line", color: "#E7157B" },
        { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
        { name: "Gunicorn & Nginx", icon: "fas fa-shield-alt", color: "#009639" },
        { name: "Linux / Ubuntu", icon: "fab fa-linux", color: "#FCC624" },
      ],
    },
    {
      title: "AI / LLM & Vector Systems",
      skills: [
        { name: "RAG (Retrieval-Augmented Gen)", icon: "fas fa-brain", color: "#8B5CF6" },
        { name: "Azure OpenAI Integration", icon: "fas fa-robot", color: "#0078D4" },
        { name: "LangGraph Agentic Workflows", icon: "fas fa-sitemap", color: "#10B981" },
        { name: "ChromaDB & Vector Databases", icon: "fas fa-cube", color: "#F43F5E" },
        { name: "Prompt Engineering", icon: "fas fa-terminal", color: "#38BDF8" },
      ],
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Pytest", icon: "fas fa-vial", color: "#0A9EDC" },
        { name: "Django TestCase", icon: "fas fa-check-double", color: "#092E20" },
        { name: "Swagger / OpenAPI", icon: "fas fa-file-code", color: "#85EA2D" },
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "GitHub", icon: "fab fa-github", color: "var(--text-main)" },
        { name: "Bitbucket", icon: "fab fa-bitbucket", color: "#0052CC" },
        { name: "VS Code & Postman", icon: "fas fa-laptop-code", color: "#FF6C37" },
      ],
    },
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container-v2" style={{ marginTop: "1rem" }}>
        {skillCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className="tech-stack-section fade-in"
            style={{ animationDelay: `${catIdx * 0.08}s` }}
          >
            <h3 className="tech-stack-heading">{category.title}</h3>
            <div className="tech-stack-pills">
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="tech-pill">
                  <i
                    className={skill.icon}
                    style={{ marginRight: "10px", color: skill.color }}
                  ></i>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
