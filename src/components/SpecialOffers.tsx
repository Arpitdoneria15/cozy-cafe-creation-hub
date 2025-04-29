
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const SpecialOffers = () => {
  return (
    <section className="cafe-section relative bg-cover bg-center text-white py-20" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
    }}>
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="max-w-2xl mx-auto text-cafe-cream opacity-90">
            Enjoy our seasonal promotions and limited-time offers designed to make your visit even more special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Offer 1 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-cafe-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Happy Hour Special</h3>
            <p className="text-cafe-cream mb-4">
              Get 50% off all coffee drinks and pastries Monday to Friday, 3-5pm. The perfect afternoon pick-me-up!
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cafe-dark">
              Learn More
            </Button>
          </div>
          
          {/* Offer 2 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-cafe-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Loyalty Program</h3>
            <p className="text-cafe-cream mb-4">
              Join our loyalty program and earn points with every purchase. Get a free coffee after 10 visits!
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cafe-dark">
              Join Now
            </Button>
          </div>
          
          {/* Offer 3 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-cafe-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Breakfast Deal</h3>
            <p className="text-cafe-cream mb-4">
              Enjoy any breakfast item with a coffee of your choice for just $9.99, available daily until 11am.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cafe-dark">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
