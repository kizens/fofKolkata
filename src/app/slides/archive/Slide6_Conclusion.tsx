import { motion } from "motion/react";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export function Slide6_Conclusion() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center text-center">
      
      {/* Background Image Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1768323102290-3b6ad7d1c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHRvdWNoaW5nJTIwcm9ib3QlMjBoYW5kJTIwYWl8ZW58MXx8fHwxNzc0NDYwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Human touching robot hand" 
          className="h-full w-full max-w-7xl object-cover mix-blend-screen opacity-50"
          style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <div className="z-10 flex h-full w-full max-w-6xl flex-col justify-center items-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl rounded-[40px] p-12 md:p-24 w-full shadow-[0_0_50px_rgba(255,255,255,0.03)] flex flex-col items-center"
        >
          <div className="mb-12 flex items-center justify-center px-8 py-3 rounded-[40px] border border-[#373946] bg-gradient-to-br from-[#16171f] to-black shadow-lg">
            <p className="font-medium text-lg text-white whitespace-nowrap">The Centaur Designer</p>
          </div>
          
          <h2 className="text-[70px] md:text-[110px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.85] mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
              Adapt. Integrate.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Thrive.
            </span>
          </h2>
          
          <p className="text-xl md:text-3xl text-zinc-300 font-light font-['Work_Sans',sans-serif] max-w-4xl mx-auto leading-relaxed text-center mb-12">
            The future doesn't belong to AI alone, nor to the traditional designer. <strong className="text-white font-semibold">It belongs to the hybrid.</strong> The human orchestrator guiding the machine.
          </p>

          <div className="mt-16 pt-16 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <div className="text-left">
              <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-2">Connect</p>
              <h3 className="text-2xl font-bold text-white mb-1">Sujit Kumar Pradhan</h3>
              <p className="text-zinc-400">UX Designer at Google</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all hover:scale-110 group relative">
                <Linkedin size={20} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all hover:scale-110 group relative">
                <Twitter size={20} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all hover:scale-110 group relative">
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}