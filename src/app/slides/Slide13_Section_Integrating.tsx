import React from "react";
import { motion } from "motion/react";
import { Workflow } from "lucide-react";

export function Slide13_Section_Integrating() {
  return (
    <div 
      className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-[2000px]"
    >
      {/* Interactive Floating Orbs Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Orb 1 - Teal */}
        <motion.div 
          animate={{ x: [0, 120, 0], y: [0, -60, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[150px]" 
        />
        {/* Orb 2 - Emerald */}
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px]" 
        />
        {/* Orb 3 - Cyan */}
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [50, -50, 50] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black" />
      </div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full border border-teal-500/30 bg-teal-900/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(20,184,166,0.2)]"
          >
            <Workflow className="w-10 h-10 text-teal-400" />
          </motion.div>
          
          <h2 className="text-7xl md:text-[120px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none">
            AI In <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
              Design
            </span>
          </h2>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent mt-12 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}