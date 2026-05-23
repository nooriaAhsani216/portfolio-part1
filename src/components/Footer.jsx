import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
   
  return (
    <footer className="w-full border-t border-[#D4AF37] p-6 text-center bg-[#1a2f4a]">
      <ul className="flex gap-3 items-center justify-center mt-5 text-[#D4AF37] cursor-pointer">
                <li><FaLinkedinIn size={30}/></li>
                <li><FaGithub size={30}/></li>
                <li><MdEmail size={30} /></li>
            </ul>
            <p className="text-gray-500 text-2xl mt-5">{new Date().getFullYear()} Nooria</p>
    </footer>
  )
}
