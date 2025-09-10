import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import CenterCard from "./components/CenterCard";

export default function Home() {
  return (
    <div className="bg_image">
      <CenterCard />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
