import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Slide4_Paradigm() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="z-10 flex w-full flex-col md:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-6xl md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-none">
            The Paradigm
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300 font-['Work_Sans',sans-serif]">
            As AI reshapes design, prompts become a way to guide systems, set boundaries, and explore variations instantly, a new capability in the designer's toolkit.
          </p>
        </motion.div>

        {/* Right Content / Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 h-[60vh] rounded-[32px] overflow-hidden relative group"
        >
          {/* Using a solid gradient or placeholder image to represent the Gemini Video */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800" />
          <img 
            src="https://images.unsplash.com/photo-1759265844881-a139bb028df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBnbG93aW5nJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzc0NDYxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="AI Generative Concept" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          {/* Centered Icon to imply video/generation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="flex flex-col items-center p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                <Sparkles className="w-12 h-12 text-blue-400 mb-4" />
                <span className="font-mono text-sm tracking-widest text-zinc-400 uppercase">Generative Visualization</span>
             </div>
          </div>
        </motion.div>
      </div>


    </div>
  );
}