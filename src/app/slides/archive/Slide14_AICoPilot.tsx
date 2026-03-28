import { motion } from "motion/react";
import { Handshake } from "lucide-react";

export function Slide14_AICoPilot() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="z-10 flex w-full flex-col lg:flex-row-reverse h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="w-8 h-8 text-[#DB4437]" />
            <span className="text-xl font-mono tracking-widest text-zinc-400 uppercase">Collaboration</span>
          </div>
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9]">
            The Ultimate <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB4437] to-[#F4B400]">Co-Pilot</span>
          </h2>
          <div className="text-xl md:text-2xl font-light leading-[1.6] text-zinc-300 font-['Work_Sans',sans-serif] space-y-6">
            <p>
              AI is not an autonomous replacement designed to take the wheel. It is a tireless co-pilot that excels at overcoming the "blank page" syndrome.
            </p>
            <p>
              It instantly provides variations, structural foundations, and asset generation, allowing the designer to spend their cognitive bandwidth on <strong className="font-bold text-white">critique, refinement, and emotional resonance.</strong>
            </p>
          </div>
        </motion.div>

        {/* Left Content / Image Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 aspect-[4/3] rounded-[32px] overflow-hidden relative border border-zinc-800 shadow-2xl group"
        >
          <img 
            src="https://images.unsplash.com/photo-1517421054973-2ac2fb9b9ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2xsYWJvcmF0aW5nJTIwd29ya3NwYWNlJTIwYWl8ZW58MXx8fHwxNzc0NDYyMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Collaborative Workspace" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-10 left-10 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-sm">
             <p className="text-sm font-mono tracking-wider text-zinc-400 mb-2">System Output</p>
             <p className="text-lg font-['Work_Sans'] text-white">"Here are 4 structural variations based on your prompt. Awaiting your direction."</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}