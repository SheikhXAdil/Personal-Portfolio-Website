import About from "./Components/About";
import BackToTop from "./Components/BackToTop";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Socials from "./Components/Socials";

export default function Home() {
  return (
    <main>
      <section className="fixed top-1/4 right-4">
        <Socials />
      </section>
      <section className="flex flex-col gap-4 md:gap-10 my-4 md:my-8 lg:mx-16 lg:px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </section>
      <section className="fixed bottom-4 right-4">
        <BackToTop />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}
