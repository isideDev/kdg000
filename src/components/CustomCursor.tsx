import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 w-10 h-10 border border-gold/40 z-[9999] pointer-events-none mix-blend-screen bg-gold/10 flex items-center justify-center transition-all duration-300 backdrop-blur-[1px]"
    >
      <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_#C5A059]" />
    </motion.div>
  );
};
