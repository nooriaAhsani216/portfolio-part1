import NAVBAR_DATA from "../data/navbar";
export default function Navbar(){
return(
    <nav className=" bg-gradient-to-b from-[#0a1f44] to-[#1a2f4a] shadow-md px-10 py-5 flex justify-center">
        {/* <div className="text-4xl">
            {NAVBAR_DATA.logo}
        </div> */}
        <ul className="flex gap-6">
           {NAVBAR_DATA.links.map((item,i) => {
            return(
                <li key={i} className=" text-sm md:text-base lg:text-xl text-white transition duration-300 hover:-translate-y-1  hover:text-[#D4AF37]  cursor-pointer">{item}</li>
            )
           })}
        </ul>
    </nav>
)
}