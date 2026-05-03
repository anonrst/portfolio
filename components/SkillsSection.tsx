"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

/**
 * Skills Section — Tech stack displayed as labeled badges.
 * Update the `skills` array with your actual tech stack.
 */
const skills = portfolio.skills;

const SkillsSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-12" aria-labelledby="skills-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 id="skills-heading" className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 sm:mb-6">
          Tech Stack
        </h2>
        <ul className="flex flex-wrap gap-2 sm:gap-3" role="list">
          {skills.map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: i * 0.03,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel text-foreground cursor-default transition-all duration-200 hover:shadow-lg hover:border-primary/30 touch-manipulation"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
