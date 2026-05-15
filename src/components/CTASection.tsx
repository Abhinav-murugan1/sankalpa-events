import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const openConsultation = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    window.dispatchEvent(
      new CustomEvent("open-consultation")
    );
  };

  return (
    <section className="py-32 bg-teal-deepest text-primary-foreground">
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Let's Create Your Perfect{" "}
            <span className="italic">
              Celebration
            </span>
          </h2>

          <p className="text-teal-light/70 font-body text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it's a wedding, a family celebration,
            or a corporate event, Sankalpa Events is here
            to turn your vision into a timeless experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultationpopup"
              onClick={openConsultation}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-body hover:bg-teal-dark transition-all duration-500"
            >
              Book a Free Consultation
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                document
                  .querySelector("#contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="inline-block px-10 py-4 border border-primary-foreground/40 text-primary-foreground text-sm tracking-[0.2em] uppercase font-body hover:bg-primary-foreground/10 transition-all duration-500"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
