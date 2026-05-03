"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

/**
 * Open Source Contributions & Achievements.
 * Update contributions and achievements with your real data.
 */
const contributions = portfolio.contributions;
const achievements = portfolio.achievements;

const OpenSourceSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 sm:mb-6">
          Open Source & Achievements
        </h2>

        {/* Contributions */}
        {contributions.length > 0 && (
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {contributions.map((c, i) => (
              <motion.div
                key={c.project}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-2 -mx-2 rounded-md hover:bg-accent/30 transition-colors duration-200 cursor-default"
              >
                <span className="font-mono text-xs sm:text-sm font-medium text-foreground shrink-0">
                  {c.project}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm">
                  {c.description}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <ul className="space-y-2">
            {achievements.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  delay: i * 0.06,
                  type: "spring",
                  stiffness: 150,
                  damping: 18
                }}
                whileHover={{ x: 4 }}
                className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 p-1 -mx-1 rounded hover:bg-accent/20 transition-colors duration-200"
              >
                <span className="text-foreground mt-0.5 sm:mt-1">•</span>
                <span className="flex-1">{a}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
};

export default OpenSourceSection;
