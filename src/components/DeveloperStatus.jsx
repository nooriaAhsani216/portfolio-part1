import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSyncAlt } from "react-icons/fa";

export default function DeveloperStatus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateMessages = [
    "🚀 Learning Next.js",
    "🌙 Added Dark Mode",
    "🎨 Improving UI Design",
    "⚡ Building React Apps",
    "🤖 Exploring AI-powered Web Development",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === updateMessages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250 }}
      className=" w-full max-w-72 mx-auto rounded-2xl  px-6 py-5 shadow-lg"
    >
      <div/>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
          >
            <FaSyncAlt />
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted">
              Current Focus
            </p>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="mt-1 text-black"
              >
                {updateMessages[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}