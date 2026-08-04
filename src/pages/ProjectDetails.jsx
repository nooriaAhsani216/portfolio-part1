import {useParams } from "react-router-dom";
import PROJECTS from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import TechBadge from "../components/TechBadge";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = PROJECTS.find(
    (p) => p.id === Number(id)
  );
  if (!project) {
    return (
      <p className="text-center py-10">
        Project not found
      </p>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex flex-col gap-12 rounded-3xl border border-white/10 bg-card backdrop-blur-md shadow-xl p-5">
        <img src={project.img} alt={project.name} className="w-full rounded-xl object-cover" />
        <div className="space-y-6 text-left">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-white">{project.name}</h1>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30">
              {project.status}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-7">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <TechBadge key={tech} Text={tech} />
            ))}
          </div>
              <div className="flex gap-4 mb-4">
            <a
              href="#"
              rel="noopener noreferrer"
              className="bg-primary text-white flex items-center gap-2 px-5 py-3 rounded-full"
            >
              <FaGithub />
              View Code
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              className="border border-primary text-white flex items-center gap-2 px-5 py-3 rounded-full"
            >
              <FiExternalLink />
              Live Demo
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">
                Progress
              </span>
              <span className="text-primary">
                {project.progress}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10 mb-2">
              <div role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100" className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${project.progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
