import { motion } from "motion/react";
import { Sparkles, LineChart, Users } from "lucide-react";

export function Slide17_ShapingUX() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Predictive & Anticipatory Design",
      desc: "Moving beyond reactive interfaces. AI anticipates user needs, surfacing features and content before the user even clicks, dramatically reducing friction."
    },
    {
      icon: Users,
      title: "Dynamic Personalization",
      desc: "Interfaces that adapt in real-time. No more 'one size fits all.' Layouts, typography, and content shift based on cognitive load and individual user behavior."
    },
    {
      icon: LineChart,
      title: "Accelerated Research",
      desc: "Synthesizing thousands of user interviews in seconds. Simulated heatmaps and synthetic users allow for rapid validation before a single line of code is written."
    }
  ];

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-12 md:p-24 overflow-hidden relative items-center">
      <div className="z-10 flex w-full flex-col lg:flex-row h-full max-w-7xl mx-auto items-center gap-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-[60px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider mb-6 leading-[0.9] w-full max-w-[800px]">
            How AI is Shaping User Experiences
          </h2>
          <div className="text-xl font-light leading-relaxed text-zinc-300 font-['Work_Sans',sans-serif] mb-10">
            <p>
              AI isn't just a tool. It's fundamentally changing the fabric of the digital experiences we create.
            </p>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.2) }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-2 rounded-lg bg-blue-900/20 text-blue-400 border border-blue-500/20">
                  <pillar.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 font-['Work_Sans',sans-serif]">{pillar.title}</h3>
                  <p className="slide-description">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 aspect-[4/3] rounded-[32px] overflow-hidden relative border border-zinc-800 shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZHluYW1pYyUyMHVzZXIlMjBpbnRlcmZhY2UlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ0NjU4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Dynamic UI" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20" />
        </motion.div>
      </div>

    </div>
  );
}