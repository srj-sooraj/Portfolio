import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Antigravity from "../Antigravity/Antigravity.jsx";

function Hero() {
  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack Developer"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && char < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, char + 1));
        setChar(char + 1);
      }, 80);
    } else if (deleting && char > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, char - 1));
        setChar(char - 1);
      }, 40);
    } else if (!deleting && char === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [char, deleting, index, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        
       <Antigravity
        count={500}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={0.6}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#8929ff"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={1}
        particleShape="capsule"
        fieldStrength={10}
      />

      {/* Glow Shapes */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[120px] opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[350px] h-[350px] bg-purple-600 rounded-full blur-[120px] opacity-20 bottom-20 right-20 animate-pulse"></div>

      <div className="text-center max-w-3xl relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          Available for opportunities
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          Hello, I'm
          <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Sooraj Suresh
          </span>
        </motion.h1>

        {/* Typing */}
        <div className="text-xl mt-4 text-purple-300 font-semibold h-8">
          {text}
        </div>

        <p className="mt-6 text-gray-400 leading-relaxed">
          I build modern, high-performance web applications using
          scalable architecture and clean UI principles.
          Focused on creating seamless digital experiences.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a
            href="https://github.com/srj-sooraj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-lg inline-block"
            >
            View Projects
          </a>

          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition">
            Contact Me
          </button>
        </div>

        <div className="mt-12 text-gray-500 text-sm animate-bounce">
          Scroll ↓
        </div>

      </div>
    
    </section>
  );
}

export default Hero;
