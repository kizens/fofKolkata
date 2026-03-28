import { motion } from "motion/react";
import { HeartPulse } from "lucide-react";

export function Slide26_EthicsAndEmpathy() {
  return (
    <div className="flex h-screen w-full bg-black text-white p-12 md:p-24 overflow-hidden relative items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1680730591022-3bfb2bdcaf0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGV5ZSUyMGZ1dHVyaXN0aWMlMjBhaXxlbnwxfHx8fDE3NzQ0NjE5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Human eye" 
            className="w-full h-full object-cover mix-blend-luminosity opacity-30 scale-105"
          />
         </motion.div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
      </div>

      <div className="z-10 flex w-full flex-col h-full max-w-6xl mx-auto items-center justify-center text-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full max-w-4xl"
        >
           <HeartPulse className="w-16 h-16 text-rose-500 mx-auto mb-8" />
           
           <h3 className="text-4xl md:text-[60px] font-['Bebas_Neue',sans-serif] text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 leading-[1.1] mb-8">
             Our job is to ensure that the AI learns from the <span className="text-rose-500">best of our humanity</span>, not the worst.
           </h3>
           
           <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10" />

            <p className="slide-description max-w-4xl mx-auto">
              AI is not here to replace us, but to augment us. Algorithms lack lived experience. Use AI to automate the commodity, and take back your time to focus on what is uniquely human: Strategy, Empathy, and Meaningful Experience. The designer's true value lies in maintaining empathy and ensuring technology serves people compassionately.
            </p>
        </motion.div>
      </div>
    </div>
  );
}