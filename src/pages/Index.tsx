
import React from "react";
import HeroSection from "@/components/HeroSection";
import MenuHighlights from "@/components/MenuHighlights";
import AboutSection from "@/components/AboutSection";
import SpecialOffers from "@/components/SpecialOffers";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuHighlights />
      <AboutSection />
      <SpecialOffers />
      <TestimonialSlider />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Index;
