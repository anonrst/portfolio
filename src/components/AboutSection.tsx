import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{'// about'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">About Me</h2>
          
          <div className="glass-panel rounded-lg p-6 md:p-8 space-y-4">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">const</span> <span className="text-foreground">developer</span> = {'{'}
            </div>
            
            <div className="font-mono text-sm pl-6 space-y-2">
              <p><span className="text-primary">name</span>: <span className="text-emerald-300">"{portfolio.name}"</span>,</p>
              <p><span className="text-primary">location</span>: <span className="text-emerald-300">"{portfolio.about.location}"</span>,</p>
              <p><span className="text-primary">experience</span>: <span className="text-emerald-300">"{portfolio.about.experience}"</span>,</p>
              <p><span className="text-primary">focus</span>: <span className="text-emerald-300">"{portfolio.about.focus}"</span>,</p>
              <p><span className="text-primary">education</span>: <span className="text-emerald-300">"{portfolio.about.education}"</span>,</p>
              <p>
                <span className="text-primary">interests</span>: [
                {portfolio.about.interests.map((interest, index) => (
                  <span key={interest}>
                    <span className="text-emerald-300">"{interest}"</span>
                    {index < portfolio.about.interests.length - 1 ? ", " : ""}
                  </span>
                ))}
                ],
              </p>
            </div>
            
            <div className="font-mono text-sm text-muted-foreground">
              {'}'};
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
