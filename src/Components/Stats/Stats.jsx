import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible, target]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl shadow-lg transition"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
        {count}+
      </div>
      <div className="text-gray-400 mt-2 text-sm tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

function Stats() {
  return (
    <section className="py-24 px-6 bg-white/3">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <Counter target={15} label="Projects Completed" />
        <Counter target={12} label="Technologies Used" />
        <Counter target={100} label="Dedication Level" />

      </div>
    </section>
  );
}

export default Stats;
