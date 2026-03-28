import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Slide6_Premise() {
  const [isStruckOff, setIsStruckOff] = useState(false);

  useEffect(() => {
    const handleIntercept = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "Enter" || e.key === "Space") {
        if (!isStruckOff) {
          setIsStruckOff(true);
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (isStruckOff) {
          setIsStruckOff(false);
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleIntercept, { capture: true });
    return () => window.removeEventListener("keydown", handleIntercept, { capture: true });
  }, [isStruckOff]);

  const text = "AI is Replacing Designers";
  const words = text.split(" ");

  return (
    <div 
      className="flex h-screen w-full flex-col bg-black text-white overflow-hidden relative items-center justify-center p-12 md:p-24 cursor-pointer"
      onClick={() => { if(!isStruckOff) setIsStruckOff(true); }}
    >
      
      {/* Background Ambience */}
      <motion.div 
        animate={{ 
          opacity: isStruckOff ? 0.4 : 0.2,
          background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 70%)`
        }}
        className="absolute inset-0 pointer-events-none" 
      />

      <div className="z-10 flex w-full max-w-7xl flex-col items-center text-center justify-center h-full relative">
        
        {/* Title Container */}
        <div className="relative mb-16 w-full flex justify-center items-center">
          
          <motion.h2 
            initial="hidden"
            animate="visible"
            className={`font-sans font-extrabold tracking-tight leading-[1] text-[7.5vw] md:text-[8.5vw] flex flex-wrap gap-x-6 gap-y-2 justify-center transition-all duration-500 relative ${
              isStruckOff ? "text-zinc-700 grayscale opacity-50" : "text-white"
            }`}
          >
            {words.map((word, wordIdx) => (
              <span key={wordIdx} className="flex whitespace-nowrap">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{
                      duration: 0.5,
                      delay: (wordIdx * 5 + charIdx) * 0.03,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="inline-block"
                  >
                    <motion.span
                      animate={!isStruckOff ? {
                        y: [0, -6, 0],
                        rotate: [0, -3, 3, 0],
                        color: ["#ffffff", "#f472b6", "#ffffff"]
                      } : {
                        y: 0,
                        rotate: 0,
                        color: "#52525b"
                      }}
                      transition={!isStruckOff ? {
                        duration: 1.5 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: Math.random() * 2,
                        ease: "linear"
                      } : {
                        duration: 0.5
                      }}
                      className="inline-block select-none font-black"
                    >
                       {char}
                    </motion.span>
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>

          {/* Red Slash (SVG Draw) */}
          <AnimatePresence>
            {isStruckOff && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: "0%", left: "0%" }}>
                <motion.path
                  d="M 20,40 L 1150,250"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 20,250 L 1150,40"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>
            )}
          </AnimatePresence>

          {/* Hand drawn arrow and cute text */}
          <AnimatePresence>
            {isStruckOff && (
              <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-24 right-0 md:-right-16 flex flex-col items-center"
              >
                <div className="relative">
                   <svg width="80" height="80" viewBox="0 0 100 100" className="rotate-[120deg] text-red-400">
                      <motion.path
                         d="M 10,10 Q 50,20 80,80"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="4"
                         strokeLinecap="round"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 0.5 }}
                      />
                      <motion.path
                         d="M 60,80 L 80,80 L 80,60"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="4"
                         strokeLinecap="round"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 0.3, delay: 0.3 }}
                      />
                   </svg>
                   <span className="absolute -top-10 -right-20 text-red-400 font-['Work_Sans'] font-medium text-xl whitespace-nowrap italic tracking-wide">
                      I don't believe!
                   </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rebuttal Description */}
        <AnimatePresence>
          {isStruckOff && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300 font-['Work_Sans',sans-serif]">
                The narrative of replacement is fundamentally flawed. AI is reshaping our process, <strong className="text-white font-semibold">enhancing our daily workflow</strong>, and making us smarter, better, and more effective.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}