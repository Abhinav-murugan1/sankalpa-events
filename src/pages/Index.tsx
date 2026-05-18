import { useState, useEffect } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import ConsultationPopup from "@/components/ConsultationPopup";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introRemoved, setIntroRemoved] = useState(false);

  // Lock scrolling while the intro is active to prevent background layout thrashing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function just in case the component unmounts
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-background">
      <IntroAnimation 
        show={showIntro} 
        onComplete={() => setShowIntro(false)} 
        onFullyExited={() => setIntroRemoved(true)} 
      />
      
      {/* 
        Render the absolute necessities for the top fold. 
        This ensures the background isn't blank when the teal screen fades out. 
      */}
      <Navbar />
      <HeroSection />
      
      {/* 
        Defer all heavy image rendering and additional DOM nodes 
        until the intro has successfully completely unmounted.
      */}
      {introRemoved && (
        <>
          <AboutSection />
          <StorySection />
          <ServicesSection />
          <WhyChooseUsSection />
          <ProcessSection />
          <GallerySection />
          <CTASection />
          <ContactSection />
          <ConsultationPopup show={true} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
