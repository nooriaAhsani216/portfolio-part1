import aboutImg from "../assets/images/me.jpg"
import Skills from "../components/Skills"
import {
  FaCode,
  FaBook,
  FaCamera,
  FaCoffee
} from "react-icons/fa";

export default function About() {
  const MY_HOBBIES = [
    {
      icon: <FaCode />,
      title: "Coding"
    },
    {
      icon: <FaBook />,
      title: "Reading"
    },
    {
      icon: <FaCamera />,
      title: "Photography"
    },
    {
      icon: <FaCoffee />,
      title: "Drinking Coffee"
    }
  ]
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 space-y-20">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={aboutImg}
            alt="about"
            className=" w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl
                        shadow-[10px_20px_30px_var(--accent)] hover:scale-105  transition-all duration-500 "/>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium  text-foreground mb-5 ">About <span className="text-accent">Me</span></h2>
          <div className="p-5 rounded-2xl shadow-md border border-accent">
            <p className="dark:text-white text-base leading-relaxed ">
             I'm a passionate Frontend Developer dedicated to building modern, user-friendly web applications. I enjoy learning new technologies, solving problems, and continuously improving my skills
            </p>
          </div>  
            <div className="space-y-4">
              <h3 className="text-lg mb-4 text-center text-forgeround">
                What I <span className="text-accent">enjoys</span>
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {MY_HOBBIES.map((item) => (
                  <li
                    key={item.title}
                    className="
                    border p-6 rounded-2xl
                    flex items-center gap-3
                    hover:-translate-y-2
                   hover:border-accent
                   transition-all duration-300"> <span className="text-2xl text-accent">
                      {item.icon}
                    </span>
                    <span className="dark:text-white">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
      <Skills />
    </section>
  )
}
