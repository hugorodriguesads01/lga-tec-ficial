import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up",
  className = "",
  duration = 0.5
}) => {
  const getVariants = () => {
    const distance = 50;
    
    const variants = {
      hidden: { opacity: 0, x: 0, y: 0 },
      visible: { opacity: 1, x: 0, y: 0 }
    };

    if (direction === "up") variants.hidden.y = distance;
    if (direction === "down") variants.hidden.y = -distance;
    if (direction === "left") variants.hidden.x = distance; // Come from right
    if (direction === "right") variants.hidden.x = -distance; // Come from left

    return variants;
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};