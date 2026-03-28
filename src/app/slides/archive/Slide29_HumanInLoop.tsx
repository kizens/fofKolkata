import { motion } from "motion/react";
import { Users, HeartPulse, BrainCircuit, Anchor } from "lucide-react";

export function Slide29_HumanInLoop() {
  const superpowers = [
    { title: "Context & Empathy", icon: HeartPulse, desc: "AI doesn't know what it feels like to use a frustrating app. You do." },
    { title: "Strategic Vision", icon: BrainCircuit, desc: "AI can generate a button, but it can't decide if the feature should exist." },
    { title: "Breaking the Rules", icon: Anchor, desc: "AI trains on the past. To build something truly novel, you must break its patterns." }
  ];

  return (
    <div className="flex h-screen w-full bg-zinc-950 text-white overflow-hidden p-0 relative items-center justify-center">
      
      {/* Background Image Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1576153192621-7a3be10b356e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb2xsYWJvcmF0aW5nJTIwVUklMjBkZXNpZ258ZW58MXx8fHwxNzc0NDYwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="People Collaborating" 
          className="h-full w-full object-cover grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
      </motion.div>

      <div className="z-10 flex h-full w-full flex-col justify-center px-12 md:px-24 max-w-7xl mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-[60px] md:text-[90px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.9] mb-8">
            Why you remain <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Irreplaceable</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light font-['Work_Sans',sans-serif] leading-relaxed">
            As generative tools commoditize execution, the value shifts to <strong className="text-white font-semibold">taste, curation, and deep human understanding</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {superpowers.map((power, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (idx * 0.2) }}
              className="group flex flex-col items-start border-l-2 border-zinc-800 pl-6 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="mb-4 rounded-xl bg-zinc-900 p-3 group-hover:bg-blue-900/30 group-hover:text-blue-400 transition-colors">
                <power.icon size={28} />
              </div>
              <h3 className="text-2xl font-medium text-zinc-200 mb-3">{power.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed">{power.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}