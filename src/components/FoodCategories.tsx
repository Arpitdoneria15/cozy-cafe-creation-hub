
import React from "react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Restaurants",
    icon: "🍽️",
    description: "Fine dining & casual restaurants",
    gradient: "from-orange-400 to-red-500",
    count: "200+"
  },
  {
    id: 2,
    name: "Coffee Shops",
    icon: "☕",
    description: "Premium coffee & beverages",
    gradient: "from-amber-400 to-orange-500",
    count: "80+"
  },
  {
    id: 3,
    name: "Dining",
    icon: "🥘",
    description: "Traditional & modern cuisine",
    gradient: "from-red-400 to-pink-500",
    count: "150+"
  },
  {
    id: 4,
    name: "Bars & Pubs",
    icon: "🍻",
    description: "Drinks & nightlife",
    gradient: "from-purple-400 to-indigo-500",
    count: "70+"
  },
  {
    id: 5,
    name: "Quick Bites",
    icon: "🌮",
    description: "Fast food & snacks",
    gradient: "from-green-400 to-teal-500",
    count: "120+"
  },
  {
    id: 6,
    name: "Desserts",
    icon: "🍰",
    description: "Sweets & desserts",
    gradient: "from-pink-400 to-rose-500",
    count: "60+"
  }
];

const FoodCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="cafe-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From street food to fine dining, discover the best flavors India has to offer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}></div>
              <div className="relative p-8 text-white text-center h-64 flex flex-col justify-center">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="text-sm font-medium bg-white/20 rounded-full px-3 py-1 inline-block">
                  {category.count} options
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
