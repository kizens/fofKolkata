import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideContainer } from "./SlideContainer";
import { CustomCursor } from "./CustomCursor";
import { PresentationContext, SlideDef } from "../PresentationContext";

// Import all slides
import { Slide1_Greeting } from "../slides/Slide1_Greeting";
import { Slide2_ProcessWorship } from "../slides/Slide2_ProcessWorship";
import { Slide3_Intro } from "../slides/Slide3_Intro";
import { Slide4_ImpactAIOutsourced } from "../slides/Slide4_ImpactAIOutsourced";
import { Slide5_Section_Context } from "../slides/Slide5_Section_Context";
import { Slide6_Premise } from "../slides/Slide6_Premise";
import { Slide7_Investment } from "../slides/Slide7_Investment";
import { Slide8_DoMoreWithLess } from "../slides/Slide8_DoMoreWithLess";
import { Slide9_Section_Shift } from "../slides/Slide9_Section_Shift";
import { Slide10_EvolutionOfProcess } from "../slides/Slide10_EvolutionOfProcess";
import { Slide11_HyperPersonalization } from "../slides/Slide11_HyperPersonalization";
import { Slide12_VehiclesOfDesign } from "../slides/Slide12_VehiclesOfDesign";
import { Slide13_Section_Integrating } from "../slides/Slide13_Section_Integrating";
import { Slide14_SecondaryResearch } from "../slides/Slide14_SecondaryResearch";
import { Slide15_Synthesis } from "../slides/Slide15_Synthesis";
import { Slide16_SyntheticHumans } from "../slides/Slide16_SyntheticHumans";
import { Slide17_AIForUX } from "../slides/Slide17_AIForUX";
import { Slide18_AIMaterial } from "../slides/Slide18_AIMaterial";
import { Slide19_AgenticEra } from "../slides/Slide19_AgenticEra";
import { Slide20_ComputationalDesign } from "../slides/Slide20_ComputationalDesign";
import { Slide21_Section_VibeCoding } from "../slides/Slide21_Section_VibeCoding";
import { Slide22_VibeCoding1_Intro } from "../slides/Slide22_VibeCoding1_Intro";
import { Slide23_VibeCoding2_Tools } from "../slides/Slide23_VibeCoding2_Tools";
import { Slide24_VibeCoding3_Example } from "../slides/Slide24_VibeCoding3_Example";
import { Slide25_Section_Human } from "../slides/Slide25_Section_Human";
import { Slide26_EthicsAndEmpathy } from "../slides/Slide26_EthicsAndEmpathy";
import { Slide27_IronyOfAI } from "../slides/Slide27_IronyOfAI";
import { Slide28_HumanPrinciples } from "../slides/Slide28_HumanPrinciples";
import { Slide29_RelevancePyramid } from "../slides/Slide29_RelevancePyramid";
import { Slide30_ResearcherQuote } from "../slides/Slide30_ResearcherQuote";
import { Slide31_NotReplacing } from "../slides/Slide31_NotReplacing";

