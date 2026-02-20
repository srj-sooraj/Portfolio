import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed top-6 right-6 z-[9999]">
      <div
        onClick={() => setDark(!dark)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500
        ${dark 
          ? "bg-gradient-to-r from-purple-600 to-pink-500" 
          : "bg-gray-300"}`}
      >
        <motion.div
          animate={{ x: dark ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center text-sm"
        >
          {dark ? "🌙" : "☀️"}
        </motion.div>
      </div>
    </div>
  );
}

export default ThemeToggle;
