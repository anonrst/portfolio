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
      name: "HTTP Server From Scratch",
      description:
        "Implemented an HTTP/1.1 server from scratch using raw TCP sockets, including request parsing, routing, and response generation without relying on web frameworks.",
      tech: ["Go", "TCP Sockets", "HTTP Protocol", "Concurrency"],
      url: "https://github.com/anonrst/http-server",
    },
    {
      name: "Redis Clone",
      description:
        "Built an in-memory key–value store inspired by Redis, supporting core commands and efficient data structures with a custom TCP-based communication protocol.",
      tech: ["Go", "Data Structures", "Networking", "TCP Protocol"],
      url: "https://github.com/anonrst/redis-clone",
    },
    {
      name: "Travisto",
      description:
        "Developed a travel planning platform that allows users to discover destinations, manage itineraries, and organize travel information through a structured backend-driven interface.",
      tech: ["Java", "Spring Boot", "REST APIs", "Database"],
      url: "https://github.com/anonrst/travisto",
    },
    {
      name: "Repo Seller",
      description:
        "Built a platform for listing and sharing code repositories, enabling users to showcase projects, explore others' work, and manage repository listings.",
      tech: ["Java", "Spring Boot", "Web Backend", "Database"],
      url: "https://github.com/anonrst/repo-seller",
    },
  ],
};
