import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main style={{
        maxWidth: 1200,
        margin: '6rem auto 4rem auto',
        padding: '0 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
