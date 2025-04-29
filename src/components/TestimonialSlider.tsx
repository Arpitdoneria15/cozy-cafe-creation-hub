
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    quote: "Café 6 has the best cappuccino I've ever tasted! The ambiance is perfect for both working and casual meetups. It's become my go-to spot in the city.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Food Blogger",
    quote: "Their avocado toast is simply divine, and paired with their signature cold brew, it's the perfect breakfast. The staff is always friendly and attentive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Local Resident",
    quote: "I visit Café 6 almost every morning. Their pastries are always fresh, and the coffee is consistently excellent. It feels like my second home.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="cafe-section bg-cafe-cream">
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cafe-dark">What Our Customers Say</h2>
          <p className="text-cafe-medium max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full overflow-hidden border-4 border-white w-16 h-16">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cafe-accent text-cafe-accent" />
                ))}
              </div>
              
              <blockquote className="italic text-lg mb-6 text-cafe-dark">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <h4 className="font-bold text-cafe-dark">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-cafe-accent" : "bg-cafe-light"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
