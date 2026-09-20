"use client";

import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import { ProjectList } from "./ProjectCard";
import projects, { Project } from "./data/projects";
import { useState } from "react";

export default function Work() {
  const [filter, setFilter] = useState<Project["type"] | "all">("Professional");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <section
      id="work"
      className="w-full overflow-hidden bg-background py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="relative h-32 md:h-40 lg:h-48 mb-10 md:mb-16 ">
          <span className="absolute inset-0 flex items-start justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-dusty/10 tracking-widest select-none">
            PORTFOLIO
          </span>

          <h2 className="absolute bottom-10 left-0 right-0 z-10 text-center text-4xl font-medium tracking-wide md:text-5xl lg:text-6xl text-black">
            /WORK
          </h2>
        </div>

        {/* Filters */}
        <div className="w-full">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex md:hidden flex-wrap items-center gap-2">
              <Button
                variant={filter === "all" ? "outline" : "ghost"}
                onClick={() => setFilter("all")}
                className="px-3! py-1! min-h-10 rounded-full! w-auto!"
              >
                All
              </Button>

              <Button
                variant={filter === "Professional" ? "outline" : "ghost"}
                onClick={() => setFilter("Professional")}
                className="px-3! py-1! min-h-10 rounded-full! w-auto!"
              >
                Professional Projects
              </Button>

              <Button
                variant={filter === "Personal" ? "outline" : "ghost"}
                onClick={() => setFilter("Personal")}
                className="px-3! py-1! min-h-10 rounded-full! w-auto!"
              >
                Personal Projects
              </Button>

              <Button
                variant={filter === "In Progress" ? "outline" : "ghost"}
                onClick={() => setFilter("In Progress")}
                className="px-3! py-1! min-h-10 rounded-full! w-auto!"
              >
                In Progress
              </Button>
            </div>

            <div className="hidden md:flex flex-wrap items-center gap-2">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => setFilter("all")}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                All
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
              </Button>

              <Button
                variant={filter === "Professional" ? "default" : "ghost"}
                onClick={() => setFilter("Professional")}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                Professional Projects
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
              </Button>

              <Button
                variant={filter === "Personal" ? "default" : "ghost"}
                onClick={() => setFilter("Personal")}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                Personal Projects
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
              </Button>

              <Button
                variant={filter === "In Progress" ? "default" : "ghost"}
                onClick={() => setFilter("In Progress")}
                className="relative group transform transition-all duration-300 hover:scale-105"
              >
                In Progress
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
              </Button>
            </div>

            <Link
              href="https://github.com/abhaytiwariii"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex "
            >
              <Button
                variant="outline"
                className="text-black px-6! py-3! rounded-full!"
              >
                View All Work <ArrowUpRight />
              </Button>
            </Link>
          </div>

          {/* Projects */}
          <div className="mt-8">
            <ProjectList projects={filteredProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
