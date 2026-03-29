import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GrimoireModalProps {
  id: string | null;
  onClose: () => void;
}

const content = {
  identity: {
    title: "I. IDENTITY",
    body: "The Alchemist Architect. Transmuting complex AI patterns into cinematic digital experiences. Master of Vapor, Gold, and Code."
  },
  artifacts: {
    title: "II. ARTIFACTS",
    body: "A collection of digital masterworks. Each artifact is a synthesis of cutting-edge technology and timeless aesthetic principles."
  },
  covenant: {
    title: "III. COVENANT",
    body: "The sacred agreement between Architect and AI. Ensuring the preservation of high-fidelity standards in an ever-evolving digital landscape."
  }
};

export const GrimoireModal: React.FC<GrimoireModalProps> = ({ id, onClose }) => {
  const data = id ? content[id as keyof typeof content] : null;

  return (
    <AnimatePresence>
      {id && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0B]/90 backdrop-blur-xl p-10 cursor-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-3xl w-full p-16 border border-gold/30 bg-[#080c16]/80 shadow-[0_0_100px_rgba(197,160,89,0.1)] text-center space-y-12"
          >
            <h3 className="mystic-text text-4xl md:text-6xl font-bold tracking-[0.4em] text-gold">
              {data.title}
            </h3>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            
            <p className="tech-text text-lg md:text-2xl font-light leading-loose tracking-wide text-[#f8f9fa]/80 whitespace-pre-wrap">
              {data.body}
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <button
              onClick={onClose}
              className="group tech-text flex items-center gap-4 mx-auto text-sm tracking-[0.5em] text-gold/60 hover:text-gold transition-colors duration-300 uppercase cursor-none"
            >
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
              [ Close Grimoire ]
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
