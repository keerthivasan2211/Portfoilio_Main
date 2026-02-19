import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Social from "./components/SocialMedia"
import Education from "./components/Education";

export default function Home({children}) {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Services />
        <About />
        <Education/>
        <Projects />
        <Contact />
        <Social/>

      </main>
    </>
  );
  return children
}