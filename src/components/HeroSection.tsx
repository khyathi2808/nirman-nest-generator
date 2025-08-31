import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Ayra Nirman Luxury Residential Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent-light/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">New Project Launching 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to Your 
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Dream Home
            </span>
            at Ayra Nirman
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Modern homes designed with precision, comfort, and sustainability in mind. 
            Experience luxury living in Hyderabad's most coveted locations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">27+</div>
              <div className="text-sm text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm text-primary-foreground/80">Happy Families</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection('floor-plans')}
            >
              View Floor Plans
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection('contact')}
            >
              Book Site Visit
            </Button>
          </div>

          {/* Location Info */}
          <div className="flex items-center space-x-2 text-primary-foreground/90">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg">Kokapet, Hyderabad - Near Financial District</span>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="space-y-4">
          <div className="bg-background/95 backdrop-blur-sm p-6 rounded-xl shadow-elegant border border-border/50">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Starting From</span>
            </div>
            <div className="text-2xl font-bold text-primary">₹45 Lakhs</div>
            <div className="text-sm text-muted-foreground">1 BHK Apartments</div>
          </div>
          <div className="bg-background/95 backdrop-blur-sm p-6 rounded-xl shadow-elegant border border-border/50">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Prime Location</span>
            </div>
            <div className="text-lg font-bold text-primary">Kokapet</div>
            <div className="text-sm text-muted-foreground">Near IT Hub</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;