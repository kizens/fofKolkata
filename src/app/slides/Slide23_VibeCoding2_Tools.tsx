import { motion } from "motion/react";
import { Code, Figma, Zap } from "lucide-react";

export function Slide23_VibeCoding2_Tools() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-900/10 via-black to-black pointer-events-none" />
      
      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto justify-center mt-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-4 leading-[0.9]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ecosystem</span>
          </h2>
          <p className="text-xl font-light text-zinc-400 font-['Work_Sans',sans-serif]">
            Tools like Claude, Cursor, and emerging frameworks are collapsing the distance between a designer's intent and a functional product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col gap-6 group hover:bg-zinc-800/40 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Code className="w-7 h-7 text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-white mb-2">Claude</h3>
              <p className="slide-description">
                Describe the interaction, and watch the React component render instantly in the browser. It's conversational programming.
              </p>
            </div>
            <div className="mt-auto aspect-video rounded-xl border border-zinc-800 overflow-hidden relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/iSn77jvjojA?autoplay=1&mute=1&cc_load_policy=0" 
                title="Claude on Youtube" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col gap-6 group hover:bg-zinc-800/40 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Figma className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-white mb-2">Figma Make</h3>
              <p className="slide-description">
                Generate UI designs instantly from text prompts directly within Figma. Explores visual iterations at the speed of thought.
              </p>
            </div>
            <div className="mt-auto aspect-video rounded-xl border border-zinc-800 overflow-hidden relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/QHNhb_jj4gU?autoplay=1&mute=1&cc_load_policy=0" 
                title="Figma Make on Youtube" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col gap-6 group hover:bg-zinc-800/40 transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Zap className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-white mb-2">Antigravity</h3>
              <p className="slide-description">
                The Google internal toolkit to bypass boilerplate. It lets designers focus on the physics and feel of the interaction rather than setup.
              </p>
            </div>
            <div className="mt-auto aspect-video rounded-xl border border-zinc-800 overflow-hidden relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/SVCBA-pBgt0?autoplay=1&mute=1&cc_load_policy=0" 
                title="Antigravity on Youtube" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}