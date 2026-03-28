import { motion } from "motion/react";
import { MousePointer2, Bird } from "lucide-react";

export function Slide0b_Meetup() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-950 to-zinc-950 pointer-events-none" />

      {/* Main Container - Centered by Default */}
      <div className="z-10 flex w-full flex-col px-12 md:px-24 max-w-7xl mx-auto h-full items-center justify-center relative">
        
        {/* Top Metadata */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center px-6 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md shadow-lg gap-4 text-sm font-['Work_Sans',sans-serif] text-zinc-300 font-light tracking-wide"
        >
          <span>29th March</span>
          <div className="h-4 w-px bg-zinc-700" />
          <span>150+ Designers</span>
          <div className="h-4 w-px bg-zinc-700" />
          <span>Open to All</span>
        </motion.div>

        {/* Cinematic Title Group */}
        <div className="relative flex flex-col items-center justify-center text-center">
          
          {/* Bird decorative icons in top right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-[-40px] right-[-60px] text-zinc-500 opacity-30 flex gap-2"
          >
            <Bird size={36} className="transform -rotate-15 scale-x-[-1]" />
            <Bird size={24} className="transform rotate-12 mt-4" />
          </motion.div>

          {/* "HYDERABAD" */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[14vw] font-['Bebas_Neue',sans-serif] font-bold uppercase tracking-tight leading-[0.85] text-white"
          >
            HYDERABAD
          </motion.h2>

          {/* "UX MEETUP" - Yellow Sticker */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ rotate: 1, scale: 1.05 }}
            className="mt-4 px-12 py-4 bg-[#FFEB3B] rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] relative cursor-pointer"
          >
            <h3 className="text-4xl md:text-6xl font-['Bebas_Neue',sans-serif] font-bold tracking-wider text-black uppercase">
              UX MEETUP
            </h3>

            {/* Pointer Icon */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-[-30px] left-[-20px] text-white drop-shadow-lg"
            >
              <MousePointer2 size={42} className="fill-white text-black" />
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive scroll/nav prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 text-xs uppercase tracking-[0.2em] text-zinc-400 font-mono"
        >
          Click arrow or use keyboard to navigate
        </motion.p>
      </div>
    </div>
  );
}
