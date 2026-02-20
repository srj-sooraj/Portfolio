import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SkillBar({ name, percent, delay }) {
  const [fill, setFill] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setFill(percent);
          }, delay);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [percent, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{name}</span>
        <span className="text-gray-400 text-sm">{percent}%</span>
      </div>

      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-[2000ms] ease-out"
          style={{ width: `${fill}%` }}
        ></div>
      </div>
    </motion.div>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", percent: 85 },
    { name: "CSS", percent: 85 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 75 },
    { name: "Node.js", percent: 70 },
    { name: "Express", percent: 70 },
    { name: "MongoDB", percent: 70 },
    { name: "Tailwind CSS", percent: 80 }
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-white/3">
      <div className="max-w-4xl mx-auto">

        <span className="text-sm tracking-widest uppercase text-purple-400">
          Skills
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
          Technologies I work with
        </h2>

        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            percent={skill.percent}
            delay={index * 150}
          />
        ))}

      </div>
    </section>
  );
}

export default Skills;
