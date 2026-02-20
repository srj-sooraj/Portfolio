import { motion } from "framer-motion";

function ProjectCard({ number, title, description, tech ,link}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden backdrop-blur-xl shadow-xl transition group"
    >
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Big Background Number */}
      <div className="absolute top-4 right-6 text-7xl font-bold text-white/5 select-none">
        {number}
      </div>

      <h3 className="text-2xl font-semibold mb-4 relative z-10">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mb-6 relative z-10">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-pink-400 font-medium relative z-10 group-hover:gap-4 transition-all duration-300"
      >
        View Project →
      </a>

    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <span className="text-sm tracking-widest uppercase text-pink-400">
          Portfolio
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            number="01"
            title="E-Commerce Platform"
            description="A full-stack MERN marketplace with secure authentication, real-time inventory management, payment integration and admin analytics dashboard."
            tech={["React", "Node.js", "MongoDB", "JWT"]}
            link="https://github.com/srj-sooraj/Connecta-SocialMedia-Express"
          />

          <ProjectCard
            number="02"
            title="Daily Routine Manager"
            description="Task management application with authentication, CRUD operations and responsive design built for performance and usability."
            tech={["React", "Express", "MongoDB","Node"]}
            link="https://github.com/srj-sooraj/Daily-Routine-Manager"
          />

          <ProjectCard
            number="03"
            title="Connecta Social API"
            description="RESTful backend API implementing JWT authentication, scalable architecture and structured database design."
            tech={["Node.js", "Express", "MongoDB"]}
            link="https://github.com/srj-sooraj/Connecta-SocialMedia-Express"
          />

          <ProjectCard
            number="04"
            title="Student Mark Report"
            description="Modern analytics dashboard..."
            tech={["React", "Tailwind", "Charts"]}
            link="https://github.com/srj-sooraj/STUDENT-MARK-REPORT_EXRPESS"
          />

        </div>

      </div>
    </section>
  );
}

export default Projects;
