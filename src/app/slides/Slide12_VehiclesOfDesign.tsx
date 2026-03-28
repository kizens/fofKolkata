import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Network, MoveRight, Sliders, Cpu, Activity } from "lucide-react";

export function Slide12_VehiclesOfDesign() {
  const [autonomy, setAutonomy] = useState(0);

  // Keyboard Navigation Interception (Clicker Friendly)
  useEffect(() => {
    const handleIntercept = (e: KeyboardEvent) => {
      // If user is interacting with some input, let it be
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (autonomy < 2) {
          setAutonomy(prev => {
            const nextVal = Math.min(2, prev + 1);
            return nextVal;
          });
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (autonomy > 0) {
          setAutonomy(prev => {
            const nextVal = Math.max(0, prev - 1);
            return nextVal;
          });
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }
    };

    // Use capture: true to run BEFORE the parent's bubble-phase listener
    window.addEventListener("keydown", handleIntercept, { capture: true });
    return () => window.removeEventListener("keydown", handleIntercept, { capture: true });
  }, [autonomy]);

  // Dynamic text based on autonomy level
  const getContextText = () => {
    if (autonomy === 0) {
      return {
        title: "Traditional Linear UX",
        subtitle: "Rigid Flows & Screen Maps",
        desc: "Designers draw every screen. Interactions find a static path (If A, then B). The user is a passenger on a fixed train track.",
        color: "from-zinc-400 to-zinc-500",
        textColor: "text-zinc-400",
      };
    } else if (autonomy === 1) {
      return {
        title: "Adaptive Hybrid UX",
        subtitle: "Mapping Situations, Not Screens",
        desc: "Designers define boundaries and edge-case intents. The machine fills in the UI dynamically for standard tasks, while humans handle edge cases.",
        color: "from-cyan-400 to-blue-500",
        textColor: "text-cyan-400",
      };
    } else {
      return {
        title: "Contextual Orchestration",
        subtitle: "Define Intent, Lose Pixel Control",
        desc: "We lose 'pixel control' but gain 'contextual control'. You define the Intent and Goal; the machine resolves the complex, non-linear path to get there.",
        color: "from-fuchsia-500 to-pink-500",
        textColor: "text-fuchsia-400",
      };
    }
  };

  const currentText = getContextText();

  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative flex-col justify-between items-center">
      
      {/* Background Dynamic Glow */}
      <motion.div 
        animate={{ 
          opacity: autonomy / 2,
          background: `radial-gradient(circle at center, rgba(232, 121, 249, ${0.1 + autonomy/10}), transparent 70%)`
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Top Header & Context Description */}
      <div className="z-10 w-full max-w-6xl flex flex-col items-center text-center mt-6">

        <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-3 leading-none">
          Linear to <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentText.color} transition-all duration-500`}>Non-Linear</span>
        </h2>

        <div className="h-28 flex flex-col items-center justify-center max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xl font-mono tracking-widest uppercase mb-2 text-white">
                {currentText.title}
              </h3>
              <p className="slide-description">
                {currentText.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Center: The Visual Canvas */}
      <div className="z-10 w-full max-w-5xl h-[45vh] relative flex items-center justify-center mt-4">
        <div className="absolute inset-0 rounded-[40px] bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden flex items-center justify-center">
          
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          {/* SVG Connection Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Base Linear Connection */}
            <motion.line 
              x1="20%" y1="50%" x2="50%" y2="50%" 
              stroke="#27272a" strokeWidth="2" 
              animate={{ stroke: autonomy >= 1 ? "#3b82f6" : "#27272a" }}
            />
            <motion.line 
              x1="50%" y1="50%" x2="80%" y2="50%" 
              stroke="#27272a" strokeWidth="2" 
              animate={{ stroke: autonomy === 2 ? "#f472b6" : "#27272a" }}
            />


            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Node Overlay */}
          <div className="relative w-full h-full flex items-center justify-between px-24">
            
            {/* Node A (Linear Start) */}
            <div className="flex flex-col items-center gap-3">
              <motion.div 
                animate={{ scale: autonomy >= 1 ? 1.1 : 1, borderColor: autonomy >= 1 ? "#22d3ee" : "#3f3f46" }}
                className="w-16 h-16 rounded-2xl bg-zinc-900 border flex items-center justify-center font-mono text-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                A
              </motion.div>
              <span className="text-xs font-mono text-zinc-500">Fixed Point</span>
            </div>

            {/* AI Core Or Interactive Sprawl */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <AnimatePresence>
                {autonomy >= 1 ? (
                  <motion.div
                    key="ai-core"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                     <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed border-fuchsia-500/30" 
                     />
                     <div className="relative w-24 h-24 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/50 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(232,121,249,0.3)]">
                        <Cpu size={32} className="text-fuchsia-400 mb-1" />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-fuchsia-300">AI Context</span>
                     </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="linear-box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xl"
                  >
                     B
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Node C (Linear End or Goal) */}
            <div className="flex flex-col items-center gap-3">
              <motion.div 
                animate={{ scale: autonomy === 2 ? 1.1 : 1, borderColor: autonomy === 2 ? "#f59e0b" : "#3f3f46" }}
                className="w-16 h-16 rounded-2xl bg-zinc-900 border flex items-center justify-center font-mono text-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                C
              </motion.div>
              <span className="text-xs font-mono text-zinc-500">Goal State</span>
            </div>

          </div>

          {/* Random floating dots in non-linear mode */}
          {autonomy >= 1 && (
             <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, x: Math.random() * 500 - 250, y: Math.random() * 300 - 150 }}
                      animate={{ 
                         opacity: [0.1, 0.4, 0.1], 
                         y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
                         x: [Math.random() * 500 - 250, Math.random() * 500 - 250]
                      }}
                      transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cyan-400/50"
                   />
                ))}
             </div>
          )}

        </div>
      </div>

      {/* Bottom: Master Control Slider */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-4 mb-8">
        <div className="flex w-full justify-between px-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <span>Executor (Linear UX)</span>
          <span className="text-fuchsia-400">Orchestrator (Cognitive UX)</span>
        </div>
        
        <div className="relative w-full h-12 flex items-center">
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={autonomy}
            onChange={(e) => setAutonomy(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 relative z-10"
          />
          <div 
             className="absolute left-0 top-[22px] h-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg pointer-events-none" 
             style={{ width: `${(autonomy / 2) * 100}%` }}
          />
        </div>

      </div>

    </div>
  );
}