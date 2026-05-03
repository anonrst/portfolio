"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll Progress Indicator
 * Shows a thin progress bar at the top of the page
 */
const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollIndicator;
