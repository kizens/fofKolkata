import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Search, Brain, Heart, CheckCircle2 } from "lucide-react";

export function Slide29_RelevancePyramid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSubStep, setActiveSubStep] = useState<number>(0);

  // Sub-step Capture Intercept for Arrow Keys
  useEffect(() => {
    const handleCaptureKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        setActiveSubStep((prev) => {
          if (prev < 3) {
            e.stopImmediatePropagation();
            e.preventDefault();
            const nextStep = prev + 1;
            setHoveredIndex(3 - nextStep); // Highlights Level 1 (idx 2) then Level 2 (idx 1) then Level 3 (idx 0)
            return nextStep;
          }
          return prev;
        });
      } else if (e.key === "ArrowLeft") {
        setActiveSubStep((prev) => {
          if (prev > 0) {
            e.stopImmediatePropagation();
            e.preventDefault();
            const prevStep = prev - 1;
            setHoveredIndex(prevStep === 0 ? null : 3 - prevStep);
            return prevStep;
          }
          return prev;
        });
      }
    };
    window.addEventListener("keydown", handleCaptureKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleCaptureKeyDown, { capture: true });
  }, []);

  const pyramidLayers = [
    {
      level: 3,
      title: "Strategy & Integration",
      desc: "Connect design to business outcomes, cultural signals, and human context.",
      icon: Brain,
      color: "from-rose-500 to-orange-500",
      textColor: "text-rose-400",
      points: [
        "Connecting design to business outcomes & cultural signals.",
        "Knowing whether a button should even exist."
      ],
      polygon: "polygon(50% 0%, 33% 100%, 67% 100%)",
      height: "h-36"
    },
    {
      level: 2,
      title: "Curation & Taste",
      desc: "Filter noise into meaning. Accessibility, branding, and user research.",
      icon: Search,
      color: "from-blue-500 to-indigo-500",
      textColor: "text-blue-400",
      points: [
        "Designers filter noise into meaning and enforce taste.",
        "Choosing which AI outcome aligns with context."
      ],
      polygon: "polygon(33% 0%, 67% 0%, 83% 100%, 17% 100%)",
      height: "h-36"
    },
    {
      level: 1,
      title: "Execution & Generation",
      desc: "Fast and cheap creation. Tools like DALL-E, Runway, Figma AI, Vibe coding.",
      icon: Zap,
      color: "from-teal-400 to-emerald-500",
      textColor: "text-teal-400",
      points: [
        "Creation is becoming fast and cheap.",
        "Anyone can generate visual outputs."
      ],
      polygon: "polygon(17% 0%, 83% 0%, 100% 100%, 0% 100%)",
      height: "h-36"
    }
  ];

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black pointer-events-none" />
      
      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content: Title & Details */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-[0.9]">
              The Designer's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Relevance Pyramid</span>
            </h2>
            <p className="text-xl font-light leading-relaxed text-zinc-300 font-['Work_Sans',sans-serif] mb-10">
              When execution becomes a commodity, value moves up the stack. Strategy, curation, and taste become the premium differentiators.
            </p>
          </motion.div>

          {/* Dynamic Details based on hover */}
          <div className="h-48 border border-zinc-800 rounded-3xl bg-zinc-900/30 p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null ? (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-black/40 ${pyramidLayers[hoveredIndex].textColor}`}>
                      {React.createElement(pyramidLayers[hoveredIndex].icon, { size: 24 })}
                    </div>
                    <h3 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-white">
                      {pyramidLayers[hoveredIndex].title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {pyramidLayers[hoveredIndex].points.map((point, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-sm text-zinc-400 font-['Work_Sans'] font-light">
                        <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${pyramidLayers[hoveredIndex].textColor}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-zinc-500 font-mono text-xs uppercase tracking-widest"
                >
                  Hover on pyramid layers to explore value
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Content / Visual Pyramid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col items-center relative"
        >
          <div className="flex flex-col items-center w-full max-w-5xl relative">
            {pyramidLayers.map((layer, idx) => {
              const isSelected = activeSubStep > 0 && 3 - activeSubStep === idx;
              const isHighlighted = hoveredIndex === idx || isSelected;

              return (
                <div key={idx} className="flex flex-row items-center w-full h-36 relative">
                  {/* Left Spacer to push pyramid to center */}
                  <div className="w-1/4" />

                  {/* Progressive Layer (Centered) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: isHighlighted ? 1.05 : 1,
                      zIndex: isHighlighted ? 20 : 10
                    }}
                    transition={{ delay: 0.1 + (idx * 0.1), duration: 0.5 }}
                    whileHover={{ scale: 1.1, zIndex: 30 }}
                    onHoverStart={() => setHoveredIndex(idx)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative w-1/2 h-full cursor-pointer"
                  >
                    {/* Shadow Layer wrapped for clip-path filter */}
                    <motion.div 
                      className="absolute inset-0 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                      animate={{
                        filter: isHighlighted ? "drop-shadow(0 15px 30px rgba(0,0,0,0.6))" : "drop-shadow(0 10px 20px rgba(0,0,0,0.4))"
                      }}
                    >
                      <div className="absolute inset-0 bg-zinc-900/60 border border-zinc-700/50 backdrop-blur-md" style={{ clipPath: layer.polygon }} />
                      <div className={`absolute inset-0 bg-gradient-to-r ${layer.color} ${isHighlighted ? 'opacity-40' : 'opacity-20'} transition-opacity duration-300`} style={{ clipPath: layer.polygon }} />
                    </motion.div>

                    {/* Static Glow Pulse for top tier if desired */}
                    {idx === 0 && (
                      <motion.div 
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 pointer-events-none"
                        style={{ clipPath: layer.polygon }}
                      />
                    )}
                  </motion.div>

                  {/* Right Text Label (Absolute next to pyramid) */}
                  <div className="w-1/4 pl-8 flex items-center h-full">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: isHighlighted ? 1 : 0.6,
                        x: isHighlighted ? 0 : -10,
                        scale: isHighlighted ? 1.05 : 1
                      }}
                      className="flex flex-col gap-1 cursor-pointer"
                      onClick={() => setHoveredIndex(idx)}
                    >
                      <div className="flex items-center gap-2">
                        <layer.icon size={16} className={layer.textColor} />
                        <h4 className="text-xl font-['Bebas_Neue',sans-serif] tracking-wider text-white">
                          {layer.title}
                        </h4>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator Lines (Static) */}
          <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between py-12 text-zinc-600 font-mono text-xs uppercase tracking-widest">
             <div className="flex flex-col items-center gap-2">
               <span>High Value</span>
               <div className="h-24 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="h-24 w-px bg-gradient-to-t from-zinc-800 to-transparent" />
               <span>Commoditized</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}