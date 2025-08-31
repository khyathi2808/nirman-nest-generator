import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PropertiesSection from "@/components/PropertiesSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PropertiesSection />
        <FloorPlansSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
