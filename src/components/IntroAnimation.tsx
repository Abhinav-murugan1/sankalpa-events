import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/logo2.png";

interface IntroAnimationProps {
  show: boolean;
  onComplete: () => void;
  onFullyExited: () => void;
}

const IntroAnimation = ({ show, onComplete, onFullyExited }: IntroAnimationProps) => {
  return (
    <AnimatePresence onExitComplete={onFullyExited}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-teal-deepest"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ willChange: "opacity" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            // 1. ADDED A 0.15s DELAY HERE:
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }} 
            onAnimationComplete={() => {
              setTimeout(() => onComplete(), 1200);
            }}
            className="flex flex-col items-center gap-6"
            style={{ willChange: "opacity, transform" }}
          >
            <motion.img
              src={logo}
              alt="Sankalpa Events"
              className="w-14 h-auto md:w-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // Adjusted delay to stack on top of the parent's delay
              transition={{ duration: 0.6, delay: 0.3 }} 
              style={{ willChange: "opacity, transform" }}
              // 2. FORCE IMMEDIATE DECODING & HIGH PRIORITY:
              fetchPriority="high" 
              decoding="sync"
            />
            <motion.img
              src={logo2}
              alt="Sankalpa Events"
              className="w-32 md:w-48 h-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              // Adjusted delay
              transition={{ duration: 0.6, delay: 0.6 }} 
              style={{ willChange: "opacity, transform" }}
              // 2. FORCE IMMEDIATE DECODING & HIGH PRIORITY:
              fetchPriority="high" 
              decoding="sync"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // Adjusted delay
              transition={{ duration: 0.6, delay: 0.9 }} 
              className="text-white/60 text-xs tracking-[0.3em] uppercase font-body"
              style={{ willChange: "opacity" }}
            >
              Tradition Meets Elegance
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
