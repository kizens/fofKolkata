import { motion } from "motion/react";
import { MessageSquareText, Layers, Rocket } from "lucide-react";

export function Slide24_VibeCoding3_Example() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-900/10 via-black to-black pointer-events-none" />
      
      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-[0.9]">
            Rapid Concept <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Testing</span>
          </h2>
          <div className="slide-description space-y-6">
            <p>
              What you see today is <strong className="text-white font-semibold">vibe coded using Antigravity and Figma Make</strong>. 
            </p>
            <p>
              It reduced my manual effort in terms of interactions and turning concepts into slides. I became the <strong className="text-white font-semibold">Director</strong> of what should be done, while the AI handled the gears.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 relative aspect-[4/3] rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950"
        >
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-48 h-32 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4">
                    <Layers className="w-8 h-8 text-zinc-600" />
                  </div>
                  <div className="w-48 h-32 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4 opacity-50">
                    <Layers className="w-8 h-8 text-zinc-700" />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-teal-900/20 border border-teal-500/30 text-teal-400 font-mono text-xs uppercase text-right">
                   Before: 50+ Static Frames
                </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
                <div className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-mono my-2 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                  Figma Make Translation
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
             </div>

             <div className="flex justify-between items-end mt-auto">
                <div className="p-4 rounded-xl bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase">
                   After: 1 Dynamic Coded Prototype
                </div>
                <div className="w-full max-w-sm rounded-xl bg-black border border-zinc-800 p-1">
                   <div className="w-full h-32 rounded-lg overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3NzQ0Njk0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Dynamic UI" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}