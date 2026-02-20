import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-white/3">
      <div className="max-w-5xl mx-auto text-center">

        <span className="text-sm tracking-widest uppercase text-purple-400">
          Contact
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          Have a project in mind or want to discuss an opportunity?
          Feel free to reach out. I’ll respond as soon as possible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

  <a
    href="mailto:soorajsuresh092@gmail.com"
    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg transition hover:-translate-y-2 hover:border-purple-400/40 text-center"
  >
    <div className="text-3xl mb-4">📧</div>
    <div className="text-gray-500 text-sm">Email</div>
    <div className="font-semibold mt-1">
      soorajsuresh092@gmail.com
    </div>
  </a>

  <a
    href="https://www.linkedin.com/in/soorajsuresh45/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg transition hover:-translate-y-2 hover:border-purple-400/40 text-center"
  >
    <div className="text-3xl mb-4">💼</div>
    <div className="text-gray-500 text-sm">LinkedIn</div>
    <div className="font-semibold mt-1">
      Connect with me
    </div>
  </a>

  <a
    href="https://github.com/srj-sooraj"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg transition hover:-translate-y-2 hover:border-purple-400/40 text-center"
  >
    <div className="text-3xl mb-4">💻</div>
    <div className="text-gray-500 text-sm">GitHub</div>
    <div className="font-semibold mt-1">
      View my code
    </div>
  </a>

</div>


      </div>
    </section>
  );
}

export default Contact;
