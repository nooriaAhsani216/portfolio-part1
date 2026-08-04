import ProjectCards from "../components/ProjectCards";
import PROJECTS from "../data/projects";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "HTML", "CSS", "Javascript", "React"];
  const handleClick = (item) => {
    setFilter(item);
  };
  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === "All") return true;
    return item.techStack.includes(filter);
  });

  return (
    <section className="p-5">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl  text-center mb-3">
          Projects
        </h3>
        <div className="flex gap-3 justify-center flex-wrap p-4">
          {filters.map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`
                px-4 py-1 rounded-full border
                transition-all duration-300
                hover:border-accent
                cursor-pointer
                ${filter === item
                  ? "bg-accent border-primary text-white"
                  : ""
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
      <div className="container mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-xl text-white/70">
              No {filter} projects found
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {filteredProjects.map((project, i) => (
              <ProjectCards
                key={i}
                id={project.id}
                name={project.name}
                img={project.img}
                description={project.description}
                link={project.link}
                techStack={project.techStack}
                featured={project.featured}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}