
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, QrCode, Wallet, Shield, Zap } from "lucide-react";

const paymentMethods = [
  {
    id: "upi",
    name: "UPI Payment",
    icon: Smartphone,
    description: "Pay using Google Pay, PhonePe, Paytm",
    discount: "Get 5% cashback",
    popular: true
  },
  {
    id: "cards",
    name: "Credit/Debit Cards",
    icon: CreditCard,
    description: "Visa, Mastercard, RuPay accepted",
    discount: "No extra charges"
  },
  {
    id: "wallets",
    name: "Digital Wallets",
    icon: Wallet,
    description: "Paytm, Amazon Pay, Mobikwik",
    discount: "Instant refunds"
  },
  {
    id: "qr",
    name: "QR Code",
    icon: QrCode,
    description: "Scan & Pay with any UPI app",
    discount: "Fastest payment"
  }
];

const PaymentSection = () => {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [orderTotal] = useState(850);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="cafe-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Secure Payments
          </h2>
          <p className="text-xl text-gray-600">
            Multiple payment options for your convenience
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Payment Method</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <Card
                    key={method.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedMethod === method.id 
                        ? 'ring-2 ring-blue-500 shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          selectedMethod === method.id ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}>
                          <method.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{method.name}</h4>
                            {method.popular && (
                              <Badge className="bg-orange-500 hover:bg-orange-600">Popular</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <p className="text-sm text-green-600 font-medium">{method.discount}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Security Features */}
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-green-800">100% Secure Payments</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span>Instant payment processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Bank-level encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>PCI DSS compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <span>Two-factor authentication</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* QR Code & Payment Summary */}
            <div className="space-y-6">
              {/* QR Code Payment */}
              {selectedMethod === "qr" && (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-center">Scan QR Code to Pay</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="w-64 h-64 mx-auto bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <QrCode className="h-24 w-24 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Open any UPI app and scan this QR code to pay ₹{orderTotal}
                    </p>
                    <div className="flex justify-center gap-4">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Google_Pay_Logo.svg/120px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-8" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PhonePe_Logo.svg/120px-PhonePe_Logo.svg.png" alt="PhonePe" className="h-8" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo.svg/120px-Paytm_Logo.svg.png" alt="Paytm" className="h-8" />
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* UPI Payment */}
              {selectedMethod === "upi" && (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>UPI Payment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Enter UPI ID (e.g., user@paytm)" />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Pay ₹{orderTotal}
                    </Button>
                    <div className="text-center text-sm text-gray-600">
                      Or pay using
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Google_Pay_Logo.svg/120px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-8 mb-2" />
                        <span className="text-xs">Google Pay</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PhonePe_Logo.svg/120px-PhonePe_Logo.svg.png" alt="PhonePe" className="h-8 mb-2" />
                        <span className="text-xs">PhonePe</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo.svg/120px-Paytm_Logo.svg.png" alt="Paytm" className="h-8 mb-2" />
                        <span className="text-xs">Paytm</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Order Summary */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Spice Garden - Butter Chicken</span>
                      <span>₹350</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Blue Tokai - Cold Brew</span>
                      <span>₹250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span>₹40</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount (30% OFF)</span>
                      <span>-₹180</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST & Service Charges</span>
                      <span>₹70</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount</span>
                      <span>₹{orderTotal}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 h-12">
                    Proceed to Pay ₹{orderTotal}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
