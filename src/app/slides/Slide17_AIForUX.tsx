import { motion } from "motion/react";
import { Sparkles, Figma, Code, Scissors, Palette } from "lucide-react";

export function Slide17_AIForUX() {
  const tools = [
    {
      name: "Figma AI",
      icon: Figma,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      desc: "Native capabilities accelerating screen building, automating wireframing, and renaming layers.",
      videoId: "vQMeJMgxRQY"
    },
    {
      name: "Stitch",
      icon: Code,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      desc: "An AI-powered tool that bridges design to code effortlessly, streamlining handoff and component creation.",
      videoId: "q39uczIW_MY"
    },
    {
      name: "Adobe Firefly",
      icon: Sparkles,
      color: "text-red-500",
      bg: "bg-red-500/10",
      desc: "Generative AI natively embedded into the Adobe ecosystem for rapid asset, vector, and image generation.",
      videoId: "Fxck1CWjue4"
    },
    {
      name: "Kittl",
      icon: Palette,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      desc: "Empowering designers with rapid AI-driven graphic creation, text effects, and stunning illustration workflows.",
      videoId: "DyDa7QpSf40"
    }
  ];

  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center">
      {/* Background ambient */}
      {/* Dynamic ambient backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-0 -left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />
      </div>

      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-[0.9]">
            AI For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">UX Design</span>
          </h2>
          <div className="slide-description mb-10">
            <p>
              AI has evolved from a simple assistant into a powerful co-designer. Modern tools are now capable of generating structural layouts, high-fidelity screens, and even production-ready code from a single prompt.
            </p>
          </div>
        </motion.div>

        {/* Right Content / Tools Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-4 p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800/40 transition-colors"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${tool.bg}`}>
                <tool.icon className={`w-7 h-7 ${tool.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-white mb-2">
                  {tool.name}
                </h3>
                <p className="slide-description mb-4">
                  {tool.desc}
                </p>
                
                {tool.videoId && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/50 border border-zinc-700/50 relative z-10 mt-2">
                    <iframe
                      src={`https://www.youtube.com/embed/${tool.videoId}?autoplay=1&mute=1&cc_load_policy=0&loop=1&playlist=${tool.videoId}`}
                      title={`${tool.name} Demo`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}