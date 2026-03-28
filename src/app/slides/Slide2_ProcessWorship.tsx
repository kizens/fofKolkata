import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Users, Map, FileQuestion, Layout, CheckCircle, AlertTriangle } from "lucide-react";

// Import images from assets
import userResearchImg from "../../assets/user_research.png";
import personasImg from "../../assets/personas.png";
import journeyMapImg from "../../assets/journey_map.png";
import problemHmwImg from "../../assets/problem_hmw.png";
import wireframesImg from "../../assets/wireframes.png";
import hifiUiImg from "../../assets/hifi_ui_v2.png";
import launchImg from "../../assets/launch_v2.png";

export function Slide2_ProcessWorship() {
  const [step, setStep] = useState(-1); // -1: Initial (Center), 0-6: Process Steps, 7: Stamp
  const maxSteps = 7;

  const handleNext = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, maxSteps));
  }, []);

  const handlePrev = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, -1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (step < maxSteps) {
          e.stopPropagation();
          handleNext();
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (step > -1) {
          e.stopPropagation();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [step, handleNext, handlePrev]);

  const processSteps = [
    { icon: Database, name: "User Research", color: "text-blue-400", img: userResearchImg },
    { icon: Users, name: "Personas", color: "text-purple-400", img: personasImg },
    { icon: Map, name: "Journey Maps", color: "text-pink-400", img: journeyMapImg },
    { icon: FileQuestion, name: 'Problem "How Might We"', color: "text-cyan-400", img: problemHmwImg },
    { icon: Layout, name: "Low-fi Wireframes", color: "text-amber-400", img: wireframesImg },
    { icon: Layout, name: "High-Fi UI", color: "text-teal-400", img: hifiUiImg },
    { icon: CheckCircle, name: "Launch", color: "text-emerald-400", img: launchImg }
  ];

  const isSplit = step >= 0;

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

      {/* Main Container */}
      <div className="z-10 flex w-full h-full justify-center relative max-w-7xl mx-auto px-12 md:px-24">
        
        {/* Step List Container (Left or Center) */}
        {step <= 7 && (
          <motion.div 
            layout
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`flex flex-col h-full justify-center
              ${isSplit ? "w-[30%] pr-8 border-r border-zinc-800/50" : "w-full items-center"}
            `}
          >
            <motion.h3 
              layout
              className="text-4xl font-extrabold font-['Bebas_Neue',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mb-8 uppercase"
            >
              Checklist of Perfection
            </motion.h3>

            <motion.div 
              layout
              className={`flex gap-3 w-full
                ${isSplit ? "flex-col justify-start py-2" : "flex-wrap lg:flex-nowrap justify-between items-center"}
              `}
            >
              {processSteps.map((stepItem, idx) => {
                const isActive = idx === step || (step === 7 && idx === 6);
                const isPassed = idx < step && !(step === 7 && idx === 6);

                return (
                  <motion.div
                    key={idx}
                    layout
                    whileHover={isSplit ? { x: 5, scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" } : { y: -5, scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all justify-center relative cursor-pointer
                      ${isSplit ? "w-full min-h-[65px]" : "flex-1 min-w-[120px] h-[100px]"}
                      ${isActive ? "border-zinc-400 bg-zinc-800/80 shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "border-zinc-800 bg-zinc-900/30"}
                      ${isPassed && isSplit ? "opacity-50 border-zinc-900" : ""}
                    `}
                  >
                    <div className={`p-2 rounded-full bg-zinc-800 ${stepItem.color}`}>
                      <stepItem.icon size={20} />
                    </div>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-center text-zinc-300">
                      {stepItem.name}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}

        {/* Dynamic Image Display Area (Right panel when split) */}
        <AnimatePresence mode="wait">
          {isSplit && step <= 7 && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-[70%]"
            >
              <div className="h-full flex flex-col justify-center items-center p-12">
                <div className="w-full h-[550px] flex items-center justify-center p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md relative shadow-2xl overflow-hidden">
                  {processSteps[Math.min(step, 6)].img ? (
                    <img 
                      src={processSteps[Math.min(step, 6)].img} 
                      alt={processSteps[Math.min(step, 6)].name} 
                      className="max-h-[450px] max-w-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 h-full w-full font-mono text-zinc-500">
                      <Layout size={48} />
                      <p>Placeholder Preview for {processSteps[Math.min(step, 6)].name}</p>
                    </div>
                  )}
                  {/* Text overlay removed */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 7 Dashboard removed */}

        {/* Step 7: Red BULLS**T Stamp */}
        <AnimatePresence>
          {step >= 7 && (
            <motion.div
              initial={{ opacity: 0, scale: 5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            >
              <div className="p-12 border-[12px] border-red-600 bg-red-600/10 backdrop-blur-md rounded-2xl transform shadow-[0_0_100px_rgba(220,38,38,0.8)]">
                <span className="text-[120px] md:text-[180px] font-['Bebas_Neue',sans-serif] font-black text-red-600 tracking-wider">
                  STOP
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 8 Critique removed */}

        {/* Navigation Info */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md z-50">
          <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Step {step + 2} of {maxSteps + 2}</span>
          <div className="flex gap-1">
            {[...Array(maxSteps + 2)].map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 w-1.5 rounded-full transition-all ${idx === (step + 1) ? 'bg-white w-3' : 'bg-zinc-700'}`} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
