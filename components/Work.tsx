"use client";

import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import { ProjectList } from "./ProjectCard";
import projects, { Project } from "./data/projects";
import { useState } from "react";

export default function Work() {
  const [filter, setFilter] = useState<Project["type"] | "all">("Professional");

  const filterProjectsByType = (type: Project["type"] | "all") => {
    const filteredProjects =
      type === "all"
        ? projects
        : projects.filter((project) => project.type === type);

    return filteredProjects;
  };

  return (
    <section
      id="work"
      className="flex w-full justify-center items-center overflow-hidden bg-background pt-10 pb-10 md:pt-20 md:pb-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col relative">
          <div className="opacity-5 tracking-widest uppercase text-[10vw]">
            Portfolio
          </div>
          <h2 className="relative -top-27 text-[4vw] text-black font-medium">
            /WORK
          </h2>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 justify-between items-center">
              <Button
                variant="ghost"
                className="text-black"
                onClick={() => setFilter("all")}
              >
                All
              </Button>

              <Button
                variant="ghost"
                className="text-black"
                onClick={() => setFilter("Professional")}
              >
                Professional Projects
              </Button>
              <Button
                variant="ghost"
                className="text-black"
                onClick={() => setFilter("Personal")}
              >
                Personal Projects
              </Button>
            </div>
            <Link
              href="https://github.com/abhaytiwariii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-black px-6! py-3! rounded-full!"
              >
                View All Work <ArrowUpRight rotate={90} />
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex w-full justify-between gap-4">
            <ProjectList projects={filterProjectsByType(filter)} />
          </div>
        </div>
      </div>
    </section>
  );
}
