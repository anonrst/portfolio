import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";

export const metadata: Metadata = {
  title: "Anon - Spring Boot Java Engineer | Backend Developer Portfolio",
  description: "Spring Boot Java focused engineer specializing in backend development, microservices, and scalable systems. Experienced with Java, Spring Boot, Docker, PostgreSQL, Redis.",
  keywords: ["Spring Boot Developer", "Java Engineer", "Backend Developer", "Microservices", "REST API", "Docker", "PostgreSQL", "Redis", "Kafka", "System Design"],
  authors: [{ name: "Anon" }],
  creator: "Anon",
  publisher: "Anon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anonrst311.vercel.app/",
    title: "Anon - Spring Boot Java Engineer | Backend Developer Portfolio",
    description: "Spring Boot Java focused engineer specializing in backend development, microservices, and scalable systems. Experienced with Java, Spring Boot, Docker, PostgreSQL, Redis.",
    siteName: "Anon Portfolio",
    images: [
      {
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/XrccRxK1upN7ap7zms8QxHxcOJp2/social-images/social-1772790342651-WIN_20260223_15_37_04_Pro.webp",
        width: 1200,
        height: 630,
        alt: "Anon - Spring Boot Java Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anon - Spring Boot Java Engineer | Backend Developer Portfolio",
    description: "Spring Boot Java focused engineer specializing in backend development, microservices, and scalable systems. Experienced with Java, Spring Boot, Docker, PostgreSQL, Redis.",
    creator: "@anonrst",
    images: ["https://storage.googleapis.com/gpt-engineer-file-uploads/XrccRxK1upN7ap7zms8QxHxcOJp2/social-images/social-1772790342651-WIN_20260223_15_37_04_Pro.webp"],
  },
  alternates: {
    canonical: "https://anonrst311.vercel.app/",
  },
  other: {
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ghchart.rshah.org" />
        <meta name="theme-color" content="#D97706" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anon",
              jobTitle: "Spring Boot Java Engineer",
              description: "Spring Boot Java focused engineer specializing in backend development, microservices, and scalable systems.",
              url: "https://anonrst311.vercel.app",
              sameAs: [
                "https://github.com/anonrst",
                "https://www.linkedin.com/in/anonrsrt"
              ],
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Microservices",
                "REST API",
                "Docker",
                "PostgreSQL",
                "Redis",
                "Kafka",
                "System Design"
              ]
            })
          }}
        />
      </head>
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
