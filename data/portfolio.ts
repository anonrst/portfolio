import { Github, Linkedin } from "lucide-react";

type Contribution = {
  project: string;
  description: string;
};

export const portfolio = {
  name: "Anon",
  title: "Spring Boot Java Focused Engineer",
  githubUsername: "anonrst",
  roles: [
    "Spring Boot Java focused engineer.",
    "Backend engineer crafting reliable, scalable systems.",
    "Building APIs that just work.",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/anonrst",
      Icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anonrsrt",
      Icon: Linkedin,
    },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "JPA",
    "REST APIs",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "Git",
  ],
  achievements: [
    "Solved 100 LeetCode problems",
    "Solved 10 Codeforces problems",
  ],
  about: {
    location: "Your City, Country",
    experience: "X+ years",
    focus: "Spring Boot & Backend Engineering",
    education: "Your Degree, University",
    interests: ["Open Source", "System Design", "DevOps"],
  },
  contributions: [] as Contribution[],
projects: [
    {
      name: "HTTP Server From Scratch",
      description:
        "Engineered a production-grade HTTP/1.1 server in Go from bare TCP socket primitives with zero third-party dependencies, featuring a manual request parser, custom routing engine, static file serving, chunked video streaming, and concurrent request handling via goroutines.",
      tech: ["Go", "TCP Sockets", "HTTP/1.1", "Goroutines", "Concurrency"],
      url: "https://github.com/anonrst/Http-server-from-scratch",
    },
    {
      name: "TLS Implementation From Scratch",
      description:
        "Built a TLS protocol implementation in Go from scratch without external cryptographic libraries, covering the full handshake flow, certificate exchange simulation, symmetric encryption, message integrity checks, and secure end-to-end communication over a custom TCP transport.",
      tech: ["Go", "TLS", "TCP Sockets", "Cryptography", "Symmetric Encryption"],
      url: "https://github.com/anonrst/TCP-TLS-implementation",
    },
    {
      name: "Distributed Deployment Platform",
      description:
        "Building a microservices-based deployment platform in Java Spring Boot for hosting and managing user applications in isolated Docker container environments, with MinIO for object storage, Kafka for async event processing, Redis for caching, and PostgreSQL for persistent metadata storage.",
      tech: ["Java", "Spring Boot", "Microservices", "Docker", "Kafka", "Redis", "PostgreSQL", "MinIO"],
      url: "https://github.com/anonrst/deployer-codebase",
    },
  ],
};
