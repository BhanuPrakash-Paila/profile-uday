import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Awards from "./components/Awards";
import Stats from "./components/Stats";
import SocialFeed from "./components/SocialFeed";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <BeforeAfterSlider />
        <Awards />
        <Stats />
        <SocialFeed />
        <Contact />
      </main>
    </div>
  );
}
