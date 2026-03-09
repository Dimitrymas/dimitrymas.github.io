import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[960px] mx-auto px-6 md:px-8">
        <Hero />
        <Projects />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  );
}
