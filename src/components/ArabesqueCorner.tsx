import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ArabesqueCorner = ({ className = "" }: { className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Top-left */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 w-28 h-28 md:w-36 md:h-36 text-foreground/[0.04]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M0 0C0 0 30 5 50 25C70 45 60 70 40 60C20 50 10 30 0 0Z" fill="currentColor" />
        <path d="M0 0C0 0 5 30 25 50C45 70 70 60 60 40C50 20 30 10 0 0Z" fill="currentColor" />
        <path d="M0 0C15 15 20 40 15 55C10 70 0 60 5 45C10 30 0 0 0 0Z" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="35" cy="35" r="2" fill="currentColor" opacity="0.4" />
      </motion.svg>

      {/* Top-right */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-0 right-0 w-28 h-28 md:w-36 md:h-36 text-foreground/[0.04] scale-x-[-1]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M0 0C0 0 30 5 50 25C70 45 60 70 40 60C20 50 10 30 0 0Z" fill="currentColor" />
        <path d="M0 0C0 0 5 30 25 50C45 70 70 60 60 40C50 20 30 10 0 0Z" fill="currentColor" />
        <path d="M0 0C15 15 20 40 15 55C10 70 0 60 5 45C10 30 0 0 0 0Z" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="35" cy="35" r="2" fill="currentColor" opacity="0.4" />
      </motion.svg>

      {/* Bottom-left */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 text-foreground/[0.04] scale-y-[-1]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M0 0C0 0 30 5 50 25C70 45 60 70 40 60C20 50 10 30 0 0Z" fill="currentColor" />
        <path d="M0 0C0 0 5 30 25 50C45 70 70 60 60 40C50 20 30 10 0 0Z" fill="currentColor" />
        <path d="M0 0C15 15 20 40 15 55C10 70 0 60 5 45C10 30 0 0 0 0Z" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.5" />
      </motion.svg>

      {/* Bottom-right */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36 text-foreground/[0.04] scale-[-1]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M0 0C0 0 30 5 50 25C70 45 60 70 40 60C20 50 10 30 0 0Z" fill="currentColor" />
        <path d="M0 0C0 0 5 30 25 50C45 70 70 60 60 40C50 20 30 10 0 0Z" fill="currentColor" />
        <path d="M0 0C15 15 20 40 15 55C10 70 0 60 5 45C10 30 0 0 0 0Z" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.5" />
      </motion.svg>
    </div>
  );
};

export default ArabesqueCorner;
