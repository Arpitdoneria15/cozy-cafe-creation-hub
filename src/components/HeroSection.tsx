
import React from "react";
import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="cafe-container relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-cafe-cream text-lg mb-2 font-medium">Welcome to Our Café</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            Enjoy the Finest Coffee in Town
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cafe-cream">
            A cozy place where every cup tells a story and every bite creates a memory.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-cafe-accent hover:bg-cafe-dark text-white text-base px-8 py-6"
            >
              View Our Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cafe-dark text-base px-8 py-6"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
