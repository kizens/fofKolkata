import { motion } from "motion/react";

export function Slide6_InsightCurator() {
  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-black to-black pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-6xl px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-[80px] md:text-[130px] font-['Bebas_Neue',sans-serif] leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff3f02] to-[#fdc103]">
            Insight Curator
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl"
        >
          <p className="text-2xl md:text-[32px] font-light text-white leading-[1.6] font-['Work_Sans',sans-serif]">
            Organizes raw data into meaningful patterns. <br className="hidden md:block" />
            It filters the noise, highlights what matters, and brings hidden insights to the surface.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 text-zinc-600 text-sm font-['Work_Sans',sans-serif] text-right">
        Content present is not on behalf of Google or Alphabet
      </div>
    </div>
  );
}