
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Heart } from "lucide-react";
import BookingModal from "./BookingModal";

const restaurants = [
  {
    id: 1,
    name: "Trishna",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "Seafood, Indian",
    rating: 4.8,
    deliveryTime: "25-30 mins",
    location: "Fort, Mumbai",
    price: "₹1200 for two",
    offer: "20% OFF",
    isVeg: false,
    tags: ["Trending", "Premium"]
  },
  {
    id: 2,
    name: "The Table",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "European, Continental",
    rating: 4.7,
    deliveryTime: "35-40 mins", 
    location: "Colaba, Mumbai",
    price: "₹2000 for two",
    offer: "15% OFF",
    isVeg: false,
    tags: ["Fine Dining", "Romantic"]
  },
  {
    id: 3,
    name: "Britannia & Co.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "Parsi, Iranian",
    rating: 4.6,
    deliveryTime: "20-25 mins",
    location: "Ballard Estate, Mumbai", 
    price: "₹800 for two",
    offer: "25% OFF",
    isVeg: false,
    tags: ["Heritage", "Authentic"]
  },
  {
    id: 4,
    name: "Shree Thaker Bhojanalay",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "Gujarati, Thali",
    rating: 4.5,
    deliveryTime: "15-20 mins",
    location: "Kalbadevi, Mumbai",
    price: "₹600 for two", 
    offer: "30% OFF",
    isVeg: true,
    tags: ["Pure Veg", "Traditional"]
  }
];

const PopularRestaurants = () => {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, restaurantName: "" });

  const handleBookNow = (restaurantName: string) => {
    setBookingModal({ isOpen: true, restaurantName });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="cafe-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">
              Popular Restaurants
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover the most loved dining spots in your city
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      {restaurant.offer}
                    </Badge>
                  </div>
                  <button className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 transition-colors">
                    <Heart className="h-5 w-5 text-red-500" />
                  </button>
                  {restaurant.isVeg && (
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Pure Veg
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-amber-900">{restaurant.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-amber-800">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-amber-600 mb-2">{restaurant.cuisine}</p>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-amber-700">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {restaurant.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-900">{restaurant.price}</span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-amber-300 text-amber-700 hover:bg-amber-50"
                      >
                        Order Now
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleBookNow(restaurant.name)}
                        className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                      >
                        Book Table
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={bookingModal.isOpen} 
        onClose={() => setBookingModal({ isOpen: false, restaurantName: "" })} 
        restaurantName={bookingModal.restaurantName}
      />
    </>
  );
};

export default PopularRestaurants;
