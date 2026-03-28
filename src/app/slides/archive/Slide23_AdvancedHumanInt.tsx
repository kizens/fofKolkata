import { motion } from "motion/react";
import { BrainCircuit, Lightbulb } from "lucide-react";

export function Slide23_AdvancedHumanInt() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center justify-center text-center">
      {/* Background Image Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1721734081214-1be31adce713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG93aW5nJTIwYnJhaW4lMjBodW1hbiUyMGludGVsbGlnZW5jZSUyMGZ1dHVyZXxlbnwxfHx8fDE3NzQ0NjI3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Glowing brain human intelligence" 
          className="h-full w-full object-cover mix-blend-screen opacity-70"
          style={{ maskImage: "radial-gradient(circle at center, black 50%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 100%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <div className="z-10 flex h-full w-full max-w-6xl flex-col justify-center items-center mt-12 px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl rounded-[40px] p-12 md:p-24 w-full shadow-[0_0_80px_rgba(255,255,255,0.03)] flex flex-col items-center"
        >
          <div className="flex gap-4 mb-8">
             <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
               <BrainCircuit size={32} />
             </div>
             <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
               <Lightbulb size={32} />
             </div>
          </div>
          
          <h2 className="text-[60px] md:text-[90px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.85] mb-10 text-center">
            <span className="text-white">Advanced </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
              Human Intelligence
            </span>
          </h2>
          
          <p className="text-xl md:text-3xl text-zinc-300 font-light font-['Work_Sans',sans-serif] max-w-4xl mx-auto leading-relaxed text-center mb-8">
            AI is extremely creative in generating volume and iterating at speed. But the unique human capability to <strong className="text-white font-semibold">conceive the truly new</strong> remains untouched.
          </p>

          <div className="border-t border-zinc-800 pt-8 w-full max-w-3xl">
             <p className="text-lg text-zinc-400 font-mono tracking-wide uppercase">
                "AI is not here to replace designers. It is here to bring out the best in us."
             </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}