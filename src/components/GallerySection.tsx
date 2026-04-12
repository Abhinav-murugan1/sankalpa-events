import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import gallerySangeet from "@/assets/gallery-sangeet.jpg";
import galleryMehndi from "@/assets/gallery-mehndi.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import serviceFloral from "@/assets/service-floral.jpg";
import galleryHousewarming from "@/assets/gallery-housewarming.jpg";
import OrnamentalFlourish from "./OrnamentalFlourish";
import ArabesqueCorner from "./ArabesqueCorner";

const images = [
  { src: galleryOutdoor, alt: "Outdoor wedding reception" },
  { src: gallerySangeet, alt: "Sangeet night celebration" },
  { src: galleryMehndi, alt: "Mehndi ceremony" },
  { src: galleryDining, alt: "Luxury dining setup" },
  { src: serviceFloral, alt: "Floral arch decoration" },
  { src: galleryHousewarming, alt: "Housewarming ceremony" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-20 px-6 lg:px-12">
      <ArabesqueCorner />
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">
            Our <span className="font-normal">Celebrations</span>
          </h2>
          <p className="text-muted-foreground font-body font-normal max-w-xl mx-auto leading-relaxed text-sm">
            From sacred weddings to sophisticated corporate events, a glimpse into the moments we've crafted.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 * i }} className="overflow-hidden group aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
      <OrnamentalFlourish className="mt-16" />
    </section>
  );
};

export default GallerySection;
