import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  const iconStyle = `
    w-10 h-10  flex items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md`;
  return (
  <section>
    <h3 className="text-sm text-center mb-4 text-white">Follow Links</h3>
      <ul className="flex  gap-3 md:gap-4 items-center justify-center">
      <li>
        <a href="https://linkedin.com" className={iconStyle}>
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="https://github.com" className={iconStyle}>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="mailto:yourmail@gmail.com" className={iconStyle}>
          <MdEmail />
        </a>
      </li>
    </ul>
  </section>
  );
}