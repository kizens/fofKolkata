import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgLayoffs1 from "../../assets/news_meta.png";
import imgLayoffs2 from "../../assets/news_ms.png";
import imgLayoffs3 from "../../assets/news_amazon.png";

export function Slide8_DoMoreWithLess() {
  const [step, setStep] = useState(0); // 0: Title, 1: Images
  const maxSteps = 1;

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, maxSteps));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Intercept navigation keys for internal stepping
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        if (step < maxSteps) {
          e.stopPropagation();
          handleNext();
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (step > 0) {
          e.stopPropagation();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [step]);

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-6 md:p-12 overflow-hidden relative items-center justify-center font-['Work_Sans',sans-serif]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/10 via-black to-black pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="title-step"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center h-full w-full"
          >
            <motion.h1 
              initial={{ filter: "blur(10px)", scale: 0.8 }}
              animate={{ filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[100px] md:text-[140px] xl:text-[180px] font-['Bebas_Neue',sans-serif] tracking-widest leading-none uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500"
            >
              Do more with less
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div
            key="images-step"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center h-[85vh] w-full max-w-7xl relative"
          >
            {/* Amazon Layoffs News (Left, Tilted) */}
            <motion.div 
              initial={{ opacity: 0, x: -100, rotate: -15 }}
              animate={{ opacity: 1, x: -360, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute w-[440px] h-auto border border-zinc-800 bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden group cursor-pointer z-10 hover:z-40 hover:scale-105 transition-all duration-300"
            >
              <img 
                src={imgLayoffs3} 
                alt="Amazon Layoffs News" 
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Microsoft Hiring Freeze News (Right, Tilted) */}
            <motion.div 
              initial={{ opacity: 0, x: 100, rotate: 15 }}
              animate={{ opacity: 1, x: 360, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute w-[440px] h-auto border border-zinc-800 bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden group cursor-pointer z-20 hover:z-40 hover:scale-105 transition-all duration-300"
            >
              <img 
                src={imgLayoffs2} 
                alt="Microsoft Hiring Freeze News" 
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Meta Layoffs News (Center, Straight, on Top) */}
            <motion.div 
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-[480px] h-auto border border-zinc-700 bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center overflow-hidden group cursor-pointer z-30 hover:z-40 hover:scale-105 transition-all duration-150"
            >
              <img 
                src={imgLayoffs1} 
                alt="Meta Layoffs News" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
