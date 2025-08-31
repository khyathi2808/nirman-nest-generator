import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ayra Nirman</h3>
                <p className="text-primary-foreground/80">Building Homes, Building Trust</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed mb-6">
              With over 15 years of excellence in residential construction, Ayra Nirman has been 
              creating quality homes that blend modern architecture with sustainable living in 
              Hyderabad's premium locations.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#floor-plans" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/90 text-sm">
                    #102, Sapphire Towers<br />
                    Gachibowli, Hyderabad<br />
                    Telangana - 500032
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/90 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/90 text-sm">sales@ayranirman.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/90 text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Ayra Nirman Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                RERA Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;