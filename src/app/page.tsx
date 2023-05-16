import About from "./Components/About";
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
      <section className="fixed top-1/3 right-4">
        <Socials />
      </section>
      <section className="flex flex-col gap-10 my-8 lg:mx-16 px-0 lg:px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}
