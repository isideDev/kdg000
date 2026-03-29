import React from 'react';
import { motion } from 'framer-motion';

/**
 * Archive navigation dataset.
 * @description Add new navigation cards here. AI Agents can easily push new objects into this array to expand the vault.
 */
export const ARCHIVES_CONFIG = [
  { id: 'identity', number: 'I', label: 'IDENTITY' },
  { id: 'artifacts', number: 'II', label: 'ARTIFACTS' },
  { id: 'covenant', number: 'III', label: 'COVENANT' },
];

interface NavItemProps {
  /** The roman numeral or numeric identifier */
  number: string;
  /** Primary label of the navigation card */
  label: string;
  /** Callback fired when the card is clicked */
  onClick: () => void;
  /** Framer motion animation delay */
  delay: number;
}

/**
 * Individual Navigation Card (Item).
 */
const NavItem: React.FC<NavItemProps> = ({ number, label, onClick, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    onClick={onClick}
    className="group relative cursor-none p-12 border border-gold/10 hover:border-gold/30 bg-[#080c16]/50 transition-all duration-300 backdrop-blur-sm shadow-xl"
  >
    <div className="flex flex-col gap-6 text-center h-full items-center justify-center">
      <span className="text-gold/40 text-[10px] tracking-[0.4em] font-mono group-hover:text-gold transition-colors">
        {number}
      </span>
      <h3 className="mystic-text text-xl md:text-2xl font-bold tracking-widest text-[#f8f9fa] group-hover:text-gold transition-all">
        {label}
      </h3>
      <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/50 transition-all" />
    </div>
  </motion.div>
);

interface NavGridProps {
  /** Function triggered when an archive card is opened */
  onOpenModal: (id: string) => void;
}

/**
 * NavGrid Component
 * 
 * @description Renders a grid of `ARCHIVES_CONFIG` items.
 */
export const NavGrid: React.FC<NavGridProps> = ({ onOpenModal }) => {
  return (
    <div className="relative z-20 max-w-7xl mx-auto w-full px-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
      {ARCHIVES_CONFIG.map((item, index) => (
        <NavItem 
          key={`nav-item-${item.id}`} 
          {...item} 
          onClick={() => onOpenModal(item.id)} 
          // Staggered entrance delay
          delay={4 + index * 0.2} 
        />
      ))}
    </div>
  );
};
