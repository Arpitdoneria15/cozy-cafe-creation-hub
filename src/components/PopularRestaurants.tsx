
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const restaurants = [
  {
    id: "rest-1",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "North Indian",
    rating: 4.5,
    deliveryTime: "25-30 min",
    location: "Bandra West",
    discount: "30% OFF",
    featured: "Butter Chicken",
    price: 350,
    category: "Restaurants"
  },
  {
    id: "rest-2",
    name: "Blue Tokai Coffee",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "Coffee & Beverages",
    rating: 4.7,
    deliveryTime: "15-20 min",
    location: "Powai",
    discount: "Buy 1 Get 1",
    featured: "Cold Brew",
    price: 250,
    category: "Coffee"
  },
  {
    id: "rest-3",
    name: "Trishna",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "Seafood",
    rating: 4.8,
    deliveryTime: "35-40 min",
    location: "Fort",
    discount: "20% OFF",
    featured: "Koliwada Prawns",
    price: 450,
    category: "Restaurants"
  },
  {
    id: "rest-4",
    name: "Social",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cuisine: "Continental",
    rating: 4.4,
    deliveryTime: "30-35 min",
    location: "Lower Parel",
    discount: "Happy Hours",
    featured: "LIIT",
    price: 600,
    category: "Bars"
  }
];

const PopularRestaurants = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="cafe-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Popular Near You
          </h2>
          <p className="text-xl text-gray-600">
            Trending restaurants and cafes in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {restaurant.discount}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{restaurant.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{restaurant.name}</h3>
                <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Popular: {restaurant.featured}</p>
                    <p className="text-lg font-bold text-orange-600">{formatPrice(restaurant.price)}</p>
                  </div>
                </div>
                
                <Button
                  onClick={() => addToCart(restaurant)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;
