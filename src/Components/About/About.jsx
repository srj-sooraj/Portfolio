import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-28 px-6 relative">

      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <span className="text-sm tracking-widest uppercase text-pink-400">
          About
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mt-4 mb-16"
        >
          Building digital experiences that feel
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            {" "}modern & powerful
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a passionate <span className="text-white font-semibold">MERN Stack Developer</span> 
              focused on building scalable, performant and visually refined web applications.
              I enjoy transforming ideas into interactive digital products
              with clean architecture and smooth user experience.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              From designing responsive interfaces to developing secure backend APIs,
              I approach every project with performance, maintainability and elegance in mind.
              My goal is not just to build applications — but to build meaningful experiences.
            </p>

            {/* Highlights */}
            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Full Stack Development</h4>
                  <p className="text-gray-500 text-sm">
                    End-to-end scalable web applications
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Modern UI / UX</h4>
                  <p className="text-gray-500 text-sm">
                    Clean interfaces with smooth interaction
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-pink-500">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Clean & Maintainable Code</h4>
                  <p className="text-gray-500 text-sm">
                    Structured architecture & best practices
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CODE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <pre className="text-sm text-gray-300 leading-relaxed font-mono">
{`const developer = {
  name: "Sooraj Suresh",
  role: "MERN Developer",
  stack: ["React", "Node", "MongoDB"],
  passion: "Building impactful products",
  status: "Available"
};`}
            </pre>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;
