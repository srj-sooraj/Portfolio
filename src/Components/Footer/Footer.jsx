function Footer() {
  return (
    <footer className="bg-[#111118] border-t border-white/5 mt-24">
      
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">
            srj<span className="text-red-400">.</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-sm">
            Building modern, scalable and interactive web applications 
            with clean UI and smooth user experience.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#home" className="hover:text-white transition duration-300">Home</a>
          <a href="#about" className="hover:text-white transition duration-300">About</a>
          <a href="#projects" className="hover:text-white transition duration-300">Work</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} srj. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
