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
    <section className="px-6 md:px-16 lg:px-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Open Source & Achievements
        </h2>

        {/* Contributions */}
        {contributions.length > 0 && (
          <div className="space-y-4 mb-10">
            {contributions.map((c, i) => (
              <motion.div
                key={c.project}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
              >
                <span className="font-mono text-sm font-medium text-foreground shrink-0">
                  {c.project}
                </span>
                <span className="text-muted-foreground text-sm">
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-foreground mt-1">•</span>
                {a}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
};

export default OpenSourceSection;
