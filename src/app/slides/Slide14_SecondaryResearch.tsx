import { motion } from "motion/react";
import { Search, Library, FileText, MessagesSquare, Sparkles } from "lucide-react";

export function Slide14_SecondaryResearch() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-teal-900/10 via-black to-black pointer-events-none" />

      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-none text-white">
            Secondary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Research</span>
          </h2>
          <div className="slide-description space-y-6">
            <p>
              Information gathering becomes a high-leverage, instantaneous step with AI. 
            </p>
            <p>
              AI can scan articles, industry papers, market trends, and <strong className="text-white font-medium">market intelligence reports</strong>, then summarize patterns, compare viewpoints, and highlight gaps. It frees designers to focus on interpretation rather than raw data collection.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 aspect-[4/3] rounded-[32px] overflow-hidden relative border border-zinc-800 bg-[#0a0a0a] shadow-2xl flex flex-col"
        >
          {/* Dashboard Header */}
          <div className="h-16 border-b border-zinc-800 flex items-center px-6 gap-4 bg-zinc-900/50 backdrop-blur-md shrink-0">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <div className="mx-auto px-4 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400 font-mono flex items-center gap-2">
               <Library size={12} />
               Research_Assistant_Workspace
             </div>
          </div>
          
          {/* Main Dashboard Area */}
          <div className="flex-1 p-6 grid grid-cols-2 gap-4">
            
            {/* Box 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-5 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FileText size={64} />
              </div>
              <h3 className="text-zinc-400 font-mono text-xs uppercase mb-4">Competitor Analysis</h3>
              <div className="space-y-3">
                <div className="h-2 w-full bg-zinc-800 rounded-full" />
                <div className="h-2 w-5/6 bg-zinc-800 rounded-full" />
                <div className="h-2 w-4/6 bg-zinc-800 rounded-full" />
              </div>
              <div className="mt-auto pt-4 flex items-center gap-2 text-teal-400 text-sm">
                <Sparkles size={14} /> <span>12 Insights Generated</span>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-5 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessagesSquare size={64} />
              </div>
              <h3 className="text-zinc-400 font-mono text-xs uppercase mb-4">Industry & Market Reports</h3>
              <div className="space-y-3">
                <div className="h-8 w-full bg-zinc-800/50 rounded-lg flex items-center px-3 border border-zinc-700/50 gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-[10px] text-zinc-500">"Voice UI adoption up 35%" (Gartner Trend)</span>
                </div>
                <div className="h-8 w-full bg-zinc-800/50 rounded-lg flex items-center px-3 border border-zinc-700/50 gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-[10px] text-zinc-500">"Competitors shifting to zero-state" (Nielsen)</span>
                </div>
              </div>
            </motion.div>

            {/* Chat Box */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="col-span-2 bg-gradient-to-br from-teal-900/20 to-zinc-900/50 rounded-2xl border border-teal-500/20 p-5"
            >
              <div className="flex gap-4 items-end">
                <div className="flex-1 bg-black/50 border border-zinc-700 rounded-xl p-4 text-sm text-zinc-400 font-light">
                  "Synthesize the key trends from the last 10 industry reports regarding mobile checkout abandonment."
                </div>
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}