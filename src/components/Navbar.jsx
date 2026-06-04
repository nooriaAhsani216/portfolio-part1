import NAVBAR_DATA from "../data/navbar";
import { FaMoon, FaSun } from "react-icons/fa";
export default function Navbar({ theme,toggleTheme }){
return(
    <nav className="shadow-md px-10 py-5 flex justify-between ">
        {/* <div className="text-4xl">
            {NAVBAR_DATA.logo}
        </div> */}
        <ul className="flex gap-6 ">
           {NAVBAR_DATA.links.map((item,i) => {
            return(
                <li key={i} className=" text-sm md:text-base lg:text-xl text-white transition duration-300 hover:-translate-y-1  hover:text-[#D4AF37]  cursor-pointer">{item}</li>
            )
           })}
        </ul>
     <div>
        <button onClick={toggleTheme}>
       {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
     </div>
    </nav>
)
}