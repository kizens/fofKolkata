import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { MousePointer2, Bird } from "lucide-react";

interface FloatingCursorProps {
  label: string;
  color: string;
  className: string;
  isHovered: boolean;
  delay?: number;
}

function FloatingCursor({ label, color, className, isHovered, delay = 0 }: FloatingCursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const angleRef = useRef(Math.random() * Math.PI * 2);
  const stopTicksRef = useRef(0);

  useEffect(() => {
    let animationFrameId;
    
    const timeout = setTimeout(() => {
      const loop = () => {
        const rangeX = isHovered ? 800 : 300;
        const rangeY = isHovered ? 500 : 200;
        const maxSpeed = isHovered ? 2.5 : 1.2;
        const wanderForce = 0.2;
        const returnForce = 0.05;

        if (stopTicksRef.current > 0) {
          stopTicksRef.current--;
          animationFrameId = requestAnimationFrame(loop);
          return;
        }

        if (Math.random() < 0.005) {
          stopTicksRef.current = Math.floor(Math.random() * 60 + 30);
        }

        // Wander
        angleRef.current += (Math.random() - 0.5) * 0.4;
        const fx = Math.cos(angleRef.current) * wanderForce;
        const fy = Math.sin(angleRef.current) * wanderForce;

        velRef.current.x += fx;
        velRef.current.y += fy;

        // Limit speed
        const speed = Math.sqrt(velRef.current.x * velRef.current.x + velRef.current.y * velRef.current.y);
        if (speed > maxSpeed) {
          velRef.current.x = (velRef.current.x / speed) * maxSpeed;
          velRef.current.y = (velRef.current.y / speed) * maxSpeed;
        }

        // Return to center
        if (Math.abs(posRef.current.x) > rangeX) {
          velRef.current.x -= Math.sign(posRef.current.x) * returnForce;
        }
        if (Math.abs(posRef.current.y) > rangeY) {
          velRef.current.y -= Math.sign(posRef.current.y) * returnForce;
        }

        // Update position
        posRef.current.x += velRef.current.x;
        posRef.current.y += velRef.current.y;

        setPos({ x: posRef.current.x, y: posRef.current.y });

        animationFrameId = requestAnimationFrame(loop);
      };

      animationFrameId = requestAnimationFrame(loop);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, delay]);

  return (
    <motion.div
      className={className}
      style={{ x: pos.x, y: pos.y }}
    >
      <MousePointer2 size={24} style={{ fill: color, color: "black" }} />
      <div 
        className="px-3 py-1 text-white text-sm font-bold rounded-lg shadow-lg"
        style={{ backgroundColor: color }}
      >
        {label}
      </div>
    </motion.div>
  );
}

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
          className="mt-8 relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center cursor-pointer p-32"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Inner container for positioning cursors relative to text */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Main Title "FoF Kolkata" */}
            <h2 className="text-5xl md:text-7xl font-['Bebas_Neue',sans-serif] font-bold tracking-wider text-white uppercase text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              FoF Kolkata
            </h2>

            {/* Labeled Cursors */}
            
            {/* Cursor 1: Pink "Auto Layout" */}
            <FloatingCursor 
              label="Auto Layout"
              color="#E91E63"
              className="absolute top-0 left-10 flex items-center gap-1"
              isHovered={isHovered}
            />

            {/* Cursor 2: Blue "Figma Wizard" */}
            <FloatingCursor 
              label="Figma Wizard"
              color="#2196F3"
              className="absolute top-[-20px] right-20 flex items-center gap-1"
              isHovered={isHovered}
              delay={0.3}
            />

            {/* Cursor 3: Green "Vibe Coder" */}
            <FloatingCursor 
              label="Vibe Coder"
              color="#4CAF50"
              className="absolute bottom-0 left-20 flex items-center gap-1"
              isHovered={isHovered}
              delay={0.6}
            />

            {/* Cursor 4: Orange "City of Joy" */}
            <FloatingCursor 
              label="City of Joy"
              color="#FF9800"
              className="absolute bottom-[-20px] right-10 flex items-center gap-1"
              isHovered={isHovered}
              delay={0.9}
            />

            {/* Cursor 5: Purple "Pixel Perfect" */}
            <FloatingCursor 
              label="Pixel Perfect"
              color="#9C27B0"
              className="absolute top-1/2 left-[-40px] flex items-center gap-1"
              isHovered={isHovered}
              delay={1.2}
            />
            
          </div>
        </div>


      </div>
    </div>
  );
}