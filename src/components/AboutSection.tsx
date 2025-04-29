
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="cafe-section bg-white">
      <div className="cafe-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Café 6 interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cafe-dark text-cafe-cream p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-playfair italic text-lg">
                "Coffee is our passion, hospitality is our promise."
              </p>
            </div>
          </div>
          
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-dark">Our Story</h2>
            <p className="mb-4 text-cafe-medium">
              Founded in 2015, Café 6 began as a small corner shop with a big dream: to create a space where coffee lovers could enjoy exceptional brews in a warm, inviting atmosphere.
            </p>
            <p className="mb-6 text-cafe-medium">
              Today, we continue that tradition with carefully sourced beans, house-made pastries, and a commitment to sustainable practices. Every cup we serve carries the passion of our skilled baristas and the rich heritage of coffee culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <div className="bg-cafe-light rounded-full p-3 mr-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Coffee bean icon"
                    className="w-6 h-6" 
                  />
                </div>
                <div>
                  <h3 className="font-medium">Premium Beans</h3>
                  <p className="text-sm text-muted-foreground">Ethically sourced</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-cafe-light rounded-full p-3 mr-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Chef hat icon"
                    className="w-6 h-6" 
                  />
                </div>
                <div>
                  <h3 className="font-medium">Fresh Food</h3>
                  <p className="text-sm text-muted-foreground">Made with love</p>
                </div>
              </div>
            </div>
            <Button className="bg-cafe-dark hover:bg-cafe-medium text-white">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
