import React, { useRef } from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function Slide9_Section_Shift() {
  return (
    <div 
      className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-[2000px]"
    >
      {/* 3D Background */}
      <motion.div 
        initial={{ scale: 1.5, rotateZ: 15, opacity: 0 }}
        animate={{ scale: 1, rotateZ: 0, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1669479412055-103edfb64cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBncmFkaWVudCUyMG5lb24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzc0NDY4MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Neon Wireframe Background" 
          className="w-[120%] h-[120%] object-cover mix-blend-screen opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-purple-900/30" />
      </motion.div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            className="w-24 h-24 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(168,85,247,0.2)]"
          >
            <Zap className="w-10 h-10 text-purple-400" />
          </motion.div>
          
          <h2 className="text-7xl md:text-[120px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none">
            The Shift In <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
              Execution
            </span>
          </h2>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-12 opacity-50" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none mix-blend-screen"
      />
    </div>
  );
}