
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    reservationType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, reservationType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        reservationType: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-cafe-dark text-white py-24 mt-16">
        <div className="cafe-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-cafe-cream opacity-90 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="cafe-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cafe-dark">Visit Our Café</h2>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-cafe-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-cafe-dark">Address</h3>
                    <p className="text-muted-foreground">123 Coffee Street, Brew City, BC 10101</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-cafe-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-cafe-dark">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-cafe-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-cafe-dark">Email</h3>
                    <p className="text-muted-foreground">info@cafe6.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-cafe-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-cafe-dark">Opening Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 7AM - 8PM</p>
                    <p className="text-muted-foreground">Sat: 8AM - 9PM</p>
                    <p className="text-muted-foreground">Sun: 9AM - 7PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden h-80 shadow-md">
              <iframe
                title="Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24312.267120682123!2d-74.00610869040881!3d40.71275697307898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3c8c567%3A0x9ef1821ba6649b9!2sSoHo%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650463051528!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cafe-dark">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="reservation">Make a Reservation</Label>
                  <Select onValueChange={handleSelectChange} value={formData.reservationType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reservation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No reservation needed</SelectItem>
                      <SelectItem value="table">Table Reservation</SelectItem>
                      <SelectItem value="event">Private Event</SelectItem>
                      <SelectItem value="catering">Catering Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cafe-dark hover:bg-cafe-medium text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
