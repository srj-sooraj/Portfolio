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
    <div
      onClick={() => setDark(!dark)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500
      ${
        dark
          ? "bg-gradient-to-r from-purple-600 to-pink-500"
          : "bg-gray-300"
      }`}
    >
      <motion.div
        animate={{ x: dark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-xs"
      >
        {dark ? "🌙" : "☀️"}
      </motion.div>
    </div>
  );
}

export default ThemeToggle;