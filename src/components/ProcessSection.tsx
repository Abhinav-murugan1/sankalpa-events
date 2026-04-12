import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import OrnamentalFlourish from "./OrnamentalFlourish";

const steps = [
  { step: "01", title: "Understand Your Vision", desc: "We begin by listening to your ideas, preferences, traditions, and expectations." },
  { step: "02", title: "Plan with Purpose", desc: "We create a personalized event concept, budget plan, vendor strategy, and timeline tailored to your needs." },
  { step: "03", title: "Design the Experience", desc: "From décor and styling to stage setup and guest flow, we curate every detail beautifully." },
  { step: "04", title: "Execute with Excellence", desc: "Our team manages the event seamlessly so every moment unfolds perfectly." },
  { step: "05", title: "Celebrate Stress-Free", desc: "You enjoy your special day while we handle everything behind the scenes." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 bg-muted/50 px-6 lg:px-12">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">Our Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
            How We <span className="font-normal">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }} className="flex gap-8 items-start py-8 border-b border-border last:border-b-0">
              <span className="font-heading text-4xl font-normal text-secondary shrink-0">{s.step}</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground font-body font-normal text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <OrnamentalFlourish className="mt-20" />
    </section>
  );
};

export default ProcessSection;
