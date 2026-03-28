import { motion } from "motion/react";
import { MoveRight, History } from "lucide-react";

export function Slide10_EvolutionOfProcess() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9]">
            The Evolution <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Of Process</span>
          </h2>
          <div className="slide-description space-y-6">
            <p>
              Design has evolved drastically: from manual drafting boards, to digital pixel-pushing, to our current era of AI-assisted generation.
            </p>
            <p>
              Despite the tools changing, the core mandate remains exactly the same: <strong className="font-bold text-white">Solving human problems.</strong> AI just increases our velocity and iteration capacity.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Image Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col gap-6"
        >
          <div className="aspect-video w-full rounded-[32px] overflow-hidden relative border border-zinc-800 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1761670835899-5a0248c7e7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGV2b2x1dGlvbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzc0NDYyMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Evolution Process" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Timeline abstraction */}
          <div className="flex items-center justify-between px-4">
            <div className="flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-zinc-700 mb-2" />
               <span className="font-['Bebas_Neue'] text-xl text-zinc-500">Manual</span>
            </div>
            <MoveRight className="w-6 h-6 text-zinc-600" />
            <div className="flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-blue-900 mb-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
               <span className="font-['Bebas_Neue'] text-xl text-blue-500">Digital</span>
            </div>
            <MoveRight className="w-6 h-6 text-blue-500" />
            <div className="flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-white mb-2 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
               <span className="font-['Bebas_Neue'] text-xl text-white">AI-Assisted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}