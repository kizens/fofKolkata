import { motion } from "motion/react";
import { Sparkles, Network, BrainCircuit, Activity } from "lucide-react";

export function Slide15_Synthesis() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-4/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-none">
            Synthesis
          </h2>
          <div className="slide-description space-y-6">
            <p>
              Instead of one generic summary, AI allows you to view data through different <strong className="text-white font-medium">"Lenses"</strong> (e.g., Business Strategy, Technical Constraints, or Vulnerability).
            </p>
            <p>
              The designer’s role shifts from "doing the sorting" to <strong className="text-white font-medium">"orchestrating the framework."</strong> You define the boundaries and ethics, while agents handle high-volume data crunching.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Synthesis UI Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-8/12 aspect-[4/3] rounded-[32px] overflow-hidden relative border border-zinc-800 bg-[#111] shadow-2xl flex p-6 gap-6"
        >
           {/* Sidebar */}
           <div className="w-64 h-full bg-zinc-900/50 rounded-2xl border border-zinc-800 p-5 flex flex-col gap-4">
             <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Sources (124)</h3>
             {[1, 2, 3, 4].map(i => (
               <div key={i} className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50">
                 <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs">P{i}</div>
                 <div>
                   <div className="h-2 w-16 bg-zinc-600 rounded-full mb-2" />
                   <div className="h-1.5 w-10 bg-zinc-700 rounded-full" />
                 </div>
               </div>
             ))}
           </div>

           {/* Main Canvas Area */}
           <div className="flex-1 h-full bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 relative overflow-hidden">
             
             <div className="absolute top-6 left-6 text-sm text-zinc-400 flex items-center gap-2">
               <Network className="w-4 h-4 text-indigo-400" /> Multi-Lens Synthesis Canvas
             </div>
             
             {/* Map Clusters */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="absolute top-20 left-12 p-4 rounded-xl bg-blue-900/20 border border-blue-500/30 w-52"
             >
                <div className="flex items-center gap-2 mb-3 text-blue-400 text-xs font-mono uppercase">
                  <Activity size={12} /> Business Strategy Lens
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded-md bg-blue-500/10 text-[10px] text-blue-200 border border-blue-500/20">"Checkout friction causing drop-offs"</div>
                  <div className="p-2 rounded-md bg-blue-500/10 text-[10px] text-blue-200 border border-blue-500/20">"Missed upsell opportunities"</div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8 }}
               className="absolute bottom-16 right-16 p-4 rounded-xl bg-yellow-900/20 border border-yellow-500/30 w-56"
             >
                <div className="flex items-center gap-2 mb-3 text-yellow-400 text-xs font-mono uppercase">
                  <Sparkles size={12} /> Tech Constraint Lens
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded-md bg-yellow-500/10 text-[10px] text-yellow-200 border border-yellow-500/20">"API latency spikes during search"</div>
                  <div className="p-2 rounded-md bg-yellow-500/10 text-[10px] text-yellow-200 border border-yellow-500/20">"Legacy database slow real-time sync"</div>
                  <div className="p-2 rounded-md bg-yellow-500/10 text-[10px] text-yellow-200 border border-yellow-500/20">"Third-party auth downtimes"</div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1.2, type: "spring" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
             >
               <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.4)] border-4 border-[#111]">
                 <Sparkles className="w-6 h-6 text-white" />
               </div>
               <div className="mt-3 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-xs font-mono">
                 Orchestrating Framework
               </div>
             </motion.div>

           </div>
        </motion.div>
      </div>
    </div>
  );
}