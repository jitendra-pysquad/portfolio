"use client";

import React, { useState } from "react";

type SandboxTab = "rag" | "celery" | "razorpay" | "rbac";

export default function ArchitectureTab() {
  const [activeSubTab, setActiveSubTab] = useState<SandboxTab>("rag");

  // RAG Pipeline Simulation
  const [ragQuery, setRagQuery] = useState("What is the pre-authorization claim threshold for CareNav?");
  const [ragRunning, setRagRunning] = useState(false);
  const [ragResult, setRagResult] = useState<{
    status: string;
    tokens: number;
    latency: string;
    similarity: string;
    answer: string;
  } | null>({
    status: "200 OK - Context Retrieved",
    tokens: 412,
    latency: "138ms",
    similarity: "0.912 (Cosine)",
    answer:
      "According to CareNav Policy Section 4.2: Pre-authorization is mandatory for cashless hospitalization claims exceeding ₹25,000 or any planned surgical intervention under ABDM guidelines.",
  });

  const runRagDemo = () => {
    setRagRunning(true);
    setRagResult(null);
    setTimeout(() => {
      setRagRunning(false);
      setRagResult({
        status: "200 OK - Context Retrieved",
        tokens: 384,
        latency: "125ms",
        similarity: "0.941 (Cosine)",
        answer: `Query processed via Azure OpenAI Embeddings & ChromaDB: "${ragQuery}". LangGraph agent successfully grounded prompt context and orchestrated factual response without hallucinations.`,
      });
    }, 700);
  };

  // Celery Pipeline Simulation
  const [celeryRunning, setCeleryRunning] = useState(false);
  const [celeryTasks, setCeleryTasks] = useState([
    {
      id: "celery-task-9481a",
      name: "tasks.process_insurer_email_sync",
      queue: "priority:high",
      status: "SUCCESS",
      duration: "0.48s",
      timestamp: "10:14:02 UTC",
    },
    {
      id: "celery-task-9481b",
      name: "tasks.generate_claim_audit_pdf",
      queue: "default",
      status: "SUCCESS",
      duration: "1.12s",
      timestamp: "10:14:05 UTC",
    },
  ]);

  const dispatchCeleryJob = () => {
    setCeleryRunning(true);
    const newId = `celery-task-${Math.random().toString(36).substring(2, 7)}`;
    const newTask = {
      id: newId,
      name: "tasks.sync_nhcx_claim_bundle",
      queue: "priority:high",
      status: "PENDING",
      duration: "running...",
      timestamp: "Just now",
    };

    setCeleryTasks((prev) => [newTask, ...prev.slice(0, 3)]);

    setTimeout(() => {
      setCeleryTasks((prev) =>
        prev.map((t) =>
          t.id === newId ? { ...t, status: "SUCCESS", duration: "0.36s" } : t
        )
      );
      setCeleryRunning(false);
    }, 900);
  };

  // Razorpay Webhook Simulation
  const [webhookStatus, setWebhookStatus] = useState<string | null>(null);
  const simulateRazorpay = () => {
    setWebhookStatus("verifying");
    setTimeout(() => {
      setWebhookStatus("success");
    }, 600);
  };

  // RBAC Role State
  const [selectedRole, setSelectedRole] = useState<"admin" | "hospital_user" | "insurer">("hospital_user");

  return (
    <div className="fade-in">
      <h2 className="section-title">Architecture Sandbox</h2>
      <p className="about-text" style={{ marginTop: "0.5rem" }}>
        Interactive architectural simulations demonstrating production backend designs: Celery task queues, RAG vector search with Azure OpenAI, Razorpay webhook validation, and multi-tenant RBAC.
      </p>

      {/* Sub tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          margin: "1.5rem 0",
        }}
      >
        <button
          onClick={() => setActiveSubTab("rag")}
          className="badge"
          style={{
            cursor: "pointer",
            background: activeSubTab === "rag" ? "var(--primary-gradient)" : "var(--bg-item)",
            color: activeSubTab === "rag" ? "#ffffff" : "var(--text-muted)",
            borderColor: activeSubTab === "rag" ? "transparent" : "var(--border-color)",
          }}
        >
          <i className="fas fa-brain"></i> RAG &amp; ChromaDB
        </button>

        <button
          onClick={() => setActiveSubTab("celery")}
          className="badge"
          style={{
            cursor: "pointer",
            background: activeSubTab === "celery" ? "var(--primary-gradient)" : "var(--bg-item)",
            color: activeSubTab === "celery" ? "#ffffff" : "var(--text-muted)",
            borderColor: activeSubTab === "celery" ? "transparent" : "var(--border-color)",
          }}
        >
          <i className="fas fa-bolt"></i> Celery &amp; Redis Queue
        </button>

        <button
          onClick={() => setActiveSubTab("razorpay")}
          className="badge"
          style={{
            cursor: "pointer",
            background: activeSubTab === "razorpay" ? "var(--primary-gradient)" : "var(--bg-item)",
            color: activeSubTab === "razorpay" ? "#ffffff" : "var(--text-muted)",
            borderColor: activeSubTab === "razorpay" ? "transparent" : "var(--border-color)",
          }}
        >
          <i className="fas fa-credit-card"></i> Razorpay Webhooks
        </button>

        <button
          onClick={() => setActiveSubTab("rbac")}
          className="badge"
          style={{
            cursor: "pointer",
            background: activeSubTab === "rbac" ? "var(--primary-gradient)" : "var(--bg-item)",
            color: activeSubTab === "rbac" ? "#ffffff" : "var(--text-muted)",
            borderColor: activeSubTab === "rbac" ? "transparent" : "var(--border-color)",
          }}
        >
          <i className="fas fa-user-shield"></i> Multi-Tenant RBAC
        </button>
      </div>

      {/* Subtab Content */}
      <div
        style={{
          background: "var(--bg-item)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--border-radius-md)",
          padding: "1.75rem",
          boxShadow: "0 4px 15px var(--bs-light)",
        }}
      >
        {activeSubTab === "rag" && (
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
              Retrieval-Augmented Generation (LangGraph + Azure OpenAI + ChromaDB)
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Private enterprise documents are converted to embeddings and queried via cosine similarity to feed grounded context to Azure OpenAI GPT-4o.
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              <input
                type="text"
                value={ragQuery}
                onChange={(e) => setRagQuery(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: "240px",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--border-radius-sm)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-body)",
                  color: "var(--text-main)",
                }}
              />
              <button
                onClick={runRagDemo}
                disabled={ragRunning}
                className="btn-download"
                style={{ width: "auto", margin: 0, padding: "0.75rem 1.25rem" }}
              >
                {ragRunning ? "Retrieving..." : "Query ChromaDB"}
              </button>
            </div>

            {ragResult && (
              <div
                style={{
                  background: "var(--bg-body)",
                  padding: "1.25rem",
                  borderRadius: "var(--border-radius-sm)",
                  border: "1px solid var(--border-color)",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.82rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", color: "var(--primary-color)", fontWeight: 700 }}>
                  <span>rag_service.py</span>
                  <span style={{ color: "#22c55e" }}>{ragResult.status}</span>
                </div>
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "0.75rem", color: "var(--text-muted)" }}>
                  <span>Latency: <strong style={{ color: "var(--text-main)" }}>{ragResult.latency}</strong></span>
                  <span>Similarity: <strong style={{ color: "var(--primary-color)" }}>{ragResult.similarity}</strong></span>
                  <span>Tokens: <strong style={{ color: "var(--text-main)" }}>{ragResult.tokens}</strong></span>
                </div>
                <div style={{ color: "var(--text-main)", lineHeight: 1.6 }}>
                  &quot;{ragResult.answer}&quot;
                </div>
              </div>
            )}
          </div>
        )}

        {activeSubTab === "celery" && (
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
              Celery Worker &amp; Redis Broker Pipeline
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Asynchronous non-blocking task queue used in <strong>NIVA</strong>, <strong>CareNav</strong>, and <strong>ShareLyze</strong>.
            </p>

            <button
              onClick={dispatchCeleryJob}
              disabled={celeryRunning}
              className="btn-download"
              style={{ width: "auto", display: "inline-flex", margin: "0 0 1.25rem 0" }}
            >
              {celeryRunning ? "Dispatching..." : "⚡ Dispatch New Celery Task"}
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {celeryTasks.map((t) => (
                <div
                  key={t.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 1rem",
                    background: "var(--bg-body)",
                    borderRadius: "var(--border-radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.82rem",
                  }}
                >
                  <div>
                    <strong style={{ color: "var(--text-main)" }}>{t.name}</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>ID: {t.id} • [{t.queue}]</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ color: t.status === "SUCCESS" ? "#22c55e" : "#eab308", fontWeight: 700 }}>
                      [{t.status}]
                    </span>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>{t.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === "razorpay" && (
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
              Razorpay HMAC Webhook Idempotency
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Validates cryptographic signatures and prevents duplicate credit additions through atomic PostgreSQL transactions.
            </p>

            <button
              onClick={simulateRazorpay}
              className="btn-download"
              style={{ width: "auto", display: "inline-flex", margin: "0 0 1.25rem 0" }}
            >
              Simulate Razorpay Webhook Event
            </button>

            <div
              style={{
                background: "var(--bg-body)",
                padding: "1rem",
                borderRadius: "var(--border-radius-sm)",
                border: "1px solid var(--border-color)",
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.8rem",
              }}
            >
              <pre style={{ margin: 0, color: "var(--text-muted)" }}>
{`POST /api/v1/payments/webhook/
Status: ${webhookStatus === "success" ? "200 OK (Verified & Committed)" : "Idle"}
Signature Validated: ${webhookStatus === "success" ? "true (HMAC-SHA256)" : "waiting..."}
Transaction: ${webhookStatus === "success" ? "DB Row Lock Acquired -> Credits Added" : "Awaiting event"}`}
              </pre>
            </div>
          </div>
        )}

        {activeSubTab === "rbac" && (
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
              Multi-Tenant RBAC Security (CareNav Healthcare)
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Ensures multi-hospital data isolation so medical institutions only view their own patients, claims, and audit logs.
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {(["hospital_user", "insurer", "admin"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRole(r)}
                  className="badge"
                  style={{
                    cursor: "pointer",
                    background: selectedRole === r ? "var(--primary-gradient)" : "var(--bg-body)",
                    color: selectedRole === r ? "#fff" : "var(--text-muted)",
                    borderColor: selectedRole === r ? "transparent" : "var(--border-color)",
                  }}
                >
                  Role: {r.toUpperCase().replace("_", " ")}
                </button>
              ))}
            </div>

            <div
              style={{
                background: "var(--bg-body)",
                padding: "1rem",
                borderRadius: "var(--border-radius-sm)",
                border: "1px solid var(--border-color)",
                fontSize: "0.85rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <div>
                <span style={{ color: "var(--text-muted)" }}>Selected Role:</span>{" "}
                <strong style={{ color: "var(--primary-color)" }}>{selectedRole.toUpperCase()}</strong>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>GET /api/v1/claims/ (Hospital Claims):</span>{" "}
                <span style={{ color: "#22c55e", fontWeight: 700 }}>200 OK (Strict tenant_id scope)</span>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>POST /api/v1/claims/adjudicate/ (Approve Claim):</span>{" "}
                {selectedRole === "hospital_user" ? (
                  <span style={{ color: "#ef4444", fontWeight: 700 }}>403 FORBIDDEN (Insurer/Admin Only)</span>
                ) : (
                  <span style={{ color: "#22c55e", fontWeight: 700 }}>200 OK (Authorized)</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
