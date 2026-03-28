import { motion } from "motion/react";

export function SlideContainer({ children, slideIndex, direction }: { children: React.ReactNode, slideIndex: number, direction: number }) {
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
      };
    }
  };

  return (
    <motion.div
      key={slideIndex}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }}
      className="absolute inset-0 size-full flex items-center justify-center overflow-hidden"
    >
      {children}
    </motion.div>
  );
}