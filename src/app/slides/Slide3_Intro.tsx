import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Briefcase } from "lucide-react";
import svgPaths from "../../imports/svg-1q4wh5jizo";
import imgIncture011 from "../../assets/7b3983c6c9a79ee78987777f66bfbc2aafa5d88a.png";
import imgOnnBikesLogo1 from "../../assets/88aba1dcb7daad75468fa0f2f68274d907c9736d.png";
import imgNewImage2 from "../../assets/3e1b000194bfbda388973d52d5f7090b090c6b03.png";
import imgKiitBeach from "../../assets/beach_kiit.png"; // Newly attached beach photo

export function Slide3_Intro() {
  const [step, setStep] = useState(-1); // -1: Profile, 0: College, 1: Incture, 2: ONN Bikes, 3: Amazon, 4: Microsoft, 5: Google
  const maxSteps = 5;

  const milestones = [
    {
      title: "BTech in Computer Science",
      company: "KIIT University",
      date: "2012 - 2016",
      description: null,
      img: imgKiitBeach,
      video: null,
      color: "border-blue-500/50 hover:border-blue-500",
      accent: "bg-blue-500"
    },
    {
      title: "Software Developer",
      company: "Incture",
      date: "2016",
      description: null,
      img: imgIncture011,
      video: "https://www.youtube.com/embed/D0Qi3ZHreGo?autoplay=1&mute=1&cc_load_policy=0&loop=1&playlist=D0Qi3ZHreGo",
      color: "border-purple-500/50 hover:border-purple-500",
      accent: "bg-purple-500"
    },
    {
      title: "UI/UX Designer",
      company: "ONN Bikes",
      date: "2017 - 2018",
      description: null,
      img: imgOnnBikesLogo1,
      video: "https://www.youtube.com/embed/XhtX_RZlsOI?autoplay=1&mute=1&cc_load_policy=0&loop=1&playlist=XhtX_RZlsOI",
      color: "border-pink-500/50 hover:border-pink-500",
      accent: "bg-pink-500"
    },
    {
      title: "Visual Designer (UXD)",
      company: "Amazon",
      date: "2018 - 2022",
      description: null,
      img: null,
      video: "https://www.youtube.com/embed/00FZsgBTDZA?autoplay=1&mute=1&cc_load_policy=0&loop=1&playlist=00FZsgBTDZA",
      color: "border-orange-500/50 hover:border-orange-500",
      accent: "bg-orange-500"
    },
    {
      title: "Product Designer II",
      company: "Microsoft",
      date: "2022 - 2025",
      description: null,
      img: null,
      video: "https://www.youtube.com/embed/wcVC8w6eJcA?autoplay=1&mute=1&cc_load_policy=0&loop=1&playlist=wcVC8w6eJcA",
      color: "border-cyan-500/50 hover:border-cyan-500",
      accent: "bg-cyan-500"
    },
    {
      title: "UX Designer III",
      company: "Google",
      date: "2025 - Present",
      description: null,
      img: imgNewImage2,
      video: "https://www.youtube.com/embed/Lb4jpHoZTjs?autoplay=1&mute=1&cc_load_policy=0&loop=1&playlist=Lb4jpHoZTjs",
      color: "border-emerald-500/50 hover:border-emerald-500",
      accent: "bg-emerald-500"
    }
  ];

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, maxSteps));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, -1));
  };

  // Listen for navigation keys inside this component
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (step < maxSteps) {
          e.stopPropagation();
          handleNext();
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (step > -1) {
          e.stopPropagation();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [step]);

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white p-6 md:p-12 overflow-hidden relative items-center justify-center font-['Work_Sans',sans-serif]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/10 via-black to-black pointer-events-none" />

      {/* Main Container */}
      <div className="z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-center relative gap-8">
        
        <AnimatePresence mode="wait">
          {step === -1 ? (
            /* ORIGINAL FULL-PAGE UI (Reverted & Enhanced) */
            <motion.div
              key="original-profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 items-center relative"
            >
              {/* Pulsing Background Auto-Glow Effects */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
              </div>

              {/* Left Column: Typography & Intro */}
              <div className="lg:col-span-7 flex flex-col justify-center py-4 pl-2 md:pl-8">
                {/* Location Pill */}
                <motion.div 
                   initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   className="mb-8 cursor-pointer group w-max"
                >
                  <div className="px-4 py-2 rounded-full border border-emerald-900/50 bg-zinc-900/80 flex items-center gap-2 text-xs md:text-sm text-zinc-300 font-mono shadow-sm shadow-emerald-900/20 group-hover:border-emerald-500/50 group-hover:bg-zinc-800/80 transition-all">
                    <MapPin size={14} className="text-emerald-400 group-hover:animate-bounce" />
                    Hyderabad, India
                  </div>
                </motion.div>

                {/* Greeting */}
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                  className="text-xl md:text-2xl text-zinc-400 mb-2 font-light"
                >
                  Hello 👋 I am
                </motion.p>
                
                {/* Animated Typing Name */}
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 1.2 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="text-[70px] md:text-[90px] xl:text-[120px] leading-[0.85] tracking-wide uppercase mb-8 font-['Bebas_Neue',sans-serif]"
                >
                   <div className="block cursor-default">
                     {"Sujit".split("").map((char, i) => (
                       <motion.span 
                         key={`first-${i}`} 
                         variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                         whileHover={{ y: -8, color: "#10b981", transition: { duration: 0.1 } }}
                         className="inline-block transition-colors"
                       >{char}</motion.span>
                     ))}
                   </div>
                   <div className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 cursor-default">
                     {"Pradhan".split("").map((char, i) => (
                       <motion.span 
                         key={`last-${i}`} 
                         variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                         whileHover={{ y: -8, textShadow: "0px 0px 15px rgba(255,255,255,0.8)", transition: { duration: 0.1 } }}
                         className="inline-block"
                       >{char}</motion.span>
                     ))}
                   </div>
                </motion.h1>

                {/* Fading in the rest of the details */}
                <motion.div 
                   initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                   animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                   transition={{ duration: 0.8, delay: 2.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl md:text-2xl font-medium text-white mb-0 mt-0 pt-0 flex items-center h-6">
                      UX Designer at
                    </h2>
                    <div className="h-6 w-20 relative flex-shrink-0 flex items-center translate-y-[2px]">
                       <svg className="block h-full w-full object-contain" viewBox="0 0 142.72 46.8649" fill="none">
                         <path d={svgPaths?.pa5dcc80} fill="#DB4437" />
                         <path d={svgPaths?.p2a655600} fill="#F4B400" />
                         <path d={svgPaths?.p3d738480} fill="#DB4437" />
                         <path d={svgPaths?.p25454080} fill="#4285F4" />
                         <path d={svgPaths?.p35ad8a80} fill="#4285F4" />
                         <path d={svgPaths?.p3ebd9cc0} fill="#0F9D58" />
                       </svg>
                    </div>
                  </div>

                  <p className="text-zinc-400 max-w-sm text-sm md:text-base leading-relaxed font-light">
                    Designing every touchpoint of the People Operations (POps) experiences at Google.
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Portrait & Floating Interactive Hobbies */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="lg:col-span-5 h-[500px] rounded-[32px] overflow-hidden border border-zinc-800 relative group hidden md:block cursor-pointer z-0"
                whileHover={{ rotateY: 5, rotateX: -5 }}
              >
                <motion.img 
                  src={imgNewImage2} 
                  alt="Sujit Portrait" 
                  initial={{ filter: "grayscale(100%)", opacity: 0.8 }}
                  animate={{ filter: "grayscale(0%)", opacity: 1 }}
                  transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full object-cover object-center rounded-[32px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none" />
                <div className="absolute bottom-6 left-6 pointer-events-none z-10">
                  <p className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide text-white">Creator</p>
                  <p className="text-zinc-400 text-xs font-mono mt-1">Design & Strategy</p>
                </div>

                {/* Floating Hobbies with Parallax interaction ability if needed */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Travel */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(0,0,0,0.8)" }}
                    className="absolute top-12 left-8 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-zinc-800 flex items-center gap-2 text-sm text-zinc-300 cursor-pointer pointer-events-auto shadow-lg"
                  >
                    <span>✈️</span> Travel
                  </motion.div>

                  {/* Lego */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -3, backgroundColor: "rgba(0,0,0,0.8)" }}
                    className="absolute top-1/4 right-8 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-zinc-800 flex items-center gap-2 text-sm text-zinc-300 cursor-pointer pointer-events-auto shadow-lg"
                  >
                    <span>🧱</span> Lego
                  </motion.div>

                  {/* Shoes */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 4, backgroundColor: "rgba(0,0,0,0.8)" }}
                    className="absolute bottom-32 right-12 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-zinc-800 flex items-center gap-2 text-sm text-zinc-300 cursor-pointer pointer-events-auto shadow-lg"
                  >
                    <span>👟</span> Sneakers
                  </motion.div>

                  {/* Tech Person */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5, backgroundColor: "rgba(0,0,0,0.8)" }}
                    className="absolute top-1/3 left-12 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-zinc-800 flex items-center gap-2 text-sm text-zinc-300 cursor-pointer pointer-events-auto shadow-lg"
                  >
                    <span>💻</span> Tech Geek
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* CAREER STEPS - TIGHT UNBLOCKED PREVIEW (No descriptions, No logos) */
            <motion.div
              key="career-steps"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-[75vh]"
            >
              {/* Left Panel: Scaled Box for Video/Images */}
              <motion.div 
                layout
                className="lg:col-span-7 h-[550px] flex items-center justify-center relative"
              >
                <div className={`w-[600px] h-[500px] border-4 ${milestones[step].color} bg-zinc-900/50 backdrop-blur-md rounded-2xl relative shadow-[20px_20px_0px_0px_rgba(255,255,255,0.02)] transition-all flex flex-col items-center justify-center overflow-hidden`}>
                  {milestones[step].video ? (
                    <iframe 
                      src={milestones[step].video} 
                      title={milestones[step].company} 
                      className="absolute inset-0 w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : milestones[step].img ? (
                    <img 
                      src={milestones[step].img} 
                      alt={milestones[step].company} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Briefcase size={100} className="text-zinc-700 mb-6" />
                  )}
                </div>
              </motion.div>

              {/* Right Panel: Sleek Typography without bloat */}
              <motion.div 
                layout
                className="lg:col-span-5 flex flex-col justify-center h-[550px]"
              >
                <div className="flex flex-col h-full justify-center relative p-8 border-l border-zinc-800">
                  <span className={`self-start px-3 py-1 rounded-full text-xs font-mono tracking-wider ${milestones[step].accent} text-white mb-4`}>
                    {milestones[step].date}
                  </span>
                  
                  {/* Swapped Title Position Shifted Text */}
                  <h2 className="text-[60px] font-['Bebas_Neue',sans-serif] text-white tracking-widest leading-none mb-2 uppercase">
                    {milestones[step].company}
                  </h2>
                  <h3 className="text-2xl font-light text-zinc-400 mb-6 font-['Work_Sans',sans-serif]">
                    <span className="font-semibold">{milestones[step].title}</span>
                  </h3>

                  {/* Horizontal visual progress dots inside that step pane */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Briefcase size={16} className="text-zinc-600" />
                    <div className="flex gap-2">
                      {milestones.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === step ? 'bg-white w-6' : idx < step ? 'bg-zinc-500' : 'bg-zinc-800'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Progress Indicator (Bottom) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md z-50">
          <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Profile Step {step + 2} of 7</span>
          <div className="flex gap-1">
            {[...Array(7)].map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 w-1.5 rounded-full transition-all ${idx === (step + 1) ? 'bg-white w-3' : 'bg-zinc-700'}`} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}