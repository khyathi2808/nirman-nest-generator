import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step? Contact our expert team for personalized assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Let's Start the Conversation</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for your first home or an investment opportunity, 
              our experienced team is here to guide you through every step of the process.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visit Our Office</h4>
                    <p className="text-muted-foreground">
                      #102, Sapphire Towers, Gachibowli<br />
                      Hyderabad, Telangana - 500032
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      Mon-Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                    <p className="text-muted-foreground">
                      sales@ayranirman.com<br />
                      info@ayranirman.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      Quick responses, instant support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="property" className="text-foreground">Property Interest</Label>
                <Select value={formData.property} onValueChange={(value) => handleInputChange("property", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1bhk">1 BHK Apartment</SelectItem>
                    <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
                    <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements, preferred location, budget, or any questions you have..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>

            <div className="mt-6 p-4 bg-accent-light rounded-lg border border-accent/20">
              <div className="flex items-center space-x-2 text-accent-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Quick Response Guarantee</span>
              </div>
              <p className="text-sm text-accent-foreground/80 mt-1">
                We'll get back to you within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;