import { BackgroundScene } from "./components/Scene3D";
import { ScrollProgress, CursorGlow, Nebula } from "./components/Effects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-void min-h-screen">
      <Nebula />
      <BackgroundScene />
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-10">
        {/* <Navbar /> */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
