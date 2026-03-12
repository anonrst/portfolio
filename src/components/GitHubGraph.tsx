import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

/**
 * GitHub Contribution Graph — Uses ghchart.rshah.org to render contributions.
 * Replace `username` with your actual GitHub username.
 */
const GitHubGraph = () => {
  const username = portfolio.githubUsername;

  return (
    <section className="px-6 md:px-16 lg:px-24 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
          Contributions
        </h2>
        <div className="glass-panel rounded-xl p-4 overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full max-w-3xl"
            loading="lazy"
          />
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          @{username}
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubGraph;
