import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface IntroAnimationProps {
  show: boolean;
  onComplete: () => void;
}

const IntroAnimation = ({ show, onComplete }: IntroAnimationProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-teal-deepest"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
              setTimeout(() => onComplete(), 1200);
            }}
            className="flex flex-col items-center gap-6"
          >
            <motion.img
              src={logo}
              alt="Sankalpa Events"
              className="w-28 h-28 md:w-36 md:h-36"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-heading text-2xl md:text-3xl text-white tracking-wide"
            >
              Sankalpa Events
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/60 text-xs tracking-[0.3em] uppercase font-body"
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
