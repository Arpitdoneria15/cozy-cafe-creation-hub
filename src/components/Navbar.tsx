
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, MapPin, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const selectedCity = localStorage.getItem("selectedCity") || "Mumbai";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="cafe-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <span className="text-3xl font-bold font-playfair">
            Taste<span className="text-amber-600">Hub</span>
          </span>
        </Link>

        {/* Location */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-amber-600" />
          <span className="text-gray-700">{selectedCity}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Menu
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Restaurants
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Cart & Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={toggleCart}
            variant="outline" 
            className="relative border-amber-200 hover:bg-amber-50"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
            <User className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="cafe-container py-4 space-y-4">
            <Link 
              to="/home" 
              className="block text-gray-700 hover:text-amber-600 py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block text-gray-700 hover:text-amber-600 py-2"
              onClick={toggleMobileMenu}
            >
              Menu
            </Link>
            <Link 
              to="/gallery" 
              className="block text-gray-700 hover:text-amber-600 py-2"
              onClick={toggleMobileMenu}
            >
              Restaurants
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-amber-600 py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button 
                onClick={() => {
                  toggleCart();
                  toggleMobileMenu();
                }}
                variant="outline" 
                className="relative"
                aria-label="Open cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
