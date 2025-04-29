
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  // Detect scroll to change navbar style
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
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="cafe-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-playfair text-cafe-dark">Café<span className="text-cafe-accent">6</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-cafe-dark hover:text-cafe-accent font-medium transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-cafe-dark hover:text-cafe-accent font-medium transition-colors">
            Menu
          </Link>
          <Link to="/gallery" className="text-cafe-dark hover:text-cafe-accent font-medium transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-cafe-dark hover:text-cafe-accent font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-cafe-dark p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Cart & Book Table Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={toggleCart}
            variant="outline" 
            className="relative"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-cafe-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <Button className="bg-cafe-accent hover:bg-cafe-dark text-white">
            Book a Table
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="cafe-container py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-cafe-dark hover:text-cafe-accent py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block text-cafe-dark hover:text-cafe-accent py-2"
              onClick={toggleMobileMenu}
            >
              Menu
            </Link>
            <Link 
              to="/gallery" 
              className="block text-cafe-dark hover:text-cafe-accent py-2"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block text-cafe-dark hover:text-cafe-accent py-2"
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
                  <span className="absolute -top-2 -right-2 bg-cafe-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
              <Button className="bg-cafe-accent hover:bg-cafe-dark text-white">
                Book a Table
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
