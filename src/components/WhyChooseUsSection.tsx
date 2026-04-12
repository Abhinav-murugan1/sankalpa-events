import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import OrnamentalFlourish from "./OrnamentalFlourish";

const reasons = [
  { number: "01", title: "Tradition with Elegance", desc: "We beautifully blend cultural values with modern sophistication." },
  { number: "02", title: "Personalized Event Experiences", desc: "Every event is thoughtfully designed to reflect your story, style, and purpose." },
  { number: "03", title: "End-to-End Management", desc: "From planning to execution, we take care of every detail." },
  { number: "04", title: "Creative & Meaningful Concepts", desc: "We don't just organize events — we create experiences with emotion and identity." },
  { number: "05", title: "Professional Execution", desc: "Our team ensures smooth coordination, timely delivery, and stress-free celebrations." },
  { number: "06", title: "Memories That Last", desc: "Every event we create is designed to leave a lasting impression in the hearts of you and your guests." },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-32 bg-teal-deepest text-primary-foreground">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-teal-light/70 mb-4 font-body font-medium">Why Choose Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium">
            The Sankalpa <span className="font-normal">Difference</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {reasons.map((r, i) => (
            <motion.div key={r.number} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }} className="flex gap-6">
              <span className="font-heading text-5xl font-normal text-teal-soft/40 shrink-0">{r.number}</span>
              <div>
                <h3 className="font-heading text-xl font-bold mb-3">{r.title}</h3>
                <p className="text-teal-light/70 font-body font-normal text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <OrnamentalFlourish className="mt-20 [&_svg]:text-teal-light/15" />
    </section>
  );
};

export default WhyChooseUsSection;
