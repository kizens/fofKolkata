import React, { createContext, useContext, useState } from "react";

export type SlideDef = {
  id: string;
  component: React.FC<any>;
  title: string;
  sectionId?: string;
  isSectionDivider?: boolean;
};

export type PresentationContextType = {
  slides: SlideDef[];
  setSlides: React.Dispatch<React.SetStateAction<SlideDef[]>>;
  goToSlide: (index: number) => void;
};

export const PresentationContext = createContext<PresentationContextType | null>(null);

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error("usePresentation must be used within a PresentationProvider");
  }
  return context;
};
