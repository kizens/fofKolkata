import { motion } from "motion/react";
import { Users, Microscope, ScanFace } from "lucide-react";

export function Slide16_SyntheticHumans() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black pointer-events-none" />

      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[70px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-8 leading-[0.9]">
            Synthetic <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Humans</span>
          </h2>
          <div className="slide-description space-y-6">
            <p>
              Imagine conducting qualitative research at scale, instantly. We are seeing the rise of AI entities programmed with <strong className="font-bold text-white">deep psychographics and long-term memory</strong>.
            </p>
            <p>
              These "digital twins" allow designers to simulate interviews, test concepts in real-time, and get behavioral reactions that closely match real human studies, compressing weeks of research into minutes.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Image Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 flex relative justify-center"
        >
          <div className="w-full aspect-[4/3] rounded-[40px] overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(99,102,241,0.15)] relative group">
            <iframe
              src="https://www.youtube.com/embed/s3v3RNL9oVA?autoplay=1&mute=1&controls=0&loop=1&playlist=s3v3RNL9oVA&modestbranding=1&rel=0&cc_load_policy=0"
              title="Synthetic Humans Background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-black/60" />
            
            {/* UI Overlays */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4"
            >
              <Users className="w-6 h-6 text-indigo-300" />
              <div>
                 <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Persona Active</p>
                 <p className="text-sm font-medium text-white">Gen-Z / Urban / Tech-Savvy</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 right-8 bg-indigo-900/50 backdrop-blur-xl border border-indigo-500/30 p-4 rounded-2xl flex items-start gap-4 max-w-[280px]"
            >
              <Microscope className="w-6 h-6 text-indigo-200 flex-shrink-0" />
              <p className="text-sm text-indigo-100 leading-relaxed font-['Work_Sans',sans-serif]">
                "I wouldn't use this feature. It feels too intrusive and requires too many steps to complete."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}