import { useState } from "react";
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
  // Track when the intro is physically removed from the DOM
  const [introRemoved, setIntroRemoved] = useState(false); 

  return (
    <div className="min-h-screen bg-background">
      <IntroAnimation 
        show={showIntro} 
        onComplete={() => setShowIntro(false)} 
        onFullyExited={() => setIntroRemoved(true)} 
      />
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StorySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      
      {/* Wait until the transition is fully complete before rendering the popup */}
      <ConsultationPopup show={introRemoved} />
      
      <Footer />
    </div>
  );
};

export default Index;
