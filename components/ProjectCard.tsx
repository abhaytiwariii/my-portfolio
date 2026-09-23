import { Project } from "./data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="
        group relative overflow-hidden rounded-lg
        border border-border bg-surface
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-accent">
        <Image
          src={project.img}
          alt={
            project.description
              ? `${project.title} screenshot — ${project.description}`
              : `${project.title} project preview screenshot`
          }
          className="
            aspect-16/10 w-full
            object-cover object-top
            transition-all duration-500
            group-hover:scale-[1.03]
            group-hover:brightness-90
          "
        />

        {/* Open Project */}
        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="
              absolute left-1/2 top-1/2 z-10
              flex h-11 w-11
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-surface text-foreground
              text-xl font-bold
              shadow-md
              opacity-0 scale-90
              transition-all duration-300
              group-hover:scale-100 group-hover:opacity-100
              hover:bg-accent hover:shadow-lg
              focus-visible:scale-100 focus-visible:opacity-100
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray
            "
          >
            ↗
          </Link>
        )}

        {/* Project Type Badge */}
        {project.type && (
          <span
            className="
              absolute left-3 top-3
              rounded-full border border-border
              bg-surface/95 px-3 py-1
              text-xs text-foreground shadow-sm backdrop-blur-sm
            "
          >
            {project.type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-dusty">
            Project
          </span>
          <span className="text-xs text-dusty">
            #{String(project.id).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-xl font-medium tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-secondary">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full border border-border
                  bg-accent/40 px-3 py-1.5
                  text-xs text-foreground
                  transition-colors duration-200
                  group-hover:border-dusty
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
