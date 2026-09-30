"use client";

import { useState } from "react";
import { Project } from "./data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown, Building2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.08,
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
  const [showContribution, setShowContribution] = useState(false);

  const companyLabels: Record<string, string> = {
    "hb-gadget": "HB Gadget Tech",
    Labellift: "LabelLift",
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="
        group relative flex flex-col justify-between
        overflow-hidden rounded-2xl
        border border-border bg-surface
        shadow-xs transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-xl hover:border-black/20
      "
    >
      <div>
        {/* Project Image & Quick Links */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-accent/60">
          <Image
            src={project.img}
            alt={
              project.description
                ? `${project.title} screenshot — ${project.description}`
                : `${project.title} project preview screenshot`
            }
            fill
            className="
              object-cover object-top
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
          />

          {/* Badges Over Image */}
          <div className="absolute left-3 top-3 z-10 flex flex-wrap items-center gap-1.5">
            {project.type && (
              <span
                className="
                  rounded-full border border-border/80
                  bg-surface/90 backdrop-blur-md
                  px-3 py-1 text-[11px] font-semibold
                  text-foreground shadow-xs
                "
              >
                {project.type}
              </span>
            )}
            {project.company && (
              <span
                className="
                  inline-flex items-center gap-1
                  rounded-full border border-dark-slate/20
                  bg-dark-slate text-white
                  px-2.5 py-1 text-[11px] font-medium shadow-xs
                "
              >
                <Building2 className="h-3 w-3" />
                {companyLabels[project.company] || project.company}
              </span>
            )}
          </div>

          {/* Action Links (Live + GitHub) */}
          <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-border/80
                  bg-surface/90 text-foreground
                  shadow-sm backdrop-blur-md
                  transition-all duration-200
                  hover:bg-black hover:text-white hover:scale-105
                  focus-visible:ring-2 focus-visible:ring-black
                "
              >
                <SiGithub className="h-4 w-4" />
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site for ${project.title}`}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-border/80
                  bg-surface/90 text-foreground
                  shadow-sm backdrop-blur-md
                  transition-all duration-200
                  hover:bg-black hover:text-white hover:scale-105
                  focus-visible:ring-2 focus-visible:ring-black
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-dusty">
              Project #{String(project.id).padStart(2, "0")}
            </span>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-black transition-colors"
              >
                Live Preview <ArrowUpRight className="h-3 w-3" />
              </Link>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-secondary line-clamp-3">
            {project.description}
          </p>

          {/* Key Contributions Toggle */}
          {project.myContribution && (
            <div className="mt-4 pt-3 border-t border-border/60">
              <button
                type="button"
                onClick={() => setShowContribution((prev) => !prev)}
                aria-expanded={showContribution}
                className="group/contrib inline-flex items-center gap-1.5 text-xs font-semibold text-dusty hover:text-foreground transition-colors cursor-pointer"
              >
                <span>
                  {showContribution ? "Hide Contribution" : "Show Contribution"}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    showContribution ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showContribution && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2.5 rounded-xl bg-accent/40 p-3.5 text-xs leading-relaxed text-foreground border border-border/60">
                      <p className="font-semibold text-foreground-strong mb-1">
                        What I Built & Engineered:
                      </p>
                      <p className="text-secondary leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Tags Footer */}
      {project.tags && project.tags.length > 0 && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-md border border-border
                  bg-accent/40 px-2.5 py-1
                  text-[11px] font-medium text-foreground
                  transition-colors duration-150
                  hover:bg-accent hover:border-dusty/40
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
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
