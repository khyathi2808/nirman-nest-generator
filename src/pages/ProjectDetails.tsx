import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Building, Users, CheckCircle, Home, Ruler, IndianRupee } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  // Project data - in a real app, this would come from an API
  const projects = [
    {
      name: "Ayra Nirman Heights",
      location: "Kokapet, Hyderabad",
      status: "Ongoing",
      completion_date: "Dec 2026",
      floors: 12,
      units: 240,
      available_units: ["1 BHK", "2 BHK", "3 BHK"],
      price_range: "₹45 Lakhs – ₹85 Lakhs",
      rera_number: "RERA/TS/2023/112",
      highlights: [
        "Near Financial District",
        "Premium Amenities",
        "Metro Connectivity",
        "Eco-Friendly Design"
      ],
      overview: "A premium community offering sustainable living and modern design, strategically located near Hyderabad's IT corridor.",
      floor_plans: [
        { type: "1 BHK", area_sqft: 750, price: "₹45 Lakhs", bedrooms: 1, bathrooms: 1, balcony: 1 },
        { type: "2 BHK", area_sqft: 1100, price: "₹65 Lakhs", bedrooms: 2, bathrooms: 2, balcony: 2 },
        { type: "3 BHK", area_sqft: 1450, price: "₹85 Lakhs", bedrooms: 3, bathrooms: 3, balcony: 2 }
      ],
      amenities: ["Swimming Pool", "Gym", "Children's Play Area", "Jogging Track", "Clubhouse", "Solar Power Backup"],
      specifications: {
        structure: "RCC framed with earthquake resistance",
        flooring: "Vitrified tiles in living areas, wooden flooring in bedrooms",
        kitchen: "Granite platform with modular setup",
        bathrooms: "Anti-skid tiles with premium fittings",
        doors_windows: "UPVC windows with teakwood doors",
        power_backup: "Backup for lifts & common areas"
      }
    },
    {
      name: "Ayra Nirman Elite",
      location: "Gachibowli, Hyderabad",
      status: "Completed",
      completion_date: "Jun 2022",
      floors: 10,
      units: 180,
      available_units: ["2 BHK", "3 BHK", "Penthouse"],
      price_range: "₹70 Lakhs – ₹1.3 Crore",
      rera_number: "RERA/TS/2020/045",
      highlights: [
        "Ready to Move",
        "Luxury Interiors",
        "IT Hub Location",
        "Gated Community"
      ],
      overview: "A luxury gated community designed for IT professionals, located in the heart of Gachibowli.",
      floor_plans: [
        { type: "2 BHK", area_sqft: 1200, price: "₹70 Lakhs", bedrooms: 2, bathrooms: 2, balcony: 2 },
        { type: "3 BHK", area_sqft: 1600, price: "₹95 Lakhs", bedrooms: 3, bathrooms: 3, balcony: 2 },
        { type: "Penthouse", area_sqft: 2200, price: "₹1.3 Crore", bedrooms: 4, bathrooms: 4, balcony: 3 }
      ],
      amenities: ["Clubhouse", "Gym", "Indoor Games", "Children's Play Zone", "Landscaped Gardens"],
      specifications: {
        structure: "RCC earthquake-resistant structure",
        flooring: "Imported marble in living, laminated wood in bedrooms",
        kitchen: "Designer modular kitchen with granite countertops",
        bathrooms: "Luxury fittings from Kohler",
        doors_windows: "UPVC windows with soundproofing",
        power_backup: "24/7 backup for all units"
      }
    }
  ];

  const project = projects.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === projectName);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {project.name}
                  </h1>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{project.location}</span>
                  </div>
                </div>
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={`text-lg px-4 py-2 ${project.status === "Completed" ? "bg-green-100 text-green-800" : ""}`}
                >
                  {project.status}
                </Badge>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {project.overview}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{project.floors}</div>
                  <div className="text-sm text-muted-foreground">Floors</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{project.units}</div>
                  <div className="text-sm text-muted-foreground">Total Units</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{project.completion_date}</div>
                  <div className="text-sm text-muted-foreground">Completion</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">RERA</div>
                  <div className="text-sm text-muted-foreground">Approved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Units */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Available <span className="bg-gradient-accent bg-clip-text text-transparent">Units</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our range of thoughtfully designed homes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.floor_plans.map((unit, index) => (
                <div key={index} className="bg-card rounded-xl shadow-elegant border border-border overflow-hidden hover:shadow-glow transition-elegant">
                  {/* Unit Image Placeholder */}
                  <div className="h-48 bg-gradient-primary flex items-center justify-center">
                    <Home className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{unit.type}</h3>
                      <Badge variant="outline">{unit.area_sqft} sq ft</Badge>
                    </div>
                    
                    <div className="text-3xl font-bold text-primary mb-6">{unit.price}</div>
                    
                    {/* Unit Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{unit.bedrooms}</div>
                        <div className="text-xs text-muted-foreground">Bedrooms</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{unit.bathrooms}</div>
                        <div className="text-xs text-muted-foreground">Bathrooms</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{unit.balcony}</div>
                        <div className="text-xs text-muted-foreground">Balcony</div>
                      </div>
                    </div>

                    {/* Price per sq ft */}
                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-1">Price per sq ft</div>
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="w-4 h-4 text-primary" />
                        <span className="text-lg font-semibold text-foreground">
                          {Math.round(parseInt(unit.price.replace(/[₹,\s]/g, '').replace('Lakhs', '00000').replace('Crore', '0000000')) / unit.area_sqft).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button variant="hero" className="w-full">
                        View Floor Plan
                      </Button>
                      <Button variant="outline" className="w-full">
                        Schedule Site Visit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Specifications</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(project.specifications).map(([key, value], index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3 capitalize">
                    {key.replace('_', ' ')}
                  </h3>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Premium <span className="bg-gradient-accent bg-clip-text text-transparent">Amenities</span>
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card border border-border">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make This Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our sales team for more information and to schedule a visit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Download Brochure
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;