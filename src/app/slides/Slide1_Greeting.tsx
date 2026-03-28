import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { MousePointer2, Bird } from "lucide-react";

const greetings = [
  "नमस्कार",       // Hindi, Marathi, Nepali, Konkani
  "నమస్కారం",      // Telugu
  "வணக்கம்",       // Tamil
  "নমস্কার",        // Bengali
  "ନମସ୍କାର",        // Odia
  "খুরুমজরী",       // Manipuri (Meitei)
  "ನಮಸ್ಕಾರ",        // Kannada
  "നമസ്കാരം",       // Malayalam
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",   // Punjabi
  "آداب",          // Urdu/Kashmiri
  "નમસ્તે",         // Gujarati
];

export function Slide1_Greeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="z-10 flex w-full flex-col px-12 md:px-24 max-w-7xl mx-auto h-full items-center justify-center relative">
        






        {/* Rotating Greeting Center */}
        <div className="relative h-[200px] w-full max-w-4xl text-center z-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center text-7xl font-bold tracking-tight text-white md:text-9xl font-['Bebas_Neue',sans-serif]"
            >
              {greetings[index]}
              <span className="text-[#DB4437]">.</span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Yellow Sticker "UX MEETUP" - Static & Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          whileHover={{ rotate: 1, scale: 1.05 }}
          className="mt-8 px-12 py-4 bg-[#FFEB3B] rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] relative cursor-pointer z-20"
        >
          <h3 className="text-4xl md:text-6xl font-['Bebas_Neue',sans-serif] font-bold tracking-wider text-black uppercase">
            UX MEETUP
          </h3>

          {/* Pointer Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-[-30px] left-[-20px] text-white drop-shadow-lg"
          >
            <MousePointer2 size={42} className="fill-white text-black" />
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
}