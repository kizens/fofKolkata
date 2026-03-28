import { motion } from "motion/react";
import { Sparkles, Terminal, ArrowRight, Brain } from "lucide-react";

export function Slide22_VibeCoding1_Intro() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black pointer-events-none" />
      
      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-[0.9]">
            The Reality of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Vibe Coding</span>
          </h2>
          <div className="slide-description space-y-6">
            <p>
              "Vibe coding" means writing code by conversation, intent, and intuition rather than rigid syntax.
            </p>
            <p>
              But let's be clear. It is not a mandatory skill just because everyone is talking about it. You only adopt it <strong className="font-bold text-white">if it adds measurable value</strong> to your specific design process.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px]" />
            <Brain className="w-10 h-10 text-emerald-400 mb-6" />
            <h3 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-white mb-3">When it makes sense</h3>
            <ul className="space-y-4 slide-description">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                <span>Rapidly validating complex interactive concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                <span>Bridging the communication gap with engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                <span>Building "feeling" into a prototype that static Figma cannot capture</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 rounded-3xl bg-zinc-950 border border-red-900/30 relative overflow-hidden">
             <p className="text-xl text-zinc-300 font-light italic">
               "Vibe coding can make us faster, but only if we remain <strong className="text-white font-semibold">thoughtful</strong>."
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}