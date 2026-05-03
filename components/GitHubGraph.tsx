"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

/**
 * GitHub Contribution Graph — Uses ghchart.rshah.org to render contributions.
 * Replace `username` with your actual GitHub username.
 */
const GitHubGraph = () => {
  const username = portfolio.githubUsername;

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4">
          Contributions
        </h2>
        <motion.div 
          className="glass-panel rounded-lg sm:rounded-xl p-2 sm:p-4 overflow-x-auto"
          whileHover={{ scale: 1.01, boxShadow: "0 20px 50px hsl(25 30% 12% / 0.15)" }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full min-w-[280px] max-w-3xl"
            loading="lazy"
          />
        </motion.div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 sm:mt-3 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
        >
          @{username}
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubGraph;
