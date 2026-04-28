import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const projects = portfolio.projects;

const ProjectsList = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-sm font-mono text-muted-foreground mb-6">projects</h2>
        <div className="space-y-0 divide-y divide-border">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-5 group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-8 flex-shrink-0">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs whitespace-nowrap text-muted-foreground bg-secondary px-2 py-0.5 rounded"
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
