
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Clock, Truck, MapPin, Phone } from "lucide-react";

const orderSteps = [
  { id: 1, title: "Order Confirmed", icon: CheckCircle, completed: true },
  { id: 2, title: "Preparing", icon: Clock, completed: true },
  { id: 3, title: "Out for Delivery", icon: Truck, completed: true },
  { id: 4, title: "Delivered", icon: CheckCircle, completed: false }
];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("TH12345");
  const [estimatedTime, setEstimatedTime] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setEstimatedTime(prev => prev > 0 ? prev - 1 : 0);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="cafe-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Live Order Tracking
          </h2>
          <p className="text-xl text-gray-600">
            Track your order in real-time from kitchen to your doorstep
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Status */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-orange-500" />
                  Order Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <div>
                      <p className="font-medium">Order ID: #{orderId}</p>
                      <p className="text-sm text-gray-600">Estimated delivery: {estimatedTime} min</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">{estimatedTime}</div>
                      <div className="text-sm text-gray-600">minutes left</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {orderSteps.map((step, index) => (
                      <div key={step.id} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${step.completed ? 'text-green-700' : 'text-gray-500'}`}>
                            {step.title}
                          </p>
                          {index === 2 && step.completed && (
                            <p className="text-sm text-gray-600">
                              Your order is on the way! Delivery partner: Raj (+91 98765 43210)
                            </p>
                          )}
                        </div>
                        {step.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Live Map & Delivery Info */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-red-500" />
                  Live Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Mock Map */}
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-r from-blue-500 to-green-500"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto animate-pulse">
                        🏍️
                      </div>
                      <p className="text-lg font-medium">Raj is 2.5 km away</p>
                      <p className="text-sm text-gray-600">Moving towards your location</p>
                    </div>
                  </div>
                  
                  {/* Delivery Partner Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          R
                        </div>
                        <div>
                          <p className="font-medium">Raj Kumar</p>
                          <p className="text-sm text-gray-600">Delivery Partner</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>⭐ 4.9 rating • 2,500+ deliveries</p>
                      <p>Vehicle: KA 01 AB 1234</p>
                    </div>
                  </div>
                  
                  {/* Track Another Order */}
                  <div className="border-t pt-4">
                    <p className="font-medium mb-2">Track Another Order</p>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                      />
                      <Button className="bg-orange-500 hover:bg-orange-600">Track</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
