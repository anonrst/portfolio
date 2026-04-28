import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { portfolio } from "@/data/portfolio";

/**
 * Hero Section — Interactive name with magnetic cursor effect,
 * typing tagline, and social icons with hover glow.
 */

const roles = portfolio.roles;

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Magnetic tilt on the name */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return; // Disable on mobile for performance
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleTouchStart = () => {
    // Reset on touch for mobile
    mouseX.set(0);
    mouseY.set(0);
  };

  /* Typing effect */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 50;

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8">
        {/* Left — Interactive Name & Typing Tagline */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          className="cursor-default flex-1"
          style={{ perspective: 600 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ rotateX, rotateY }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none select-none break-words"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {portfolio.name}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary text-xs sm:text-sm mt-3 font-mono uppercase tracking-wider sm:tracking-widest"
          >
            {portfolio.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg mt-3 max-w-md font-mono break-words"
          >
            {displayed}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="inline-block w-[2px] h-4 sm:h-5 bg-primary ml-0.5 align-middle"
            />
          </motion.p>
        </div>

        {/* Right — Social Icons with hover glow */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex gap-3 sm:gap-4 flex-shrink-0"
        >
          {portfolio.socials.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 sm:p-3 rounded-full glass-panel hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-200 touch-manipulation"
            >
              <Icon size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
