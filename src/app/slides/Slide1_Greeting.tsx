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
  const [isHovered, setIsHovered] = useState(false);

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

        {/* "FoF Kolkata" - Cursors Inspired Layout */}
        <div 
          className="mt-8 relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Main Title "FoF Kolkata" */}
          <h2 className="text-5xl md:text-7xl font-['Bebas_Neue',sans-serif] font-bold tracking-wider text-white uppercase text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            FoF Kolkata
          </h2>

          {/* Labeled Cursors */}
          
          {/* Cursor 1: Pink "Auto Layout" */}
          <motion.div
            className="absolute top-0 left-10 flex items-center gap-1"
            variants={{
              idle: { 
                x: ["-5vw", "5vw", 0], 
                y: ["-2vh", "2vh", 0],
                transition: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              },
              hovered: { 
                x: ["-20vw", "30vw", "-10vw", "15vw", 0], 
                y: ["-15vh", "20vh", "5vh", "-10vh", 0],
                transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              }
            }}
            animate={isHovered ? "hovered" : "idle"}
          >
            <MousePointer2 size={24} className="fill-[#E91E63] text-black" />
            <div className="px-3 py-1 bg-[#E91E63] text-white text-sm font-bold rounded-lg shadow-lg">
              Auto Layout
            </div>
          </motion.div>

          {/* Cursor 2: Blue "Figma Wizard" */}
          <motion.div
            className="absolute top-[-20px] right-20 flex items-center gap-1"
            variants={{
              idle: { 
                x: ["10vw", "-10vw", 0], 
                y: ["5vh", "-5vh", 0],
                transition: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.3 }
              },
              hovered: { 
                x: ["30vw", "-30vw", "10vw", "-15vw", 0], 
                y: ["20vh", "-20vh", "-5vh", "10vh", 0],
                transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.3 }
              }
            }}
            animate={isHovered ? "hovered" : "idle"}
          >
            <MousePointer2 size={24} className="fill-[#2196F3] text-black" />
            <div className="px-3 py-1 bg-[#2196F3] text-white text-sm font-bold rounded-lg shadow-lg">
              Figma Wizard
            </div>
          </motion.div>

          {/* Cursor 3: Green "Vibe Coder" */}
          <motion.div
            className="absolute bottom-0 left-20 flex items-center gap-1"
            variants={{
              idle: { 
                x: ["-5vw", "5vw", 0], 
                y: ["-2vh", "2vh", 0],
                transition: { duration: 14, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.6 }
              },
              hovered: { 
                x: ["-30vw", "15vw", "15vw", "-15vw", 0], 
                y: ["15vh", "-15vh", "-15vh", "20vh", 0],
                transition: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.6 }
              }
            }}
            animate={isHovered ? "hovered" : "idle"}
          >
            <MousePointer2 size={24} className="fill-[#4CAF50] text-black" />
            <div className="px-3 py-1 bg-[#4CAF50] text-white text-sm font-bold rounded-lg shadow-lg">
              Vibe Coder
            </div>
          </motion.div>

          {/* Cursor 4: Orange "City of Joy" */}
          <motion.div
            className="absolute bottom-[-20px] right-10 flex items-center gap-1"
            variants={{
              idle: { 
                x: ["5vw", "-5vw", 0], 
                y: ["-2vh", "2vh", 0],
                transition: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.9 }
              },
              hovered: { 
                x: ["15vw", "-25vw", "0vw", "-10vw", 0], 
                y: ["-20vh", "15vh", "0vh", "-10vh", 0],
                transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.9 }
              }
            }}
            animate={isHovered ? "hovered" : "idle"}
          >
            <MousePointer2 size={24} className="fill-[#FF9800] text-black" />
            <div className="px-3 py-1 bg-[#FF9800] text-white text-sm font-bold rounded-lg shadow-lg">
              City of Joy
            </div>
          </motion.div>

          {/* Cursor 5: Purple "Pixel Perfect" */}
          <motion.div
            className="absolute top-1/2 left-[-40px] flex items-center gap-1"
            variants={{
              idle: { 
                x: ["-5vw", "5vw", 0], 
                y: ["2vh", "-2vh", 0],
                transition: { duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.2 }
              },
              hovered: { 
                x: ["-15vw", "30vw", "-20vw", "10vw", 0], 
                y: ["5vh", "-20vh", "15vh", "-5vh", 0],
                transition: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.2 }
              }
            }}
            animate={isHovered ? "hovered" : "idle"}
          >
            <MousePointer2 size={24} className="fill-[#9C27B0] text-black" />
            <div className="px-3 py-1 bg-[#9C27B0] text-white text-sm font-bold rounded-lg shadow-lg">
              Pixel Perfect
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
}