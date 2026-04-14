import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Gem, Building2, Music, BookOpen, Users, PartyPopper, Palette, Home, Flower2, UtensilsCrossed, ChevronRight, X, ChevronLeft } from "lucide-react";
import OrnamentalFlourish from "./OrnamentalFlourish";
import ArabesqueCorner from "./ArabesqueCorner";

import serviceWedding from "@/assets/service-wedding.jpg";
import serviceEngagement from "@/assets/service-engagement.jpeg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceConcert from "@/assets/service-concert.png";
import serviceWorkshop from "@/assets/service-workshop.jpg";
import serviceConference from "@/assets/service-conference.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceCultural from "@/assets/service-cultural.jpg";
import serviceHousewarming from "@/assets/service-housewarming-new.jpg";
import serviceFloral from "@/assets/service-floral.jpg";
import serviceCatering from "@/assets/service-catering.jpg";

const services = [
  { icon: Heart, title: "Wedding Planning & Decor", desc: "From traditional ceremonies to luxury weddings, we create magical wedding experiences with personalized themes, décor, venue styling, and complete coordination.", images: [serviceWedding] },
  { icon: Gem, title: "Engagement & Reception", desc: "Celebrate your milestones with beautifully curated engagement ceremonies and elegant reception events.", images: [serviceEngagement] },
  { icon: Building2, title: "Corporate Events", desc: "Professional planning and execution for conferences, product launches, annual celebrations, award nights, team events, and business gatherings.", images: [serviceCorporate] },
  { icon: Music, title: "Concerts & Live Shows", desc: "Dynamic event management for concerts, music nights, and entertainment shows with complete stage, lighting, and coordination support.", images: [serviceConcert] },
  { icon: BookOpen, title: "Workshops & Seminars", desc: "Smoothly organized workshops, educational events, and professional seminars with complete logistics and event flow management.", images: [serviceWorkshop] },
  { icon: Users, title: "Conferences & Exhibitions", desc: "End-to-end management for conferences, trade shows, exhibitions, and networking events.", images: [serviceConference] },
  { icon: PartyPopper, title: "Private Celebrations", desc: "Birthdays, anniversaries, baby showers, and family gatherings designed with warmth and elegance.", images: [servicePrivate] },
  { icon: Palette, title: "Traditional & Cultural", desc: "We create culturally rich events that honor rituals, traditions, and meaningful celebrations with grace and authenticity.", images: [serviceCultural] },
  { icon: Home, title: "House Warming", desc: "Celebrate your new home with a beautifully planned griha pravesh ceremony, complete with traditional rituals, elegant décor, and warm hospitality.", images: [serviceHousewarming] },
  { icon: Flower2, title: "Flower Decor", desc: "Exquisite floral arrangements and décor for every occasion — from cascading arches to elegant centerpieces, we bring your venue to life with fresh blooms.", images: [serviceFloral] },
  { icon: UtensilsCrossed, title: "Catering Services", desc: "Premium catering with a curated menu of traditional and contemporary cuisines, beautifully presented to delight your guests at every event.", images: [serviceCatering] },
];

const ServiceDetail = ({ service, onClose }: { service: (typeof services)[0]; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  const handleBook = () => { document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} className="overflow-hidden border-b border-border">
      <div className="p-4 md:p-8 bg-muted/20">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-muted-foreground/50 hover:text-foreground transition-colors"><X size={18} strokeWidth={1.5} /></button>
        </div>
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-6 group/img">
          <AnimatePresence mode="wait">
            <motion.img key={currentImageIndex} initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} src={service.images[currentImageIndex]} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
          </AnimatePresence>
          {service.images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/90 transition-all opacity-0 group-hover/img:opacity-100"><ChevronLeft size={20} strokeWidth={1} /></button>
              <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/90 transition-all opacity-0 group-hover/img:opacity-100"><ChevronRight size={20} strokeWidth={1} /></button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {service.images.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"}`} />
                ))}
              </div>
            </>
          )}
        </div>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-muted-foreground font-body font-normal text-sm md:text-base leading-relaxed mb-6 max-w-3xl">{service.desc}</motion.p>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <button onClick={handleBook} className="px-8 py-3 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">Book Now</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleServiceClick = (i: number) => { setActiveIndex(activeIndex === i ? null : i); };

  return (
    <section id="services" className="relative py-28 px-4 lg:px-8">
      <ArabesqueCorner />
      <div ref={ref} className="max-w-[90rem] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4 font-body font-medium">Our Services</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
            What We <span className="font-normal">Offer</span>
          </h2>
          <p className="text-muted-foreground font-body font-normal max-w-2xl mx-auto leading-relaxed">
            Complete event planning and management services designed to make every occasion seamless, elegant, and memorable.
          </p>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden border border-border">
          {services.map((s, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={s.title}>
                <motion.button initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.04 * i }} onClick={() => handleServiceClick(i)} className={`w-full flex items-center justify-between px-5 py-4 border-b border-border transition-all duration-300 text-left ${isActive ? "bg-primary/10" : ""}`}>
                  <div className="flex items-center gap-3">
                    <s.icon className={`w-4 h-4 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} strokeWidth={1.5} />
                    <span className={`font-heading text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>{s.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-primary rotate-90" : "text-muted-foreground/30"}`} />
                </motion.button>
                <AnimatePresence>{isActive && <ServiceDetail service={s} onClose={() => setActiveIndex(null)} />}</AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_2.2fr] gap-0 border border-border">
          <div className="border-r border-border">
            {services.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button key={s.title} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.04 * i }} onClick={() => handleServiceClick(i)} className={`w-full flex items-center justify-between px-6 md:px-8 py-5 border-b border-border transition-all duration-300 group text-left ${isActive ? "bg-primary/10" : "hover:bg-muted/40"}`}>
                  <div className="flex items-center gap-4">
                    <motion.div animate={isActive ? { scale: 1.1 } : { scale: 1 }} transition={{ duration: 0.3 }}>
                      <s.icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} strokeWidth={1.5} />
                    </motion.div>
                    <span className={`font-heading text-sm md:text-base font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground"}`}>{s.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-primary rotate-90" : "text-muted-foreground/30 group-hover:text-muted-foreground"}`} />
                </motion.button>
              );
            })}
          </div>

          <div className="relative min-h-[700px] bg-muted/10 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeIndex !== null ? (
                <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col">
                  <DesktopImageGallery service={services[activeIndex]} onClose={() => setActiveIndex(null)} />
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex items-center justify-center">
                  <motion.p animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="text-muted-foreground/40 font-body font-normal text-sm tracking-widest uppercase">Select a service</motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <OrnamentalFlourish className="mt-20" />
    </section>
  );
};

const DesktopImageGallery = ({ service, onClose }: { service: (typeof services)[0]; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  const handleBook = () => { document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <div className="relative h-[65%] overflow-hidden group/img">
        <AnimatePresence mode="wait">
          <motion.img key={currentImageIndex} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} src={service.images[currentImageIndex]} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <button onClick={onClose} className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors duration-200"><X size={18} strokeWidth={1.5} /></button>
        {service.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/90 transition-all duration-300 opacity-0 group-hover/img:opacity-100"><ChevronLeft size={20} strokeWidth={1} /></button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/90 transition-all duration-300 opacity-0 group-hover/img:opacity-100"><ChevronRight size={20} strokeWidth={1} /></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {service.images.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
        <div>
          <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{service.title}</motion.h3>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }} className="text-muted-foreground font-body font-normal text-sm md:text-base leading-relaxed mb-5">{service.desc}</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
          <button onClick={handleBook} className="px-10 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-primary/90 transition-colors">Book Now</button>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesSection;
