import { useContext } from "react";
import NAVBAR_DATA from "../data/navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
export default function Navbar() {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <nav className="shadow-md px-10 py-5 flex justify-between ">
            {/* <div className="text-4xl">
            {NAVBAR_DATA.logo}
        </div> */}
            <ul className="flex gap-6 ">
                {NAVBAR_DATA.links.map((item, i) => {
                    return (
                        <li key={i}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-sm md:text-base lg:text-xl transition duration-300 cursor-pointer 
                                     ${isActive ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37] hover:-translate-y-1"}`
                                }>{item.name}</NavLink>
                        </li>

                    )
                })}
            </ul>
            <div>
                <button onClick={toggleTheme} className="text-xl hover:scale-110 transition">
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    )
}