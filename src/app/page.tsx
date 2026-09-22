import About from "./Components/About";
import BackToTop from "./Components/BackToTop";
import CertificationsAchievements from "./Components/CertificationsAchievements";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Interests from "./Components/Interests";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Education />
      <Skills />
      <CertificationsAchievements />
      <Contact />
      <section className="fixed bottom-4 right-4">
        <BackToTop />
      </section>
    </>
  )
}
