import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  useEffect(() => {
    document.title = "Ritadj Zekkour — Flutter Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}