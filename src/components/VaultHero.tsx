import React from 'react';
import { motion } from 'framer-motion';

/**
 * Configuration for the Vault Hero section.
 * @description These values can be safely modified by AI agents to update the main title and letters.
 */
const HERO_CONFIG = {
  // Main majestic letters (e.g. initials) that form the core logo
  letters: ["K", "D", "G"],
  // Subtitle showing below the initials
  roleTitle: "Architect of the AI"
};

/**
 * VaultHero Component
 * 
 * @description Renders the main entrance typographic sequence with cinematic styling.
 * Uses Framer Motion for precise timing sequences (delays).
 * 
 * @returns {React.FC} The main hero section of the Vault.
 */
export const VaultHero: React.FC = () => {
  const { letters, roleTitle } = HERO_CONFIG;

  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="flex gap-12 md:gap-20 mb-10 overflow-visible">
        {letters.map((letter, index) => (
          <motion.h1
            key={`hero-letter-${index}`}
            initial={{ 
              filter: "blur(40px)",
              opacity: 0,
              scale: 2,
              x: (index - 1) * 200,
              rotateX: 45
            }}
            animate={{ 
              filter: "blur(0px)",
              opacity: 1,
              scale: 1,
              x: 0,
              rotateX: 0
            }}
            transition={{ 
              duration: 2.5,
              delay: index * 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-8xl md:text-9xl font-mystic font-bold text-gold tracking-tighter mix-blend-difference"
            style={{ 
              textShadow: "0 0 30px rgba(197, 160, 89, 0.3)"
            }}
          >
            {letter}
          </motion.h1>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="space-y-6"
      >
        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <h2 className="tech-text text-sm md:text-2xl font-light tracking-[0.7em] uppercase text-[#f8f9fa]/60">
          {roleTitle}
        </h2>
      </motion.div>
    </div>
  );
};
