import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

export default function ProjectCards({
  id,
  name,
  img,
  description,
  techStack,
  featured
}) {
  return (
    <div className="bg-card group relative overflow-hidden rounded-2xl  border  shadow-lg transition-all duration-300 hover:-translate-y-2   hover:border-primary md:w-70 lg:w-70">

      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden p-2 ">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover  rounded-2xl"
        />
        {/* overlay */}
        <div className="absolute" />
        {/* Featured badge */}
        {featured && (
          <span className="absolute top-2 left-2 rounded-full  bg-primary px-2 sm:px-3 py-1 text-xs text-black  shadow-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition">
          {name}
        </h3>

        <p className="text-[11px] sm:text-xs md:text-sm text-white/70 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
          {techStack.map((item, i) => (
            <TechBadge key={i} Text={item} />
          ))}
        </div>

        {/* Button */}
        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center gap-1 pt-2 sm:pt-3 text-xs sm:text-sm font-medium text-muted hover:text-primary transition"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
}