import HeroSection from "./components/HeroSection";
import HeroBanner from "./components/HeroBanner";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";


export default function Home() {
    return (
        <>
            <HeroSection />
            {/* <HeroBanner /> */}
            <AboutMeSection />
            <SkillsSection />
            <Projects />
            <ContactForm />
            <Footer />
        </>
    );
}
