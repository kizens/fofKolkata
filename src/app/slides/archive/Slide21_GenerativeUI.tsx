import { motion } from "motion/react";
import { Sparkles, Layers, Cpu } from "lucide-react";

export function Slide21_GenerativeUI() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />

      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-mono tracking-widest text-blue-500 uppercase">Generative Interfaces</span>
          </div>
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9]">
            The End of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Static Screens</span>
          </h2>
          <div className="text-xl md:text-2xl font-light leading-[1.6] text-zinc-300 font-['Work_Sans',sans-serif] space-y-6">
            <p>
              We no longer hard-code every possible user journey. Instead of designing 50 isolated screens, we design <strong className="font-bold text-white">atomic components and logic systems</strong>.
            </p>
            <p>
              In this new era, AI acts as an invisible assembler, rendering unique UI on the fly based directly on the user's specific context and intent.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-4 border border-zinc-800 bg-zinc-900/50 p-6 rounded-2xl backdrop-blur-md">
             <Cpu className="w-10 h-10 text-zinc-400 flex-shrink-0" />
             <p className="text-zinc-300 text-lg">
                "Designers are transitioning from pixel-pushers to system architects."
             </p>
          </div>
        </motion.div>

        {/* Right Content / Image Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex relative justify-center"
        >
          <div className="w-full aspect-square max-w-[500px] rounded-[40px] overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(59,130,246,0.15)] relative group">
            <img 
              src="https://images.unsplash.com/photo-1659634088279-fc01616bad37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZmxvYXRpbmclMjB1aSUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzc0NDYyNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Floating UI Components" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/30 via-black/40 to-black/80" />
            
            {/* Interactive/Generative feeling overlay */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-blue-300" />
              <div className="h-2 w-16 bg-blue-300/50 rounded-full" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-10 bg-black/60 backdrop-blur-md border border-zinc-700 p-4 rounded-xl"
            >
              <div className="h-2 w-24 bg-zinc-400 rounded-full mb-2" />
              <div className="h-2 w-12 bg-zinc-600 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}