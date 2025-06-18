
import React from "react";
import { Home, ShoppingBag, Package, CreditCard, RotateCcw } from "lucide-react";

const navItems = [
  { icon: Home, label: "Swiggy", active: true },
  { icon: ShoppingBag, label: "Food", active: false },
  { icon: Package, label: "Instamart", active: false },
  { icon: Home, label: "Dineout", active: false },
  { icon: CreditCard, label: "Card", active: false },
  { icon: RotateCcw, label: "Reorder", active: false }
];

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center py-2 px-2 ${
                  item.active ? "text-orange-500" : "text-gray-500"
                }`}
              >
                <IconComponent className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
