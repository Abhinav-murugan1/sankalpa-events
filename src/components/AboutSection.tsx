import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-team.jpeg";
import OrnamentalFlourish from "./OrnamentalFlourish";
import ArabesqueCorner from "./ArabesqueCorner";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12">
      <ArabesqueCorner />
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <img src={aboutImg} alt="Sankalpa Events team at work" className="w-full h-[500px] object-cover" loading="lazy" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">About Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
            Every Celebration Begins
            <br />
            <span className="font-normal">With a Promise</span>
          </h2>
          <div className="w-12 h-px bg-secondary mb-8" />
          <p className="text-muted-foreground font-body font-normal leading-relaxed mb-6">
            At Sankalpa Events, we believe every celebration begins with a promise a sankalpa. A promise to create moments that are meaningful, beautiful, and unforgettable.
          </p>
          <p className="text-muted-foreground font-body font-normal leading-relaxed mb-6">
            Rooted in tradition and elevated by elegance, we specialize in curating events that reflect your dreams, values, and emotions. From intimate family functions to grand weddings, corporate events, concerts, housewarming ceremonies, exquisite flower décor, premium catering, workshops, and cultural gatherings, our team brings every detail together with creativity and flawless execution.
          </p>
          <p className="text-muted-foreground font-body font-normal leading-relaxed">
            With a passion for perfection and a commitment to excellence, Sankalpa Events transforms your vision into experiences that leave lasting memories.
          </p>
        </motion.div>
      </div>
      <OrnamentalFlourish className="mt-20" />
    </section>
  );
};

export default AboutSection;
