import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Slide20_Section_Agentic() {
  return (
    <div 
      className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-[2000px]"
    >
      {/* 3D Background */}
      <motion.div 
        initial={{ rotate: 10, scale: 1.1, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1762278805645-cdcbd21c0e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBkaWdpdGFsJTIwd2F2ZXxlbnwxfHx8fDE3NzQ0NjgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Digital Wave Background" 
          className="w-full h-full object-cover mix-blend-screen opacity-50 hue-rotate-[160deg]" // hue rotate to make it more orange/red
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-red-900/30" />
      </motion.div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, z: -200, scale: 0.5 }}
          animate={{ opacity: 1, z: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="w-24 h-24 rounded-full border border-orange-500/30 bg-orange-900/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(249,115,22,0.2)]"
          >
            <Sparkles className="w-10 h-10 text-orange-400" />
          </motion.div>
          
          <h2 className="text-7xl md:text-[120px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none">
            The Agentic <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Era
            </span>
          </h2>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-12 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}