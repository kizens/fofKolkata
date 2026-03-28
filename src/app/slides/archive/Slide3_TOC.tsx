import React, { useState } from "react";
import { motion, AnimatePresence, Reorder } from "motion/react";
import { Layers, Zap, Workflow, Sparkles, UserCheck, ChevronRight, GripVertical } from "lucide-react";
import { usePresentation, SlideDef } from "../PresentationContext";

const SECTIONS_META = [
  {
    id: "sec1",
    num: "I",
    title: "Foundation & Context",
    icon: Layers,
    color: "from-blue-500 to-indigo-600",
    bgImage: "https://images.unsplash.com/photo-1694500069324-d782decdd190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBnZW9tZXRyaWMlMjAzZCUyMHNoYXBlc3xlbnwxfHx8fDE3NzQ0NjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "sec2",
    num: "II",
    title: "The Shift in Execution",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    bgImage: "https://images.unsplash.com/photo-1669479412055-103edfb64cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBncmFkaWVudCUyMG5lb24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzc0NDY4MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "sec3",
    num: "III",
    title: "Integrating AI into UX",
    icon: Workflow,
    color: "from-teal-400 to-emerald-600",
    bgImage: "https://images.unsplash.com/photo-1711560705559-e3845909c44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBzcGFjZSUyMGZ1dHVyZSUyMHN0YXJzfGVufDF8fHx8MTc3NDQ2ODM0MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "sec4",
    num: "IV",
    title: "The Agentic Era",
    icon: Sparkles,
    color: "from-orange-500 to-red-600",
    bgImage: "https://images.unsplash.com/photo-1762278805645-cdcbd21c0e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwZGlnaXRhbCUyMHdhdmV8ZW58MXx8fHwxNzc0NDY4MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "sec5",
    num: "V",
    title: "The Human Element",
    icon: UserCheck,
    color: "from-yellow-400 to-amber-600",
    bgImage: "https://images.unsplash.com/photo-1774016591221-d3e8e7ebdd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBsaWdodCUyMGZsYXJlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzQ0NjgzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
  ,
  {
    id: "sec6",
    num: "VI",
    title: "Vibe Coding",
    icon: Sparkles,
    color: "from-emerald-400 to-teal-600",
    bgImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlfGVufDF8fHx8MTc3NDQ2OTQwOXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];
export function Slide3_TOC() {
  const { slides, setSlides, goToSlide } = usePresentation();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleReorder = (sectionId: string, newOrder: SlideDef[]) => {
    setSlides(prevSlides => {
      const updated = [...prevSlides];
      
      // Find current section slides in original array
      const sectionOriginalSlides = prevSlides.filter(
        s => s.sectionId === sectionId && !s.isSectionDivider
      );
      
      // Get their exact indices
      const indices = sectionOriginalSlides
        .map(s => prevSlides.findIndex(p => p.id === s.id))
        .filter(idx => idx !== -1)
        .sort((a, b) => a - b);
      
      // Replace items at those exact indices with the newly ordered items
      indices.forEach((globalIndex, i) => {
        updated[globalIndex] = newOrder[i];
      });
      
      return updated;
    });
  };

  const jumpToSlide = (slideId: string) => {
    const idx = slides.findIndex(s => s.id === slideId);
    if (idx !== -1) {
      goToSlide(idx);
    }
  };

  return (
    <div className="flex h-screen w-full bg-black text-white p-6 md:p-12 lg:p-24 overflow-hidden relative items-center justify-center perspective-1000">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-30 pointer-events-none">
        {SECTIONS_META.map((sec) => (
          <div 
            key={sec.id}
            className={`absolute inset-0 bg-gradient-to-br ${sec.color} transition-opacity duration-700 ease-in-out ${hoveredSection === sec.id ? 'opacity-20' : 'opacity-0'}`} 
            style={{ filter: "blur(120px)" }}
          />
        ))}
      </div>

      <div className="z-10 flex w-full flex-col h-full max-w-7xl mx-auto mt-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Layers className="w-6 h-6 text-zinc-500" />
            <span className="text-sm font-mono tracking-widest text-zinc-500 uppercase">Interactive Roadmap</span>
          </div>
          <h2 className="text-5xl md:text-[80px] font-['Bebas_Neue',sans-serif] uppercase tracking-wider leading-none pointer-events-auto cursor-default">
            Table of <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">Contents</span>
          </h2>
          <p className="text-zinc-500 mt-2 text-sm font-['Work_Sans',sans-serif]">Click a slide to jump there. Drag to reorder the presentation flow.</p>
        </motion.div>

        <div className="flex-1 w-full flex flex-col md:flex-row gap-4 h-[60vh] pointer-events-auto">
          {SECTIONS_META.map((sec, idx) => {
            const isHovered = hoveredSection === sec.id;
            const sectionSlides = slides.filter(s => s.sectionId === sec.id && !s.isSectionDivider);
            
            return (
              <motion.div
                key={sec.id}
                onMouseEnter={() => setHoveredSection(sec.id)}
                onMouseLeave={() => setHoveredSection(null)}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  layout: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className={`relative flex flex-col rounded-[32px] overflow-hidden border border-white/5 group origin-bottom shadow-2xl transition-all duration-500 ${
                  isHovered ? "flex-[3_3_0%] shadow-[0_0_40px_rgba(0,0,0,0.8)] z-20 -translate-y-4" : "flex-1 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 z-10"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img src={sec.bgImage} alt={sec.title} className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-zinc-950/90 to-transparent transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${sec.color} opacity-10`} />
                </div>

                {/* Number & Icon Badge */}
                <div className="relative z-10 p-6 flex items-center justify-between cursor-pointer" onClick={() => jumpToSlide(sec.id + "_intro")}>
                  <span className={`text-4xl md:text-5xl font-['Bebas_Neue',sans-serif] text-transparent bg-clip-text bg-gradient-to-br ${sec.color}`}>
                    {sec.num}
                  </span>
                  <div className={`p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                    <sec.icon size={20} />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 mt-auto p-6 flex flex-col justify-end pointer-events-auto">
                  <motion.h3 
                    layout="position"
                    onClick={() => jumpToSlide(sec.id + "_intro")}
                    className="text-2xl md:text-3xl font-['Bebas_Neue',sans-serif] uppercase tracking-wide leading-tight mb-2 text-white cursor-pointer hover:text-zinc-300 transition-colors"
                  >
                    {sec.title}
                  </motion.h3>
                  
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="w-8 h-[1px] bg-white/20 my-4" />
                        <Reorder.Group 
                          axis="y" 
                          values={sectionSlides} 
                          onReorder={(newOrder) => handleReorder(sec.id, newOrder)}
                          className="space-y-2 font-['Work_Sans',sans-serif] font-light text-sm w-full"
                        >
                          {sectionSlides.map((slide) => (
                            <Reorder.Item 
                              key={slide.id} 
                              value={slide}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 group/item transition-colors border border-transparent hover:border-white/10 relative z-50 cursor-grab active:cursor-grabbing bg-transparent"
                            >
                              <div 
                                className="flex items-center gap-2 flex-1 min-w-0"
                                onClick={(e) => {
                                  // Don't jump if they are just dragging
                                  e.stopPropagation();
                                  jumpToSlide(slide.id);
                                }}
                              >
                                <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-white shrink-0" />
                                <span className="truncate text-zinc-300 group-hover/item:text-white hover:underline cursor-pointer">{slide.title}</span>
                              </div>
                              <div className="opacity-0 group-hover/item:opacity-100 p-1 cursor-grab active:cursor-grabbing text-zinc-500 hover:text-white transition-opacity shrink-0">
                                <GripVertical className="w-4 h-4" />
                              </div>
                            </Reorder.Item>
                          ))}
                        </Reorder.Group>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}