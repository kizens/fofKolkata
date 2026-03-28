import { motion } from "motion/react";
import { Target, Hammer } from "lucide-react";

export function Slide7_Investment() {
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
            The Investment
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300 font-['Work_Sans',sans-serif]">
            Focus <strong className="font-bold text-white">80%</strong> of your time on Strategy (the 'why', 'what'), and <strong className="font-bold text-white">20%</strong> on Execution (the 'how').
          </p>
        </motion.div>

        {/* Right Content / Visual Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex justify-center items-center relative"
        >
          {/* Custom 80/20 Visual */}
          <div className="w-full max-w-[500px] aspect-square relative rounded-full border-[12px] border-zinc-900 bg-zinc-950 shadow-[0_0_50px_rgba(255,255,255,0.02)] flex overflow-hidden">
            
            <div className="absolute inset-0 flex">
               {/* 80% Strategy */}
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "80%" }}
                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                 className="h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-r border-zinc-800 flex items-center justify-center relative overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="flex flex-col items-center justify-center text-center z-10 px-8">
                   <Target className="w-12 h-12 text-blue-400 mb-4" />
                   <h3 className="text-6xl font-bold font-['Bebas_Neue'] text-white">80%</h3>
                   <p className="text-xl text-blue-200 tracking-widest uppercase">Strategy</p>
                 </div>
               </motion.div>
               
               {/* 20% Execution */}
               <motion.div 
                 initial={{ width: "100%" }}
                 animate={{ width: "20%" }}
                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                 className="h-full bg-zinc-900 flex items-center justify-center relative"
               >
                 <div className="flex flex-col items-center justify-center text-center z-10">
                   <Hammer className="w-8 h-8 text-zinc-500 mb-4" />
                   <h3 className="text-4xl font-bold font-['Bebas_Neue'] text-zinc-300">20%</h3>
                   <p className="text-sm text-zinc-500 tracking-widest uppercase">Exec.</p>
                 </div>
               </motion.div>
            </div>

          </div>
        </motion.div>
      </div>


    </div>
  );
}