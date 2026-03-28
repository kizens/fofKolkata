import { motion } from "motion/react";
import { Code2, Frame, Image as ImageIcon, Sparkles } from "lucide-react";

export function Slide4_TrendingTools() {
  const tools = [
    {
      name: "Figma AI",
      role: "The Assistant",
      description: "Auto layering, finding assets, generating initial layouts. Removing the drudgery of pixel pushing.",
      icon: Frame,
      color: "bg-purple-500/20 text-purple-400 border-purple-500/50"
    },
    {
      name: "Midjourney & Recraft",
      role: "The Asset Engine",
      description: "Generating bespoke illustrations, textures, and photography in seconds instead of hunting on stock sites.",
      icon: ImageIcon,
      color: "bg-blue-500/20 text-blue-400 border-blue-500/50"
    },
    {
      name: "v0 by Vercel",
      role: "The Prototyper",
      description: "Generative UI that bridges the gap between design concepts and interactive, functional React components instantly.",
      icon: Sparkles,
      color: "bg-zinc-500/20 text-zinc-300 border-zinc-500/50"
    },
    {
      name: "Cursor AI",
      role: "The Handoff Bridge",
      description: "Empowering designers to tweak code directly without breaking the build. The lines between design and eng are blurring.",
      icon: Code2,
      color: "bg-green-500/20 text-green-400 border-green-500/50"
    }
  ];

  return (
    <div className="flex h-screen w-full flex-col bg-[#050505] text-white overflow-hidden items-center justify-center relative p-8 md:p-24">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 w-full max-w-7xl z-10 text-left mt-12"
      >
        <h2 className="text-[60px] md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Trending Tools
        </h2>
        <p className="text-xl md:text-2xl font-light text-zinc-300 font-['Work_Sans',sans-serif] leading-relaxed max-w-4xl">
          It's not about learning one specific AI tool. It's about building a <strong className="text-white font-semibold">fluid ecosystem</strong> that enhances every stage of your workflow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 max-w-7xl">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:bg-zinc-800/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className={`mb-6 inline-flex p-3 rounded-2xl border ${tool.color} transition-colors group-hover:bg-opacity-40`}>
                <tool.icon className="h-8 w-8" />
              </div>
              
              <h3 className="mb-1 text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                {tool.name}
              </h3>
              <p className="mb-4 text-sm font-mono text-zinc-500 uppercase tracking-wider">
                {tool.role}
              </p>
              
              <p className="slide-description group-hover:text-zinc-300 transition-colors">
                {tool.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}