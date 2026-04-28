import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const socials = portfolio.socials;

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <p className="font-mono text-primary text-xs sm:text-sm mb-2">{'// contact'}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 sm:mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 30px hsl(var(--primary) / 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all duration-300 group touch-manipulation"
                aria-label={social.label}
              >
                <social.Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-border"
        >
          <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">
            {'>'} Built with React + Tailwind &middot; © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
