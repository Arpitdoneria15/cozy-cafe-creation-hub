
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star } from "lucide-react";
import BookingModal from "./BookingModal";

const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const selectedCity = localStorage.getItem("selectedCity") || "Mumbai";

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Coffee-themed Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Floating Food Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
            ☕
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl">
            🥐
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
            🧁
          </div>
        </div>
        
        {/* Content */}
        <div className="cafe-container relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair">
              Taste<span className="text-amber-200">Hub</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Discover {selectedCity}'s finest restaurants, cafes, and dining experiences. Order now, dine later! 
            </p>
            
            {/* Location & Search */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700 font-medium">Delivering to: {selectedCity}</span>
                </div>
                <Button
                  onClick={() => {
                    localStorage.removeItem("selectedCity");
                    window.location.href = "/";
                  }}
                  variant="outline"
                  size="sm"
                  className="text-amber-600 border-amber-600"
                >
                  Change
                </Button>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search for restaurants, cuisines..."
                    className="pl-10 h-12 text-lg border-2 border-amber-200 focus:border-amber-500"
                  />
                </div>
                <Button className="h-12 px-8 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                  Search
                </Button>
              </div>
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white h-12"
              >
                Book Table Now
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-orange-200">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-orange-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 text-amber-300 fill-current" />
                  <span className="text-3xl font-bold">4.8</span>
                </div>
                <div className="text-orange-200">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        restaurantName="TasteHub Restaurant"
      />
    </>
  );
};

export default HeroSection;
