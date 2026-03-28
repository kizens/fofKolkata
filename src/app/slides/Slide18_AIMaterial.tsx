import { motion } from "motion/react";
import { Layers } from "lucide-react";

export function Slide18_AIMaterial() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-5/12 aspect-[4/5] rounded-[32px] overflow-hidden relative border border-zinc-800 shadow-2xl group"
        >
          <img 
            src="https://images.unsplash.com/photo-1774023802584-5edd7adfce6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRhdGlvbmFsJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzc0NDYxOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="AI as a computational material" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <Layers className="w-10 h-10 text-zinc-300 mb-4" />
            <p className="text-sm font-mono tracking-widest text-zinc-400 uppercase">Computational Canvas</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-7/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
            AI as a New <br/>Design Material
          </h2>
          <div className="slide-description space-y-6">
            <p>
              Just as wood has a grain and steel has a tensile strength, Artificial Intelligence has its own unique properties. It is a <strong className="font-semibold text-white">computational material</strong>.
            </p>
            <p>
              Designers are no longer just pushing static pixels; we are now molding probabilistic systems. We must understand the "grain" of AI, how it learns, hallucinates, and scales, to shape experiences that feel magical rather than mechanical.
            </p>
            <div className="p-6 mt-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
               <p className="italic text-lg text-zinc-400">
                 "Design in the age of AI is less about making the artifact and more about setting the rules of behavior."
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}