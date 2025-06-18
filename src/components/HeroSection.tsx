
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ChevronDown, User, Mic } from "lucide-react";

const HeroSection = () => {
  const selectedCity = localStorage.getItem("selectedCity") || "Mumbai";

  return (
    <section className="bg-white px-4 pt-16 pb-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold text-gray-800">TasteHub</span>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </div>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-600">
            1/5043 Galino-2 Balbir Nagar Sahdara, Near...
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <Input
              placeholder="Search for 'Burger'"
              className="flex-1 bg-transparent border-0 p-0 text-gray-700 placeholder:text-gray-500 focus-visible:ring-0"
            />
            <Mic className="h-5 w-5 text-orange-500 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
