import { useContext } from "react";
import { UserContext } from "../context/ThemeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const quotes = [
    "Believe in yourself",
    "Never give up",
    "Believe you can and you're halfway there.",
    "Choose to be optimistic,it feels better",
  ];

  const user = useContext(UserContext);
  const [randomQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <header className="flex items-center justify-center px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          {user.name}
        </h1>
        <p className="text-2xl opacity-80">
          {user.title}
        </p>
        <motion.div
          className="mt-6 max-w-xl"
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <AnimatePresence>
            <motion.p
              key={randomQuote}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-medium  text-sm  italic text-gray-700 dark:text-gray-200">
              💡 {randomQuote}
            </motion.p>
          </AnimatePresence>
        </motion.div>
        <div className="flex gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl bg-accent text-text hover:bg-accent/30 transition-all duration-500 ease-in-out">View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl border text-accent  hover:bg-accent/30 hover:text-black transition-all duration-500 ease-in-out">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}