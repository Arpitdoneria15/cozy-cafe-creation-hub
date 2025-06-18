
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
];

const AppOpening = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedCity) {
      localStorage.setItem("selectedCity", selectedCity);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Coffee className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-amber-800 mb-2">TasteHub</h1>
          <p className="text-amber-600">Discover India's Best Food</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-amber-600" />
            <span className="text-amber-800 font-medium">Select Your City</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCity === city
                    ? "border-amber-500 bg-amber-50 text-amber-800"
                    : "border-gray-200 hover:border-amber-300 text-gray-700"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedCity}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white h-12 rounded-xl"
        >
          Continue to TasteHub
        </Button>
      </div>
    </div>
  );
};

export default AppOpening;
