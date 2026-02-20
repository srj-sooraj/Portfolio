import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500  
      ${scrolled 
        ? "bg-black/40 backdrop-blur-xl shadow-lg border-b border-white/10" 
        : "bg-transparent"}
      flex justify-between px-10 py-4`}
    >
      <h1 className="font-bold text-xl tracking-wider cursor-pointer">
        Sooraj
      </h1>

        
      <ul className="flex gap-8 text-sm uppercase tracking-widest">
        <li 
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-400 transition cursor-pointer"
        >
          About
        </li>

        <li 
          onClick={() => scrollToSection("skills")}
          className="hover:text-blue-400 transition cursor-pointer"
        >
          Skills
        </li>

        <li 
          onClick={() => scrollToSection("projects")}
          className="hover:text-blue-400 transition cursor-pointer"
        >
          Projects
        </li>

        <li 
          onClick={() => scrollToSection("contact")}
          className="hover:text-blue-400 transition cursor-pointer"
        >
          Contact
        </li>
        <li className="pl-15">  
          <ThemeToggle/>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
