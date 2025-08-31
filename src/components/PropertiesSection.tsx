import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building, Users, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertiesSection = () => {
  const navigate = useNavigate();
  const properties = [
    {
      name: "Ayra Nirman Heights",
      location: "Kokapet, Hyderabad",
      status: "Ongoing",
      completion: "Dec 2026",
      floors: 12,
      units: 240,
      types: ["1 BHK", "2 BHK", "3 BHK"],
      priceRange: "₹45 Lakhs – ₹85 Lakhs",
      rera: "RERA/TS/2023/112",
      highlights: [
        "Near Financial District",
        "Metro Connectivity",
        "Premium Amenities",
        "Eco-Friendly Design"
      ]
    },
    {
      name: "Ayra Nirman Elite",
      location: "Gachibowli, Hyderabad",
      status: "Completed",
      completion: "Jun 2022",
      floors: 10,
      units: 180,
      types: ["2 BHK", "3 BHK", "Penthouse"],
      priceRange: "₹70 Lakhs – ₹1.3 Crore",
      rera: "RERA/TS/2020/045",
      highlights: [
        "Ready to Move",
        "IT Hub Location",
        "Luxury Interiors",
        "Gated Community"
      ]
    }
  ];

  const amenities = [
    "Swimming Pool",
    "Gym & Yoga Studio",
    "Clubhouse & Banquet Hall",
    "Children's Play Area",
    "Landscaped Gardens",
    "Jogging Track",
    "Indoor Games Room",
    "Co-working Lounge",
    "24/7 Security & CCTV",
    "Power Backup",
    "Rainwater Harvesting",
    "EV Charging Stations"
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our premium residential projects in Hyderabad's most sought-after locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {properties.map((property, index) => (
            <div key={index} className="bg-card rounded-xl shadow-elegant border border-border overflow-hidden hover:shadow-glow transition-elegant">
              {/* Property Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{property.name}</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <Badge 
                    variant={property.status === "Completed" ? "default" : "secondary"}
                    className={property.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                  >
                    {property.status}
                  </Badge>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Building className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{property.floors}</div>
                    <div className="text-xs text-muted-foreground">Floors</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{property.units}</div>
                    <div className="text-xs text-muted-foreground">Units</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{property.completion}</div>
                    <div className="text-xs text-muted-foreground">Completion</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">RERA</div>
                    <div className="text-xs text-muted-foreground">Approved</div>
                  </div>
                </div>

                {/* Unit Types */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Available Units:</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.types.map((type, idx) => (
                      <Badge key={idx} variant="outline">{type}</Badge>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Price Range</div>
                  <div className="text-2xl font-bold text-primary">{property.priceRange}</div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RERA */}
                <div className="text-xs text-muted-foreground mb-6">
                  RERA Registration: {property.rera}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="hero" 
                    className="flex-1"
                    onClick={() => navigate(`/project/${property.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="bg-gradient-subtle rounded-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">World-Class Amenities</h3>
            <p className="text-lg text-muted-foreground">
              Experience luxury living with our comprehensive range of modern amenities
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card border border-border">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{amenity}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="lg">
              Download Complete Amenities List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;