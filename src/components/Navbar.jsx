import { useContext, useState } from "react";
import NAVBAR_DATA from "../data/navbar";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 left-0 right-0 bg-primary flex items-center justify-between px-6 py-8 shadow-lg text-foreground"
        >
            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold">
                N<span className="text-accent">Dev</span>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
                {NAVBAR_DATA.links.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-accent font-semibold border-b-2"
                                    : "hover:text-accent transition"
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>


            <div className="flex items-center gap-4">

                {/* Theme Button */}
                <button
                    onClick={toggleTheme}
                    className="text-xl border px-3 py-2 rounded-xl hover:scale-110 transition duration-300"
                >
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                </button>


                {/* Mobile Button */}
                <button
                    className="lg:hidden text-xl"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 w-full bg-card z-50 lg:hidden"
                >
                    <ul className="flex flex-col items-center py-6 gap-4">
                        {NAVBAR_DATA.links.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                isActive
                                    ? "text-accent font-semibold"
                                    : "hover:text-accent transition text-white"
                            }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

        </motion.nav>
    );
}