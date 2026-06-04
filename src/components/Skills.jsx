
import SKILLS from "../data/skill"

export default function Skills() {
  return (
    <div className="w-full max-w-md mx-auto">
        <h2  className="text-3xl font-bold text-center mb-6">My Skills</h2>
{SKILLS.map((skill) => (
  <div key={skill.name} className="mb-4 group">
    <div className="flex justify-between mb-1">
      <span>{skill.name}</span>
      <span>{skill.level}%</span>
    </div>

    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className="bg-yellow-500 h-3 rounded-full transition-all duration-1000"
        style={{ width: `${skill.level}%` }}
      />
         
    </div>
     <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2 text-sm text-gray-500">
      {skill.fact}
    </p>
  </div>
))}
    </div>
  )
}
