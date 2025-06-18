
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Coffee } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const selectedCity = localStorage.getItem("selectedCity") || "Mumbai";

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 py-20">
      <div className="cafe-container text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Coffee className="h-12 w-12 text-amber-700" />
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900">
            Taste<span className="text-orange-600">Hub</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-amber-800 mb-4">
          Discover India's Best Food & Dining
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <MapPin className="h-5 w-5 text-amber-600" />
          <span className="text-amber-700 font-medium">Serving in {selectedCity}</span>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
              <Input
                type="text"
                placeholder="Search restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-amber-200 focus:border-amber-400 bg-white/80"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="h-14 px-8 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Fast Delivery", "Fresh Food", "Best Price", "24/7 Support"].map((feature, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <p className="text-amber-800 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
