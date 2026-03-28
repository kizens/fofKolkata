import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

export function Slide31_DesignerValue() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black pointer-events-none" />
      
      <div className="z-10 flex w-full flex-col max-w-4xl mx-auto items-center justify-center text-center h-full">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400"
        >
          <Heart size={48} className="animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
        >
          The Designer’s True Value
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-light leading-relaxed text-zinc-300 font-['Work_Sans',sans-serif] space-y-8 max-w-2xl"
        >
          <p>
            AI is not here to replace us; it is here to <strong className="text-white font-semibold">augment</strong> us.
          </p>
          <p>
            Use AI to automate the commodity. Take back your time to focus on what is <strong className="text-white font-semibold">uniquely human</strong>: Strategy, Empathy, and Meaningful Experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex items-center gap-2 text-zinc-500 font-mono text-sm tracking-widest uppercase"
        >
          <Sparkles size={16} />
          <span>Focus on what matters</span>
        </motion.div>

      </div>
    </div>
  );
}
