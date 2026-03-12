import { Github, Linkedin } from "lucide-react";

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
  contributions: [],
  projects: [
    {
      name: "Project One",
      description: "A high-performance REST API with auth and rate limiting",
      tech: ["Spring Boot", "PostgreSQL", "Redis"],
      url: "#",
    },
    {
      name: "Project Two",
      description: "Event-driven microservice for processing payments",
      tech: ["Java", "RabbitMQ", "Docker"],
      url: "#",
    },
    {
      name: "Project Three",
      description: "CLI tool for database migrations and schema management",
      tech: ["Java", "SQL"],
      url: "#",
    },
    {
      name: "Project Four",
      description: "Real-time WebSocket server for live notifications",
      tech: ["Spring Boot", "Redis", "WebSocket"],
      url: "#",
    },
  ],
};
