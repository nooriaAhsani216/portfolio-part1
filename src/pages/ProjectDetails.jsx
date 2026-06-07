import { useParams } from "react-router-dom"
import PROJECTS from "../data/projects";
import Button from "../components/Button";


export default function ProjectDetails() {
    const {id} = useParams();
    const project = PROJECTS.find((p)=> p.id === Number(id));
    if (!project) {
  return <p>Project not found</p>;
}
  return (
   <div className="p-10 text-white max-w-4xl mx-auto">
   <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
       <div>
 <img
        src={project.img}
        className="w-[300px] h-[400px] object-cover rounded-xl"
      />
      </div>
  <div className="space-y-4">
         <h1 className="text-3xl font-bold">
        {project.name}
      </h1>
             <div className="mt-4">
        <span className="px-3 py-1 bg-green-500 rounded">
          {project.status}
        </span>
      </div>
        <p className="text-gray-300">
        {project.description}
      </p>
  <div className="flex gap-3">
       <Button>GitHub</Button>
       <Button>Demo Link</Button>
      </div>
  </div>
     
    </div>
         
           
    
       
      {/* <div className="mt-5">
        <h3 className="font-bold mb-2">Tech Stack:</h3>
        <div className="flex gap-3 flex-wrap">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-white/10 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div> */}
      
    </div>
  )
}
