import ProjectCards from "./ProjectCards";
import cinemaImg from "../assets/images/pamir-cinema.png"
import larkhaodImg from "../assets/images/larkoad.png"
import invoiceImg from "../assets/images/invoiceFlow.png"
import { useState } from "react";


export default function Projects() {
  const PROJECTS = [
    {
      name: "Pamir Cinema",
      img: cinemaImg,
      description: "A movie streaming website built with HTML and Css",
      link: "https://nooriaahsani216.github.io/movie-theater-page/",
      techStack: ["HTML", "CSS"],
      featured: false
    },
    {
      name: "Larkhoad School",
      img: larkhaodImg,
      description: "An online school website",
      link: "https://nooriaahsani216.github.io/school-portal-project/",
      techStack: ["HTML", "CSS", "Javascript"],
      featured: true
    },
    {
      name: "InvoiceFlow",
      img: invoiceImg,
      description: "An online invoice and client management system",
      link: "#",
      techStack: ["HTML", "CSS", "Javascript"],
      featured: true
    }
  ]
  const [filter, setFilter] = useState("All");
  const filters = ["All", "HTML", "CSS", "Javascript", "React"];
  const handleClick = (item) => {
    setFilter(item)
  }
  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === "All") {
      return true;
    }
    return item.techStack.includes(filter);
  })
  return (
    <section className="p-10">
      <div className="w-full max-w-md mx-auto ">
        <div className="flex gap-3 justify-center flex-wrap p-4">
          {filters.map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`
  px-4 py-1 rounded-full border
  transition-all duration-300
  hover:border-[#D4AF37] hover:text-white
  cursor-pointer
  ${filter === item
                  ? "bg-[#D4AF37] border-[#D4AF37] text-white"
                  : ""
                }
`}>{item}</button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {filteredProjects.length === 0 ? (
            <div className="text-center mt-10">
              <p className="text-xl">
                 No {filter} projects found
              </p>
            </div>
          )
            :
            (
              filteredProjects.map((project, i) => {
                return (
                  <ProjectCards
                    key={i}
                    name={project.name}
                    img={project.img}
                    description={project.description}
                    link={project.link}
                    techStack={project.techStack}
                    featured={project.featured}

                  />
                )
              })
            )
          }
        </div>
      </div>
    </section>
  )
}
