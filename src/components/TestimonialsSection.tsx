import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import OrnamentalFlourish from "./OrnamentalFlourish";

const testimonials = [
  { quote: "Sankalpa Events made our wedding truly magical. Every detail was handled with care, elegance, and perfection.", author: "Happy Couple" },
  { quote: "Their professionalism and creativity made our corporate event seamless and memorable. Highly recommended!", author: "Corporate Client" },
  { quote: "Beautiful décor, smooth coordination, and a stress-free experience. Sankalpa Events exceeded all our expectations.", author: "Event Client" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 bg-muted/50 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients <span className="font-normal">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }} className="p-8 border border-border bg-background">
              <Quote className="w-8 h-8 text-secondary/40 mb-6" strokeWidth={1.5} />
              <p className="text-foreground font-body font-normal leading-relaxed mb-6">"{t.quote}"</p>
              <p className="text-sm text-muted-foreground font-body font-bold tracking-widest uppercase">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <OrnamentalFlourish className="mt-20" />
    </section>
  );
};

export default TestimonialsSection;
