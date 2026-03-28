import { motion } from "motion/react";
import { Compass, Lightbulb, RefreshCw, Zap } from "lucide-react";

export function Slide28_HumanPrinciples() {
  const principles = [
    {
      icon: Compass,
      title: "Direct Idea Contact",
      desc: "Always keep yourself in direct contact with the core ideas. Never delegate the seed concept.",
      color: "from-blue-500/20 to-indigo-500/20",
      textColor: "text-blue-400"
    },
    {
      icon: Lightbulb,
      title: "Expand, Don't Outsource",
      desc: "AI should help you expand your vision, not just execute without knowing the ultimate goal.",
      color: "from-emerald-500/20 to-teal-500/20",
      textColor: "text-emerald-400"
    },
    {
      icon: RefreshCw,
      title: "Reflective Mindfulness",
      desc: "Use agents to help you reflect on your own design process, not just automate it away.",
      color: "from-purple-500/20 to-violet-500/20",
      textColor: "text-purple-400"
    }
  ];

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="z-10 flex w-full flex-col px-12 md:px-24 max-w-7xl mx-auto h-full justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Intro Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            

            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[40px] md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.9] text-white"
            >
              Principles for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Being Human
              </span>
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-zinc-400 font-light font-['Work_Sans'] leading-relaxed"
            >
              As designers in the age of Agentic AI, we must define the boundaries of where the machine ends and human intent begins.
            </motion.p>
          </div>

          {/* Right Column - Principles Cards List */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-md flex items-start gap-5 cursor-pointer hover:border-zinc-700 transition-all duration-300 relative group"
              >
                {/* Glow Accent */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className={`p-4 rounded-lg bg-gradient-to-br ${principle.color} shrink-0`}>
                  <principle.icon size={28} className={principle.textColor} />
                </div>
                
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-['Bebas_Neue',sans-serif] tracking-wider text-white">
                    {principle.title}
                  </h4>
                  <p className="slide-description">
                    {principle.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
