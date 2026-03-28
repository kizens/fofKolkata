import { motion } from "motion/react";
import { useEffect, useState } from "react";



export function Slide4_ImpactAIOutsourced() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black overflow-hidden relative font-['Work_Sans',sans-serif]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      {/* Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Neural Network SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="comet-gradient-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            
            <linearGradient id="comet-gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>

          {/* Network Paths */}
          <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
            <path d="M 200,300 C 400,200 600,800 800,800" />
            <path d="M 800,800 C 1000,800 1200,300 1400,300" />
            <path d="M 1400,300 C 1600,300 1700,700 1900,1000" />
            <path d="M 100,800 C 400,800 600,400 900,400" />
            <path d="M 900,400 C 1200,400 1400,900 1700,900" />
            <path d="M 500,100 C 700,100 800,600 1100,600" />
            <path d="M 1100,600 C 1300,600 1500,200 1700,200" />
          </g>

          {/* Laser Comets (Moving Data) - Cyan Group */}
          <g stroke="url(#comet-gradient-cyan)" strokeWidth="2.5" fill="none" filter="url(#glow)">
            <motion.path 
              d="M 200,300 C 400,200 600,800 800,800" 
              strokeDasharray="150 400"
              animate={{ strokeDashoffset: [550, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M 100,800 C 400,800 600,400 900,400" 
              strokeDasharray="100 300"
              animate={{ strokeDashoffset: [400, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            <motion.path 
              d="M 1100,600 C 1300,600 1500,200 1700,200" 
              strokeDasharray="120 400"
              animate={{ strokeDashoffset: [520, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          </g>

          {/* Laser Comets (Moving Data) - Purple Group */}
          <g stroke="url(#comet-gradient-purple)" strokeWidth="2.5" fill="none" filter="url(#glow)">
            <motion.path 
              d="M 800,800 C 1000,800 1200,300 1400,300" 
              strokeDasharray="150 400"
              animate={{ strokeDashoffset: [550, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
            <motion.path 
              d="M 900,400 C 1200,400 1400,900 1700,900" 
              strokeDasharray="200 500"
              animate={{ strokeDashoffset: [700, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.5 }}
            />
            <motion.path 
              d="M 500,100 C 700,100 800,600 1100,600" 
              strokeDasharray="100 300"
              animate={{ strokeDashoffset: [400, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 2.5 }}
            />
          </g>

          {/* Intelligent Hubs (Breathing Nodes) */}
          <g fill="rgba(34,211,238,0.2)">
            <circle cx="800" cy="800" r="8" />
            <circle cx="900" cy="400" r="8" fill="rgba(192,132,252,0.2)" />
            <circle cx="1100" cy="600" r="8" />
          </g>
          
          {/* Breathing Rings */}
          <g fill="none" strokeWidth="1">
            <motion.circle cx="800" cy="800" stroke="rgba(34,211,238,0.4)" animate={{ r: [8, 40], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
            <motion.circle cx="900" cy="400" stroke="rgba(192,132,252,0.4)" animate={{ r: [8, 30], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} />
            <motion.circle cx="1100" cy="600" stroke="rgba(34,211,238,0.4)" animate={{ r: [8, 35], opacity: [1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }} />
          </g>
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl relative">
        <h1 className="text-7xl md:text-9xl font-bold font-['Bebas_Neue',sans-serif] leading-none flex flex-col justify-center items-center gap-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)", letterSpacing: "0.2em" }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.8, filter: mounted ? "blur(0px)" : "blur(20px)", letterSpacing: mounted ? "-0.02em" : "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500"
          >
            Impact of AI
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 1.5, y: 100, filter: "blur(20px)" }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 1.5, y: mounted ? 0 : 100, filter: mounted ? "blur(0px)" : "blur(20px)" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="text-[#DB4437] drop-shadow-[0_0_50px_rgba(219,68,55,0.8)] uppercase tracking-wide"
          >
            Outsourced
          </motion.span>
        </h1>
      </div>

      {/* Decorative Grid or UI element for premium feel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" 
      />
    </div>
  );
}
