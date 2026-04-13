import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import storyImg from "@/assets/story-tradition.jpg";
import OrnamentalFlourish from "./OrnamentalFlourish";

const StorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-32 bg-muted/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
            A Sacred <span className="font-normal">Intention</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src={storyImg} alt="Traditional pooja ceremony" className="w-full h-[400px] object-cover" loading="lazy" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-6">
            <p className="text-muted-foreground font-body font-normal leading-relaxed">
              The word <span className="text-foreground font-bold">"Sankalpa"</span> means a sacred intention, a heartfelt commitment, and a vision brought to life.
            </p>
            <p className="text-muted-foreground font-body font-normal leading-relaxed">
              At Sankalpa Events, that is exactly what we stand for turning your cherished moments into beautifully planned celebrations filled with joy, grace, and unforgettable memories.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="font-heading text-xl text-foreground font-bold">
                "Crafting Events with Heart, Heritage & Harmony"
              </p>
              <p className="text-muted-foreground font-body text-sm font-normal mt-3 leading-relaxed">
                Every celebration is more than an occasion it is an emotion, a memory, and a meaningful milestone. We bring together creativity, culture, and flawless coordination to make every event truly extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <OrnamentalFlourish className="mt-20" />
    </section>
  );
};

export default StorySection;
