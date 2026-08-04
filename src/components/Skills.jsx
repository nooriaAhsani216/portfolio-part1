import SKILLS from "../data/skill"
import { motion } from "framer-motion";

export default function Skills() {
 

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-xl text-center mb-4">My Skills</h2>

      <div>
        {SKILLS.map((skill) => (
          <div key={skill.name} className="mb-4 group">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full rounded-full h-2">
              <motion.div
                className="bg-accent h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

            </div>
        <p
  className=" opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2 px-4 py-3 text-sm text-muted 
     border-l-2 border-lg border-l-accent shadow-md  translate-y-2 group-hover:translate-y-0
  "
>
  {skill.fact}
</p>
          </div>
        ))}
      </div>
    </section>
  )
}
