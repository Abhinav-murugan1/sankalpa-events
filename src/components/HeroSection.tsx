import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroWedding from "@/assets/service-concert.png";
import heroReception from "@/assets/service-engagement.jpeg";
import heroCelebration from "@/assets/service-housewarming-new.jpg";
import hero4 from "@/assets/service-cultural.jpg";
import hero5 from "@/assets/service-floral.jpg";
import hero6 from "@/assets/service-corporate.jpg";
import hero7 from "@/assets/service-workshop.jpg";
import hero8 from "@/assets/service-conference.jpg";

const bgImages = [heroWedding, heroReception, heroCelebration, hero4, hero5, hero6, hero7, hero8];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Layer all images, fade the active one in — no blank gap */}
        {bgImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Elegant traditional celebration"
            animate={{
              opacity: i === currentBg ? 1 : 0,
              scale: i === currentBg ? 1 : 1.08,
            }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full object-cover absolute inset-0"
          />
        ))}
        <div className="absolute inset-0 bg-teal-deepest/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm tracking-[0.3em] uppercase text-white/80 font-body font-light mb-6"
        >
          Tradition Meets Elegance
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight tracking-tight"
        >
          Where Traditions Blossom
          <br />
          <span className="font-normal">Into Timeless Celebrations</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-white/90 font-body font-bold text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide"
          style={{ fontStyle: "normal" }}
        >
          Inspired by culture, guided by values — Making every celebration meaningful and memorable
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-10 py-4 bg-white text-teal-deepest text-sm tracking-[0.2em] uppercase font-body font-medium hover:bg-white/90 transition-all duration-500"
          >
            Plan Your Event
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-10 py-4 border border-white/60 text-white text-sm tracking-[0.2em] uppercase font-body font-normal hover:bg-white/10 transition-all duration-500"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/30 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
