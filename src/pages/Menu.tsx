
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Coffee, Utensils } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample menu data - in a real app, this would come from an API or CMS
const MENU_ITEMS = [
  {
    id: "coffee-1",
    name: "Espresso",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Coffee",
    tags: ["Hot"],
    description: "Pure and intense coffee experience in a small cup"
  },
  {
    id: "coffee-2",
    name: "Cappuccino",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Coffee",
    tags: ["Hot"],
    description: "Espresso with steamed milk and a thick layer of silky foam"
  },
  {
    id: "coffee-3",
    name: "Cold Brew",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Coffee",
    tags: ["Cold"],
    description: "Smooth, low-acidity coffee brewed with cold water for 24 hours"
  },
  {
    id: "coffee-4",
    name: "Latte",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Coffee",
    tags: ["Hot"],
    description: "Espresso with plenty of steamed milk and a light layer of foam"
  },
  {
    id: "breakfast-1",
    name: "Avocado Toast",
    price: 8.75,
    image: "https://images.unsplash.com/photo-1588137378973-f1feb5f9b764?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Breakfast",
    tags: ["Vegan"],
    description: "Whole grain toast topped with smashed avocado, poached eggs and chili flakes"
  },
  {
    id: "breakfast-2",
    name: "Granola Bowl",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Breakfast",
    tags: ["Vegan"],
    description: "House-made granola with Greek yogurt, fresh fruits, and honey"
  },
  {
    id: "breakfast-3",
    name: "Pancakes",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Breakfast",
    tags: ["Vegetarian"],
    description: "Fluffy buttermilk pancakes with maple syrup and fresh berries"
  },
  {
    id: "dessert-1",
    name: "Chocolate Croissant",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Desserts",
    tags: ["Vegetarian"],
    description: "Buttery, flaky croissant filled with rich chocolate"
  },
  {
    id: "dessert-2",
    name: "Cheesecake",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Desserts",
    tags: ["Vegetarian"],
    description: "Creamy New York style cheesecake with a graham cracker crust"
  },
  {
    id: "dessert-3",
    name: "Apple Pie",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    category: "Desserts",
    tags: ["Vegetarian"],
    description: "Classic apple pie with a flaky crust and cinnamon-spiced filling"
  }
];

const categories = ["All", "Coffee", "Breakfast", "Desserts"];
const tags = ["All", "Hot", "Cold", "Vegan", "Vegetarian"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const { addToCart } = useCart();

  const filteredItems = MENU_ITEMS.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const tagMatch = activeTag === "All" || item.tags.includes(activeTag);
    return categoryMatch && tagMatch;
  });

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-cafe-dark text-white py-24 mt-16">
        <div className="cafe-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-cafe-cream opacity-90 max-w-2xl mx-auto">
            Discover our selection of premium coffees, delicious breakfast options, and sweet treats.
          </p>
        </div>
      </div>
      
      {/* Menu Content */}
      <div className="cafe-container py-12">
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-cafe-dark hover:bg-cafe-medium" 
                : "text-cafe-dark"}
            >
              {category === "Coffee" && <Coffee className="mr-2 h-4 w-4" />}
              {category === "Breakfast" || category === "Desserts" ? <Utensils className="mr-2 h-4 w-4" /> : null}
              {category}
            </Button>
          ))}
        </div>
        
        {/* Tag Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Button
              key={tag}
              onClick={() => setActiveTag(tag)}
              variant={activeTag === tag ? "secondary" : "ghost"}
              className={activeTag === tag 
                ? "bg-cafe-light hover:bg-cafe-cream" 
                : "hover:bg-cafe-cream"}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 border border-cafe-cream"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-lg text-cafe-dark">{item.name}</h3>
                  <span className="text-cafe-accent font-medium">{formatPrice(item.price)}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {item.tags.map(tag => (
                      <span 
                        key={`${item.id}-${tag}`} 
                        className="text-xs bg-cafe-cream text-cafe-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    onClick={() => addToCart(item)}
                    className="bg-cafe-medium hover:bg-cafe-dark text-white"
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;
