
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Calendar as CalendarIcon, Clock } from "lucide-react";

const romanticVenues = [
  {
    id: 1,
    name: "Aer Bar",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Four Seasons, Worli",
    price: "₹3000 for two",
    atmosphere: "Rooftop with city views",
    rating: 4.8
  },
  {
    id: 2,
    name: "Trishna",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Fort, Mumbai",
    price: "₹2500 for two",
    atmosphere: "Intimate fine dining",
    rating: 4.7
  },
  {
    id: 3,
    name: "Café Mocha",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Bandra West",
    price: "₹1200 for two",
    atmosphere: "Cozy coffee date",
    rating: 4.5
  }
];

const CouplesSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-red-50 to-orange-50">
      <div className="cafe-container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-red-500 fill-current" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Date Night Special
            </h2>
            <Heart className="h-8 w-8 text-red-500 fill-current" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan the perfect romantic evening with your loved one at Mumbai's most romantic venues
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Book Your Date</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Date</label>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Guests</label>
                  <Input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="2"
                    max="10"
                  />
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white h-12">
                Find Perfect Venues
              </Button>
            </CardContent>
          </Card>
          
          {/* Romantic Venues */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Romantic Venues</h3>
            {romanticVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex">
                  <div className="w-32 h-32">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{venue.name}</h4>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                        <span className="text-sm font-medium">{venue.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{venue.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{venue.atmosphere}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 font-bold">{venue.price}</span>
                      <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouplesSection;
