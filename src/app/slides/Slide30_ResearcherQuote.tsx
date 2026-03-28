import { motion } from "motion/react";
import { MessageSquareQuote } from "lucide-react";

export function Slide30_ResearcherQuote() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

      {/* Decorative large quotes in corner background */}
      <div className="absolute top-10 left-12 text-[300px] font-serif font-black text-zinc-900/30 leading-none pointer-events-none select-none">
        “
      </div>
      <div className="absolute bottom-10 right-12 text-[300px] font-serif font-black text-zinc-900/30 leading-none pointer-events-none select-none">
        ”
      </div>

      <div className="z-10 flex w-full flex-col px-12 md:px-24 max-w-7xl mx-auto h-full justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center max-w-5xl"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 p-4 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 font-bold shadow-2xl"
          >
            <MessageSquareQuote size={36} />
          </motion.div>

          {/* Epic Quote Text */}
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[42px] md:text-[64px] font-['Work_Sans',sans-serif] font-light italic leading-tight text-center tracking-tight mb-16 text-zinc-100"
          >
            "What would you rather have? <br />
            A tool that thinks for you, or <br />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold not-italic"
            >
              a tool that makes you think?"
            </motion.span>
          </motion.h3>


        </motion.div>
      </div>

      {/* Footer Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-1"
      >
        <p className="text-sm font-['Work_Sans',sans-serif] font-light text-zinc-400">
          Advait Sarkar
        </p>
        <p className="text-[11px] font-mono text-zinc-500 tracking-wider">
          Senior researcher at Microsoft Research
        </p>
      </motion.div>
    </div>
  );
}
