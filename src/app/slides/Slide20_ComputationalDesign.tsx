import { motion } from "motion/react";
import { ArrowRight, Box, Repeat, MonitorPlay } from "lucide-react";

export function Slide20_ComputationalDesign() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center justify-center flex-col">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 mb-16 max-w-4xl"
      >
        <h2 className="text-5xl md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none mb-6">
          The <span className="text-blue-500">Computational</span> Shift
        </h2>
        <p className="text-xl md:text-2xl font-light text-zinc-400 font-['Work_Sans',sans-serif]">
          Moving from classical determinism to computational fluidity. The designer transitions from "Maker" to "Director".
        </p>
      </motion.div>

      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Background Image Overlay for context */}
        <div className="absolute -inset-10 opacity-20 pointer-events-none rounded-[32px] overflow-hidden mix-blend-screen grayscale">
           <img 
              src="https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzQ0MTc0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Dashboard interface" 
              className="w-full h-full object-cover blur-sm"
           />
        </div>

        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-10 rounded-[32px] relative overflow-hidden"
        >
          <Box className="w-10 h-10 text-zinc-500 mb-8" />
          <h3 className="text-3xl font-['Bebas_Neue'] uppercase text-white mb-4 tracking-wide">Classical Design</h3>
          <p className="text-zinc-400 font-['Work_Sans'] font-light text-lg mb-8">
            Pixel-perfect execution. Focuses on aesthetics, fixed screens, and determinism. You create exactly what you expect.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-zinc-700 to-transparent mb-6" />
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-600">The "Maker"</p>
        </motion.div>

        {/* Separator / Arrow */}
        <div className="hidden md:flex items-center justify-center absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
           <ArrowRight className="w-12 h-12" />
        </div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-blue-950/40 backdrop-blur-md border border-blue-900 p-10 rounded-[32px] relative overflow-hidden"
        >
          <Repeat className="w-10 h-10 text-blue-500 mb-8" />
          <h3 className="text-3xl font-['Bebas_Neue'] uppercase text-white mb-4 tracking-wide">Computational Design</h3>
          <p className="text-blue-200 font-['Work_Sans'] font-light text-lg mb-8">
            Adaptive and programmatic. Designing systems that respond to real-time data and generate endless variations dynamically.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-900 to-transparent mb-6" />
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">The "Systems Thinker"</p>
        </motion.div>

        {/* Separator / Arrow */}
        <div className="hidden md:flex items-center justify-center absolute left-2/3 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
           <ArrowRight className="w-12 h-12" />
        </div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-md border border-purple-800 p-10 rounded-[32px] relative overflow-hidden group hover:border-purple-500 transition-colors"
        >
          <MonitorPlay className="w-10 h-10 text-purple-400 mb-8" />
          <h3 className="text-3xl font-['Bebas_Neue'] uppercase text-white mb-4 tracking-wide">AI-Native Design</h3>
          <p className="text-purple-200 font-['Work_Sans'] font-light text-lg mb-8">
            Probabilistic and conversational. Guiding models via prompts, evaluating generated outcomes, and refining continuously.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-purple-800 to-transparent mb-6 group-hover:from-purple-500 transition-colors" />
          <p className="text-sm font-bold uppercase tracking-widest text-purple-300">The "Curator / Director"</p>
        </motion.div>

      </div>
    </div>
  );
}