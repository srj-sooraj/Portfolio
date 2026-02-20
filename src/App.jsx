import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Stats from "./Components/Stats/Stats.jsx";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress.jsx";
import CTA from "./Components/CTA/CTA.jsx";
import CustomCursor from "./Components/CustomCursor/CustomCursor.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Loader from "./Components/Loader/Loading.jsx";
// import ThemeToggle from "./Components/ThemeToggle/ThemeToggle.jsx";
function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-black dark:text-white transition-colors duration-500">

        {loading && <Loader />}
      <div className="ai-background"></div>
      <ScrollProgress />
      <CustomCursor />
      
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
