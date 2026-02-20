import { motion } from "framer-motion";
import Lottie from "lottie-react";
import runner from "../../assets/character.json";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-[#0f0c29] via-[#1b1b3a] to-[#0b0f19] flex flex-col items-center justify-center z-[9999]"
    >
      {/* Running Animation */}
      <div className="w-72 md:w-96">
        <Lottie animationData={runner} loop={true} />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 tracking-widest text-sm uppercase"
      >
        Loading Portfolio...
      </motion.p>

      {/* Animated Progress Line */}
      <div className="w-48 h-[2px] bg-white/10 mt-6 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear"
          }}
          className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}

export default Loader;
