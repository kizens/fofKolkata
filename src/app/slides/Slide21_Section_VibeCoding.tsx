import { motion } from "motion/react";
import { TerminalSquare } from "lucide-react";

export function Slide21_Section_VibeCoding() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-[2000px]">
      {/* Active Coder Typing & AI Execution Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }} // Increased visibility as requested
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex flex-col justify-end font-mono text-xs md:text-sm text-emerald-400/50 p-6 md:p-12 overflow-hidden pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -400] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="space-y-3"
        >
          {[
            { type: "human", text: "> Define a new agent: VibeCommander v1.0" },
            { type: "ai", text: "🤖 Initializing intelligence graph... Loading NLP models..." },
            { type: "system", text: "[✓] Kernel initialized successfully without segmentation faults" },
            { type: "human", text: "> Setup hot-module replacement for web stream" },
            { type: "ai", text: "🤖 Polling system events... Setting up watchers..." },
            { type: "system", text: "[✓] File watcher active on /src/app/**/*.tsx" },
            { type: "human", text: "> Adjust aesthetic padding of UI elements to exceed normal bounds" },
            { type: "ai", text: "🤖 Tailoring spacing metrics... Applying dynamic HSL gradients..." },
            { type: "system", text: "[✓] Pre-transform stream error corrected automatically" },
            { type: "human", text: "> Analyze user sentiment regarding button clicking" },
            { type: "ai", text: "🤖 Running regression model on interaction telemetry data..." },
            { type: "system", text: "[✓] Sentiment analyzed: Positive (87.4%) with high engagement" },
            { type: "human", text: "> Push production build to staging environment" },
            { type: "ai", text: "🤖 Bundling assets... compressing scripts... deploying..." },
            { type: "system", text: "[✓] Production deployment successful: staged at cloud-preview.io/ui-exp" }
          ].map((log, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.8, duration: 0.3 }} // Typing reveal delay
              className="flex gap-4 items-center"
            >
              <span className="text-emerald-700 font-bold">{(i + 1).toString().padStart(3, '0')}</span>
              <span className={log.type === "human" ? "text-cyan-400" : log.type === "ai" ? "text-emerald-400" : "text-gray-400"}>
                {log.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Futuristic Grid & Ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full border border-emerald-500/30 bg-emerald-900/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
          >
            <TerminalSquare className="w-10 h-10 text-emerald-400" />
          </motion.div>
          
          <h2 className="text-7xl md:text-[120px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none">
            Vibe <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
              Coding
            </span>
          </h2>
          
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-12 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}