import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Ayra Nirman</h1>
              <p className="text-xs text-muted-foreground">Building Homes, Building Trust</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('properties')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('floor-plans')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Floor Plans
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">+91 98765 43210</span>
            </div>
            <Button variant="hero" onClick={() => scrollToSection('contact')}>
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('properties')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
              >
                Properties
              </button>
              <button 
                onClick={() => scrollToSection('floor-plans')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
              >
                Floor Plans
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
              >
                Contact
              </button>
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+91 98765 43210</span>
                </div>
                <Button variant="hero" className="w-full" onClick={() => scrollToSection('contact')}>
                  Book Site Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;