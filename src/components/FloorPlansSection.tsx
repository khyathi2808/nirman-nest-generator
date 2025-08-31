import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Maximize, IndianRupee, Download, Eye } from "lucide-react";
import floorPlanImage from "@/assets/floor-plan-sample.jpg";

const FloorPlansSection = () => {
  const floorPlans = [
    {
      type: "1 BHK",
      area: "750",
      price: "45,00,000",
      highlights: "Compact, ideal for young couples",
      popular: false,
      features: ["1 Bedroom", "1 Bathroom", "Living Room", "Kitchen", "Balcony"]
    },
    {
      type: "2 BHK",
      area: "1100",
      price: "65,00,000",
      highlights: "Spacious living, balcony views",
      popular: true,
      features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchen", "2 Balconies"]
    },
    {
      type: "3 BHK",
      area: "1450",
      price: "85,00,000",
      highlights: "Family-friendly, luxury interiors",
      popular: false,
      features: ["3 Bedrooms", "3 Bathrooms", "Living Room", "Kitchen", "2 Balconies", "Study Room"]
    },
    {
      type: "Penthouse",
      area: "2100",
      price: "1,35,00,000",
      highlights: "Private terrace, premium fittings",
      popular: false,
      features: ["3 Bedrooms", "3 Bathrooms", "Living Room", "Kitchen", "Private Terrace", "Study Room", "Store Room"]
    }
  ];

  return (
    <section id="floor-plans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Floor Plans & <span className="bg-gradient-accent bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our thoughtfully designed layouts that maximize space, light, and comfort
          </p>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {floorPlans.map((plan, index) => (
            <div key={index} className={`bg-card rounded-xl shadow-card border border-border hover:shadow-elegant transition-elegant overflow-hidden ${plan.popular ? 'ring-2 ring-accent' : ''}`}>
              {plan.popular && (
                <div className="bg-gradient-accent text-accent-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{plan.type}</h3>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Area & Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Maximize className="w-4 h-4 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{plan.area} sq ft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="text-xl font-bold text-primary">₹{plan.price}</span>
                  </div>
                </div>

                {/* Highlights */}
                <p className="text-muted-foreground mb-4">{plan.highlights}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                  <div className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <Button variant={plan.popular ? "hero" : "default"} className="w-full">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Floor Plan Image */}
        <div className="bg-card rounded-xl p-8 shadow-card border border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Sample Floor Plan Layout</h3>
            <p className="text-muted-foreground">Detailed architectural drawings showing optimal space utilization</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={floorPlanImage} 
              alt="Sample Floor Plan - 2BHK Layout" 
              className="w-full h-auto rounded-lg shadow-card border border-border"
            />
            <div className="mt-6 text-center">
              <Badge variant="secondary" className="mb-4">Sample 2BHK Layout</Badge>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1100</div>
                  <div className="text-sm text-muted-foreground">Square Feet</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2+2</div>
                  <div className="text-sm text-muted-foreground">Bed + Bath</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">₹65L</div>
                  <div className="text-sm text-muted-foreground">Starting Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Find Your Perfect Home?</h3>
          <p className="text-muted-foreground mb-6">Schedule a site visit to experience the quality and craftsmanship firsthand</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Site Visit
            </Button>
            <Button variant="outline" size="lg">
              Get Price List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;