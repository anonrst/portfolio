import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

/**
 * Skills Section — Tech stack displayed as labeled badges.
 * Update the `skills` array with your actual tech stack.
 */
const skills = portfolio.skills;

const SkillsSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="font-mono text-sm px-4 py-2 rounded-full glass-panel text-foreground cursor-default transition-shadow hover:shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
