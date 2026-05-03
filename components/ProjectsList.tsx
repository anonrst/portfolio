"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const projects = portfolio.projects;

const ProjectsList = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-12" aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 id="projects-heading" className="text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">projects</h2>
        <div className="space-y-0 overflow-hidden" role="list">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: i * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ backgroundColor: "hsl(var(--accent) / 0.3)" }}
              whileTap={{ scale: 0.99 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-5 border-b border-border last:border-b-0 group cursor-pointer touch-manipulation transition-colors duration-200"
              role="listitem"
            >
              <div className="flex-1 min-w-0 mb-2 sm:mb-0 pr-2 sm:pr-4">
                <h3 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors duration-200 truncate">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 sm:ml-4 flex-shrink-0 max-w-full sm:max-w-[40%]" role="list" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] sm:text-xs whitespace-nowrap text-muted-foreground bg-secondary px-1.5 sm:px-2 py-0.5 rounded"
                    role="listitem"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsList;
