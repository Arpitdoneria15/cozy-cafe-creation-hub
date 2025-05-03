
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Phone } from "lucide-react";
import { toast } from "sonner";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your reservation has been submitted! We'll contact you shortly to confirm.");
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2"
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="cafe-section relative">
      <div className="cafe-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-cafe-dark">Reserve Your Table</h2>
            <p className="text-cafe-medium mb-6">
              Whether it's a casual meetup or a special occasion, we have the perfect spot for you. 
              Make a reservation and we'll make sure your table is ready when you arrive.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="relative">
                  <Input 
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Input 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="relative">
                  <Input 
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7+">7+ Guests</option>
                </select>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-cafe-dark hover:bg-cafe-accent text-white w-full py-6"
              >
                {isSubmitting ? "Processing..." : "Reserve Now"}
              </Button>
            </form>
          </div>
          
          {/* Image Column */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Café 6 interior dining area" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cafe-accent text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-playfair italic text-lg">
                "The perfect atmosphere for every occasion."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
