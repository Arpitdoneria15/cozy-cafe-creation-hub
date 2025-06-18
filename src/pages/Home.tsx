
import React from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import OfferBanner from "@/components/OfferBanner";
import BottomNavigation from "@/components/BottomNavigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <OfferBanner />
      <ServiceCards />
      <BottomNavigation />
    </div>
  );
};

export default Home;
