
import React from "react";
import { Button } from "@/components/ui/button";

const OfferBanner = () => {
  return (
    <div className="px-4 mb-6">
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Get 65% OFF</h2>
            <p className="text-teal-100 mb-4">for 15 mins</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
              ORDER NOW
            </Button>
          </div>
          <div className="absolute -right-4 -top-4">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Pizza" 
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
