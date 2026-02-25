import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close sidebar after click
    }
  };

  return (
    <>
      <nav
          className={`fixed w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl shadow-lg border-b border-white/10"
              : "bg-transparent"
          }
          flex items-center justify-between px-8 md:px-16 py-4`}
        >
        <h1 className="font-bold text-xl tracking-wider cursor-pointer">
          Sooraj
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              {item}
            </li>
          ))}

          <div className="ml-4 flex items-center">
            <ThemeToggle />
          </div>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer z-[100]"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-[#0B0F19] text-white z-50 p-8 flex flex-col gap-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="flex items-center justify-between">
                <ThemeToggle />

                <div
                  className="cursor-pointer text-2xl"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </div>
              </div>

              {["about", "skills", "projects", "contact"].map((item) => (
                <div
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="uppercase tracking-widest cursor-pointer hover:text-blue-400 transition"
                >
                  {item}
                </div>
              ))}

             
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;