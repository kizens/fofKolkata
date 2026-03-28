import { motion } from "motion/react";
import { Network, GitPullRequest, Workflow } from "lucide-react";

export function Slide19_AICollaborators() {
  return (
    <div className="flex h-screen w-full bg-zinc-950 text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background Image Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG5vZGVzJTIwbmV0d29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzc0NDYyNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="AI Network" 
          className="h-full w-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
      </motion.div>

      <div className="z-10 flex h-full w-full flex-col justify-center px-4 md:px-12 max-w-7xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 mb-6">
            <Network size={16} />
            <span className="text-sm font-semibold uppercase tracking-wider font-mono">Agentic Teams</span>
          </div>
          <h2 className="text-[60px] md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.9] mb-8">
            The Rise of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">AI Collaborators</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light font-['Work_Sans',sans-serif] leading-relaxed">
            AI has moved beyond being a simple tool. We are now working alongside <strong className="text-white font-semibold">autonomous AI Personas</strong> designed to act as fully-fledged team members: Product Managers, UX Researchers, and Creative Directors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group flex flex-col items-start border-l-2 border-zinc-800 pl-8 hover:border-teal-500 transition-colors duration-300"
          >
            <div className="mb-4 rounded-xl bg-zinc-900 p-4 border border-zinc-800 group-hover:bg-teal-900/30 group-hover:text-teal-400 transition-colors">
              <Workflow size={28} />
            </div>
            <h3 className="text-3xl font-['Bebas_Neue',sans-serif] uppercase tracking-wide text-zinc-100 mb-3">
              Autonomy & Ideation
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-['Work_Sans',sans-serif]">
              These agents can take a high-level goal, conduct research, debate with each other, and autonomously generate complex concepts without constant human prompting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group flex flex-col items-start border-l-2 border-zinc-800 pl-8 hover:border-cyan-500 transition-colors duration-300"
          >
            <div className="mb-4 rounded-xl bg-zinc-900 p-4 border border-zinc-800 group-hover:bg-cyan-900/30 group-hover:text-cyan-400 transition-colors">
              <GitPullRequest size={28} />
            </div>
            <h3 className="text-3xl font-['Bebas_Neue',sans-serif] uppercase tracking-wide text-zinc-100 mb-3">
              Constructive Critique
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-['Work_Sans',sans-serif]">
              They aren't just "yes men". AI collaborators are programmed to challenge assumptions, find edge cases in your logic, and elevate the quality of human output.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}