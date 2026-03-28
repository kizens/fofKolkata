import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Layers } from "lucide-react";

export function Slide5_Section_Context() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-[2000px]"
    >
      {/* 3D Background */}
      <motion.div 
        initial={{ rotateX: 45, rotateY: -10, scale: 1.2, opacity: 0 }}
        animate={{ rotateX: 20, rotateY: 0, scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1694500069324-d782decdd190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBnZW9tZXRyaWMlMjAzZCUyMHNoYXBlc3xlbnwxfHx8fDE3NzQ0NjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="3D Geometric Background" 
          className="w-[150%] h-[150%] object-cover opacity-30 mix-blend-luminosity filter blur-[4px]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-black/80 to-black" />
      </motion.div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center flex flex-col items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
          >
            <Layers className="w-10 h-10 text-blue-400" />
          </motion.div>
          
          <h2 className="text-7xl md:text-[120px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none">
            Foundation <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              & Context
            </span>
          </h2>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-12 opacity-50" />
        </motion.div>
      </div>
      
      {/* Floating particles/elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"
      />
    </div>
  );
}