import { motion } from "motion/react";
import { Bot, Sparkles, ArrowRight } from "lucide-react";

export function Slide11_HyperPersonalization() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9]">
            From AI <br/> To AI Agents
          </h2>
          <div className="slide-description space-y-6">
            <p>
              We are moving from static co-pilots helping with "blank pages" to <strong className="font-bold text-white">autonomous agents</strong> that execute entire workflows on our behalf.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Image Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 flex relative items-center justify-center h-[500px]"
        >
          
          <div className="absolute inset-0 border border-zinc-800 rounded-3xl bg-zinc-900/30 overflow-hidden shadow-2xl flex flex-col p-8 justify-center gap-12">
             
             <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
                <iframe
                   className="absolute inset-0 w-full h-full"
                   src="https://www.youtube.com/embed/zr_QZdXunyE?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=zr_QZdXunyE&cc_load_policy=0"
                   title="Design Agent Workflow"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                />
             </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
}