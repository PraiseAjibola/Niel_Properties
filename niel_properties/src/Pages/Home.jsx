import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TopProjects from "../components/TopProjects";
import FeaturedProperties from "../components/FeaturedProperties";
import SaveInBits from "../components/SaveInBits";
import MobileAppSection from "../components/MobileAppSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TopProjects />
      <FeaturedProperties />
      <SaveInBits />
      <MobileAppSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}