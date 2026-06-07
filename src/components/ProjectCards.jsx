import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

export default function ProjectCards({ id,name, img, description, link, techStack, featured }) {
  const cardBase =
    " w-80 rounded-xl border border-[#D4AF37]/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ";
  const badge =
    "absolute top-2 left-2 px-3 py-2 text-xs font-bold rounded bg-[#D4AF37]";
  const tag =
    "text-white text-xs bg-white/10 px-2 py-1 rounded";

  const button =
    "inline-block mt-5 px-4 py-2 text-[#D4AF37] border-2 rounded-md border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition";
  return (
    <div className={cardBase}>

      <div className="relative overflow-hidden rounded-lg">
        <img src={img} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
        {featured ? (
          <span className={badge}>Featured</span>
        ) : null}
      </div>
      <div className=" text-white p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
        <div className="flex gap-3">
          {techStack.map((item, i) => {
            return (
              <TechBadge key={i} Text={item}/>
            )
          })}
        </div>
        <Link
         to={`/projects/${id}`}
          className={button}
        >View Details →
        </Link>
      </div>
    </div>
  )
}
