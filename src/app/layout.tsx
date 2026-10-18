import type { Metadata } from "next";
import { asset } from "@/lib/basePath";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jitendrachaudhary.dev"),
  title: "Portfolio | Jitendra Chaudhary",
  description:
    "Welcome to Jitendra's Portfolio. Python Backend Developer and AI Systems Engineer specializing in Django, DRF, FastAPI, PostgreSQL, Redis, Celery, AWS, and RAG-based AI services.",
  keywords: [
    "Jitendra Chaudhary",
    "portfolio",
    "jitendra",
    "python backend developer",
    "django developer",
    "fastapi",
    "celery",
    "redis",
    "ai engineer",
    "rag",
    "portfolio design",
    "portfolio website",
    "personal portfolio",
  ],
  authors: [{ name: "Jitendra Chaudhary" }],
  icons: {
    icon: [{ url: asset("/icon.png"), type: "image/png", sizes: "192x192" }],
    shortcut: asset("/favicon.ico"),
    apple: asset("/profile.png"),
  },
  openGraph: {
    title: "Portfolio | Jitendra Chaudhary",
    description:
      "Python Backend Developer with 3.5+ years of experience building scalable REST APIs, async task queues with Redis & Celery, and RAG-based AI services.",
    url: "https://jitendrachaudhary.dev",
    siteName: "Jitendra Chaudhary Portfolio",
    images: [
      {
        url: asset("/profile.png"),
        width: 1145,
        height: 1145,
        alt: "Jitendra Chaudhary - Python Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={asset("/icon.png")} type="image/png" sizes="192x192" />
        <link rel="shortcut icon" href={asset("/favicon.ico")} />
        <link rel="apple-touch-icon" href={asset("/profile.png")} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 min-h-screen antialiased selection:bg-sky-500/20">
        {children}
      </body>
    </html>
  );
}
