
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="cafe-section bg-cafe-dark text-white py-16">
      <div className="cafe-container">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-cafe-accent font-medium mb-2">NEWSLETTER</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Stay Updated</h2>
          <p className="mb-8 text-cafe-cream opacity-90">
            Subscribe to our newsletter to receive updates on new menu items, special offers, and upcoming events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white opacity-60" />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-white placeholder:opacity-60 pl-10"
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-cafe-accent hover:bg-cafe-light hover:text-cafe-dark transition-colors whitespace-nowrap"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-cafe-cream opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
