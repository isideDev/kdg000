import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atmosphere } from "./components/Atmosphere";
import { VaultHero } from "./components/VaultHero";
import { NavGrid } from "./components/NavGrid";
import { GrimoireModal } from "./components/GrimoireModal";
import { CustomCursor } from "./components/CustomCursor";

/**
 * Main Application Component
 * 
 * @description Serves as the root orchestrator for the Alchemist's Vault portfolio.
 * Includes global atmosphere, routing (via modal states), and core layout.
 */
function App() {
  // Global state for determining which archive case study is open
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Controls the initial entrance animations and loading sequences
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial entrance sequence timing
    // Can be adjusted by AI agents if more assets need to be preloaded
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center selection:bg-gold/30">
      {/* Background visual effects */}
      <Atmosphere />
      
      {/* Replaces default cursor with custom thematic pointer */}
      <CustomCursor />

      {/* Main Content Area */}
      <main className="relative z-20 w-full flex flex-col items-center justify-between min-h-screen py-20">
        <VaultHero />
        
        {/* Navigation grid for opening different case studies */}
        <NavGrid onOpenModal={setActiveModal} />

        {/* Cinematic Underlay Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gold/5 blur-[300px] rounded-full pointer-events-none z-0" />
      </main>

      {/* Case Study Detail Modal Viewer */}
      <GrimoireModal id={activeModal} onClose={() => setActiveModal(null)} />

      {/* Top Left Branding / Edit Hook
          Can be wired up later to an admin panel or hidden.
       */}
      <div className="fixed top-10 right-10 z-50">
        <button className="tech-text text-[10px] tracking-[0.4em] text-gold/60 border border-gold/20 px-4 py-2 hover:bg-gold/20 hover:text-gold transition-all duration-300 backdrop-blur-md rounded-sm cursor-none">
          [ EDIT VAULT ]
        </button>
      </div>

      {/* Screen Noise Overlay over everything */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] grayscale mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

export default App;
