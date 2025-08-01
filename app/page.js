import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
   <div className="min-h-screen bg-slate-950 font-['Inter',sans-serif]">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
