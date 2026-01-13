import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Coursework />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;