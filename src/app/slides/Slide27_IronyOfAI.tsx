import { motion } from "motion/react";
import { Mail, Edit, Terminal, AlertTriangle, Sparkles } from "lucide-react";

export function Slide27_IronyOfAI() {
  const points = [
    {
      icon: Mail,
      title: "Inbox Auto-Pilot",
      desc: "Summarizing emails and generating responses without truly reading or thinking.",
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-cyan-400"
    },
    {
      icon: Edit,
      title: "Blank Page Anxiety",
      desc: "Filling pages with synthetic drafts immediately rather than overcoming writer's block.",
      color: "from-purple-500/20 to-pink-500/20",
      textColor: "text-pink-400"
    },
    {
      icon: Terminal,
      title: "Superficial Vibe Coding",
      desc: '"Vibe coding" prototypes without engaging or understanding the underlying system logic.',
      color: "from-amber-500/20 to-orange-500/20",
      textColor: "text-orange-400"
    }
  ];

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="z-10 flex w-full flex-col px-12 md:px-24 max-w-7xl mx-auto gap-8">
        <motion.h3 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[40px] md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.9] text-white"
        >
          The Irony of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
            AI Outsourced
          </span>
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Concept & List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-md flex items-start gap-4 cursor-pointer hover:border-zinc-700 transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${point.color}`}>
                  <point.icon size={24} className={point.textColor} />
                </div>
                <div>
                  <h4 className="text-xl font-['Bebas_Neue',sans-serif] tracking-wider text-white mb-1">
                    {point.title}
                  </h4>
                  <p className="slide-description">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Problem Statement (Callout Box) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 h-full flex items-center"
          >
            <div className="w-full p-8 rounded-2xl border border-rose-500/30 bg-rose-500/5 backdrop-blur-md relative h-[420px] flex flex-col justify-center items-center text-center">
              {/* Pulsing Alert Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 p-4 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-500 shadow-lg shadow-rose-500/20"
              >
                <AlertTriangle size={32} />
              </motion.div>

              <div className="mt-4 flex flex-col gap-6">
                <p className="text-sm font-mono text-rose-400 uppercase tracking-widest">The Hidden Problem</p>
                <h4 className="text-3xl font-light font-['Work_Sans'] leading-snug text-zinc-200">
                  We have become <strong className="text-white font-semibold">"professional validators of a robot's opinions"</strong>
                </h4>
                <div className="h-px w-24 bg-zinc-800 mx-auto" />
                <h4 className="text-3xl font-light font-['Work_Sans'] leading-snug text-zinc-200">
                  and <strong className="text-white font-semibold">"intellectual tourists"</strong> in our own work.
                </h4>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-rose-500/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-rose-500/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
