import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialization from "@/components/Specialization";
import DentistConcept from "@/components/DentistConcept";
import Services from "@/components/Services";

import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";


import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Specialization />
      <DentistConcept />
      <Services />

      <Approach />

      <Testimonials />

      <FAQ />
      <Contact />

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