const initialSlides: SlideDef[] = [
  { id: "s1", component: Slide1_Greeting, title: "Welcome" },
  { id: "s2", component: Slide2_ProcessWorship, title: "The Bullshit Moment" },
  { id: "s3", component: Slide3_Intro, title: "Future of Design" },
  { id: "s4", component: Slide4_ImpactAIOutsourced, title: "Impact AI Outsourced" },
  
  { id: "s5", component: Slide5_Section_Context, title: "Foundation & Context", sectionId: "sec1", isSectionDivider: true },
  { id: "s6", component: Slide6_Premise, title: "The Core Premise", sectionId: "sec1" },
  { id: "s7", component: Slide7_Investment, title: "ROI of AI Investment", sectionId: "sec1" },
  { id: "s8", component: Slide8_DoMoreWithLess, title: "Do more with less", sectionId: "sec1" },
  
  { id: "s9", component: Slide9_Section_Shift, title: "The Shift in Execution", sectionId: "sec2", isSectionDivider: true },
  { id: "s10", component: Slide10_EvolutionOfProcess, title: "Evolution of Process", sectionId: "sec2" },
  { id: "s11", component: Slide11_HyperPersonalization, title: "From AI To Agents", sectionId: "sec2" },
  { id: "s12", component: Slide12_VehiclesOfDesign, title: "Vehicles of Design", sectionId: "sec2" },
  
  { id: "s13", component: Slide13_Section_Integrating, title: "AI In Research", sectionId: "sec3", isSectionDivider: true },
  { id: "s14", component: Slide14_SecondaryResearch, title: "Secondary Research", sectionId: "sec3" },
  { id: "s15", component: Slide15_Synthesis, title: "Synthesis", sectionId: "sec3" },
  { id: "s16", component: Slide16_SyntheticHumans, title: "Synthetic Humans", sectionId: "sec3" },
  { id: "s17", component: Slide17_AIForUX, title: "AI for UX Design", sectionId: "sec3" },
  { id: "s18", component: Slide18_AIMaterial, title: "AI as a Material", sectionId: "sec3" },
  { id: "s19", component: Slide19_AgenticEra, title: "The Agentic Era", sectionId: "sec4" },
  { id: "s20", component: Slide20_ComputationalDesign, title: "Computational Design", sectionId: "sec3" },
  
  { id: "s21", component: Slide21_Section_VibeCoding, title: "Vibe Coding", sectionId: "sec6", isSectionDivider: true },
  { id: "s22", component: Slide22_VibeCoding1_Intro, title: "Beyond The Buzzword", sectionId: "sec6" },
  { id: "s23", component: Slide23_VibeCoding2_Tools, title: "The Ecosystem", sectionId: "sec6" },
  { id: "s24", component: Slide24_VibeCoding3_Example, title: "Personal Example", sectionId: "sec6" },
  
  { id: "s25", component: Slide25_Section_Human, title: "The Human Element", sectionId: "sec5", isSectionDivider: true },
  { id: "s26", component: Slide26_EthicsAndEmpathy, title: "Ethics and Empathy", sectionId: "sec3" },
  { id: "s27", component: Slide27_IronyOfAI, title: "The Irony of AI Outsourced", sectionId: "sec5" },
  { id: "s28", component: Slide28_HumanPrinciples, title: "Principles for Being Human", sectionId: "sec5" },
  { id: "s29", component: Slide29_RelevancePyramid, title: "Relevance Pyramid", sectionId: "sec5" },
  { id: "s30", component: Slide30_ResearcherQuote, title: "A Deep Reflective Thought", sectionId: "sec5" },
  { id: "s31", component: Slide31_NotReplacing, title: "Conclusion", sectionId: "sec5" }
];

export function Presentation() {
  const [slides, setSlides] = useState<SlideDef[]>(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide, slides.length]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const deleteCurrentSlide = useCallback(() => {
    if (slides.length <= 1) return; // Don't delete the last slide
    
    setSlides(prev => {
      const newSlides = [...prev];
      newSlides.splice(currentSlide, 1);
      return newSlides;
    });

    if (currentSlide >= slides.length - 1) {
      setCurrentSlide(prev => Math.max(0, prev - 1));
    }
  }, [currentSlide, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if the user is interacting with drag-and-drop or inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  console.log(" slides length:", slides.length, "current index:", currentSlide);
  const CurrentSlideComponent = slides[currentSlide]?.component;
  console.log(" CurrentSlideComponent:", CurrentSlideComponent);
  if (!CurrentSlideComponent) return null;

  return (
    <PresentationContext.Provider value={{ slides, setSlides, goToSlide }}>
      <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans cursor-none group/presentation">
        <CustomCursor />
        
        
        {/* Slide Content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <SlideContainer key={slides[currentSlide].id} slideIndex={currentSlide} direction={direction}>
            <CurrentSlideComponent />
          </SlideContainer>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 w-1/12 z-50 cursor-pointer group flex items-center justify-start pl-4" onClick={prevSlide}>
          {currentSlide > 0 && (
            <div className="p-3 rounded-full bg-black/20 text-white/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 hover:bg-black/40 hover:text-white">
              <ChevronLeft size={32} />
            </div>
          )}
        </div>

        <div className="absolute inset-y-0 right-0 w-1/12 z-50 cursor-pointer group flex items-center justify-end pr-4" onClick={nextSlide}>
          {currentSlide < slides.length - 1 && (
            <div className="p-3 rounded-full bg-black/20 text-white/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 hover:bg-black/40 hover:text-white">
              <ChevronRight size={32} />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-zinc-800 w-full z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide) / (Math.max(1, slides.length - 1))) * 100}%` }}
          />
        </div>

        {/* Slide Counter (Subtle) */}
        <div className="absolute bottom-6 right-8 z-50 text-xs font-mono text-zinc-600 pointer-events-none mix-blend-difference">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </PresentationContext.Provider>
  );
}