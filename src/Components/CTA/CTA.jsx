import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 left-1/2 -translate-x-1/2 top-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's build something
          <span className="block bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            extraordinary together
          </span>
        </h2>

        <p className="text-gray-400 mb-10">
          Whether you have an idea, a project, or just want to collaborate —
          I'm open to opportunities and creative discussions.
        </p>

        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-xl">
          Start a Conversation
        </button>
      </motion.div>

    </section>
  );
}

export default CTA;
