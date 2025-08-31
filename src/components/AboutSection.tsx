import { Award, Users, Building, Sparkles } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Building,
      number: "27+",
      label: "Projects Completed",
      description: "Successful residential developments across Hyderabad"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Happy Families",
      description: "Satisfied customers living in our quality homes"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Decades of excellence in construction industry"
    },
    {
      icon: Sparkles,
      number: "100%",
      label: "Quality Assurance",
      description: "Commitment to superior construction standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Ayra Nirman</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building dreams into reality with uncompromising quality and innovative design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Building Homes, Building Trust</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Ayra Nirman, we believe in delivering not just homes but lifestyles. With over 15 years of 
                experience in residential construction, we have successfully completed 25+ projects across Hyderabad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to blend modern architecture with quality engineering, ensuring that every home 
                we build is safe, sustainable, and stylish. We understand that a home is not just a place to live, 
                but a sanctuary where memories are made and dreams come true.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quality Excellence</h4>
                  <p className="text-muted-foreground">Every project meets the highest standards of construction and design.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Customer First</h4>
                  <p className="text-muted-foreground">Your satisfaction and trust are our top priorities in every interaction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                  <p className="text-muted-foreground">Incorporating modern technology and sustainable practices in construction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-elegant">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="font-semibold text-foreground mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Leaders */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">AR</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Arun Reddy</h4>
              <p className="text-primary font-medium mb-3">Managing Director</p>
              <p className="text-sm text-muted-foreground">
                With 20 years in the real estate sector, Arun leads Ayra Nirman with a vision of innovation and trust.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">SK</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Sneha Kapoor</h4>
              <p className="text-primary font-medium mb-3">Head Architect</p>
              <p className="text-sm text-muted-foreground">
                An award-winning architect, Sneha designs sustainable homes with modern aesthetics.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">RK</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Ravi Kumar</h4>
              <p className="text-primary font-medium mb-3">Project Manager</p>
              <p className="text-sm text-muted-foreground">
                Ravi ensures on-time delivery with high-quality construction standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;