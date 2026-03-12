import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack SaaS platform with real-time collaboration features, built with modern web technologies.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Beta",
    description: "An open-source CLI tool that automates development workflows and boosts productivity.",
    tech: ["TypeScript", "Node.js", "CLI"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Gamma",
    description: "A responsive e-commerce dashboard with analytics, inventory management, and payment integration.",
    tech: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Delta",
    description: "A mobile-first fitness tracking app with social features and data visualization.",
    tech: ["React Native", "Firebase", "D3.js"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{'// projects'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel rounded-lg p-6 group hover:border-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.github} className="hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.live} className="hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-primary/80">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
