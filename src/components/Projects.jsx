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
      description:"A movie streaming website built with HTML and Css",
      link:"https://nooriaahsani216.github.io/movie-theater-page/",
      techStack:["HTML","CSS"],
        featured:false
    },
     {
      name: "Larkhoad School",
       img: larkhaodImg,
       description:"An online school website",
        link:"https://nooriaahsani216.github.io/school-portal-project/",
       techStack:["HTML","CSS","Javascript"],
        featured:true
     },
    {
      name: "InvoiceFlow",
      img: invoiceImg,
      description: "An online invoice and client management system",
        link:"#",
       techStack:["HTML","CSS","Javascript"],
        featured:true
    }
  ]
  // const [filter,setFilter] = useState("All");
  // const filters = ["HTML","CSS","JavaScript","React"]
  return (
    <section className="p-10">
      {/* <div>
        {filters.map((item)=>(
          {item}
        ))}
      </div> */}
 <h2 className="text-white text-4xl text-center mb-5">Projects</h2>
    <div className="flex flex-wrap gap-4 justify-center">
        {PROJECTS.map((project, i) => {
        return (
          <ProjectCards
            key={i}
            name={project.name}
            img={project.img}
            description = {project.description}
            link = {project.link}
            techStack = {project.techStack}
            featured = {project.featured}

          />
        )
      })}
    </div>
    </section>
  )
}
