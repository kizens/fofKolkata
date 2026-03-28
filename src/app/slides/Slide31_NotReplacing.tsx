import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Sparkles } from "lucide-react";
import qrcodeImg from "@/assets/qrcode.png";

export function Slide31_NotReplacing() {

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden p-0 relative items-center justify-center">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

      {/* Main Container - Centered by Default */}
      <div className="z-10 flex w-full flex-col px-12 md:px-24 max-w-7xl mx-auto h-full items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full max-w-4xl mx-auto"
        >

          <h3 className="text-[50px] md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-[0.9] mb-8 text-center">
            <span className="text-zinc-100">Adapt. Integrate. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Thrive.
            </span>
          </h3>

          <p className="text-xl md:text-2xl text-zinc-400 font-light font-['Work_Sans',sans-serif] leading-relaxed text-center mb-8">
            The future doesn't belong to AI alone, nor to the traditional designer. <strong className="text-white font-semibold">It belongs to the hybrid.</strong> The human orchestrator guiding the machine.
          </p>

          {/* QR Code Section - White Background */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4 mb-12"
          >
            <div className="relative p-3 rounded-2xl bg-white shadow-[0_0_40px_rgba(255,255,255,0.1)] group hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-500">
              <img src={qrcodeImg} alt="QR Code" className="w-32 h-32 md:w-36 md:h-36 object-contain" />
              
              {/* Neon Scan line overlay effect */}
              <motion.div 
                initial={{ top: 0 }}
                animate={{ top: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-emerald-400 opacity-50 shadow-[0_0_10px_rgba(16,185,129,0.8)] pointer-events-none"
              />
            </div>
            <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase">Scan to Connect</p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}