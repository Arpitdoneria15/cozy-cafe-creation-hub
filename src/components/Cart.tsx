
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity,
    totalItems,
    totalPrice 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-lg overflow-hidden flex flex-col animate-slide-in">
        {/* Cart Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-playfair font-medium flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your Cart ({totalItems})
          </h3>
          <button 
            onClick={toggleCart}
            className="text-cafe-dark hover:text-cafe-accent"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-cafe-light mb-4" />
              <h4 className="text-lg font-medium mb-2">Your cart is empty</h4>
              <p className="text-muted-foreground mb-4">Add some delicious items to get started!</p>
              <Button 
                onClick={toggleCart}
                className="bg-cafe-accent hover:bg-cafe-dark text-white"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex border rounded-md p-2 items-center"
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-cafe-medium">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-muted hover:bg-secondary"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-muted hover:bg-secondary"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 bg-muted">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal:</span>
              <span className="font-medium">{formatPrice(totalPrice)}</span>
            </div>
            <div className="space-y-2">
              <Button 
                className="w-full bg-cafe-accent hover:bg-cafe-dark text-white"
              >
                Checkout
              </Button>
              <Button 
                variant="outline"
                onClick={toggleCart}
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
