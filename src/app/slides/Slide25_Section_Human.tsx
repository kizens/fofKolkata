import React from "react";
import { motion } from "motion/react";
import { UserCheck } from "lucide-react";

export function Slide25_Section_Human() {
  return (
    <div 
      className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-[2000px]"
    >
      {/* 3D Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1774016591221-d3e8e7ebdd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwZmxhcmUlMjBtaW5pbWFsfGVufDF8fHx8MTc3NDQ2ODM0N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Minimal Light Flare Background" 
          className="w-full h-full object-cover mix-blend-screen opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-amber-900/20" />
      </motion.div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full border border-yellow-500/30 bg-yellow-900/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(250,204,21,0.2)]"
          >
            <UserCheck className="w-10 h-10 text-yellow-400" />
          </motion.div>
          
          <h2 className="text-7xl md:text-[120px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none">
            The Human <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
              Element
            </span>
          </h2>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-12 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}