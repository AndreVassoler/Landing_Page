import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <Box minH="100vh">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
     {/* <ContactForm /> */}
      <CTA />
      <Footer />
    </Box>
  );
};

export default Index;
