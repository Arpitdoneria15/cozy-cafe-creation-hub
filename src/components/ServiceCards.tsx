
import React from "react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: 1,
    title: "FOOD DELIVERY",
    subtitle: "FLAVOURFUL FESTIVAL",
    offer: "BUY 1 GET 1 & MORE",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bgColor: "bg-orange-50"
  },
  {
    id: 2,
    title: "INSTAMART",
    subtitle: "GET ANYTHING INSTANTLY",
    offer: "UP TO ₹100 OFF",
    badge: "6 mins",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bgColor: "bg-purple-50"
  },
  {
    id: 3,
    title: "DINEOUT",
    subtitle: "EAT OUT & SAVE MORE",
    offer: "UP TO 50% OFF",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bgColor: "bg-blue-50"
  },
  {
    id: 4,
    title: "SCENES",
    subtitle: "DISCOVER EVENTS NEARBY",
    badge: "NEW",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bgColor: "bg-yellow-50"
  }
];

const ServiceCards = () => {
  return (
    <div className="px-4 mb-6">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-2xl p-4 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="relative z-10">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{service.subtitle}</p>
                {service.offer && (
                  <p className="text-xs font-medium text-orange-600">{service.offer}</p>
                )}
                {service.badge && (
                  <Badge className={`${service.badgeColor || 'bg-orange-500'} text-white text-xs px-2 py-1 mt-2`}>
                    {service.badge}
                  </Badge>
                )}
              </div>
              <div className="absolute -right-2 -bottom-2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Credit Card Banner */}
        <div className="mt-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1">CREDIT CARD</h3>
            <p className="text-sm text-orange-100">FIRST YEAR FREE, JUST FOR YOU</p>
          </div>
          <div className="absolute -right-4 -top-2">
            <div className="w-20 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-80"></div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-sm font-medium px-4">FEATURED FOR YOU</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
