
import React from "react";
import HeroSection from "@/components/HeroSection";
import FoodCategories from "@/components/FoodCategories";
import PopularRestaurants from "@/components/PopularRestaurants";
import CouplesSection from "@/components/CouplesSection";
import OrderTracking from "@/components/OrderTracking";
import PaymentSection from "@/components/PaymentSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <HeroSection />
      <FoodCategories />
      <PopularRestaurants />
      <CouplesSection />
      <OrderTracking />
      <PaymentSection />
      <Footer />
    </div>
  );
};

export default Home;
