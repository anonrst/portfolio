import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const socials = portfolio.socials;

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{'// contact'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-lg p-4 hover:border-primary/50 hover:glow transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <p className="font-mono text-xs text-muted-foreground">
            {'>'} Built with React + Tailwind &middot; © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
