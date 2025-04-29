
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

// Sample menu data - in a real app, this would come from an API or CMS
const MENU_HIGHLIGHTS = [
  {
    id: "coffee-1",
    name: "Signature Cappuccino",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Coffee",
    description: "Espresso with steamed milk and a thick layer of silky foam"
  },
  {
    id: "breakfast-1",
    name: "Avocado Toast",
    price: 8.75,
    image: "https://images.unsplash.com/photo-1588137378973-f1feb5f9b764?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Breakfast",
    description: "Whole grain toast topped with smashed avocado, poached eggs and chili flakes"
  },
  {
    id: "dessert-1",
    name: "Chocolate Croissant",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Desserts",
    description: "Buttery, flaky croissant filled with rich chocolate"
  },
  {
    id: "coffee-2",
    name: "Cold Brew",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Coffee",
    description: "Smooth, low-acidity coffee brewed with cold water for 24 hours"
  }
];

const MenuHighlights = () => {
  const { addToCart } = useCart();

  return (
    <section className="cafe-section bg-cafe-cream">
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cafe-dark">Our Menu Highlights</h2>
          <p className="text-cafe-medium max-w-2xl mx-auto">
            Discover our most loved items, crafted with the finest ingredients and served with love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_HIGHLIGHTS.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg text-cafe-dark">{item.name}</h3>
                  <span className="text-cafe-accent font-medium">{formatPrice(item.price)}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <Button 
                  onClick={() => addToCart(item)}
                  className="w-full bg-cafe-medium hover:bg-cafe-dark text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild
            variant="outline"
            className="border-cafe-medium text-cafe-dark hover:bg-cafe-medium hover:text-white"
          >
            <a href="/menu">View Full Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
