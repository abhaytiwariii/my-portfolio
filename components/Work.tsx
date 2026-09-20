"use client";

import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import { ProjectList } from "./ProjectCard";
import projects, { Project } from "./data/projects";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export default function Work() {
  const [filter, setFilter] = useState<Project["type"] | "all">("all");
  const [loadMore, setLoadMore] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  const visibleProjects = loadMore
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const filters = [
    { label: "All", value: "all" },
    { label: "Professional Projects", value: "Professional" },
    { label: "Personal Projects", value: "Personal" },
    { label: "In Progress", value: "In Progress" },
  ] as const;

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full overflow-hidden bg-background py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          className="relative h-32 md:h-40 lg:h-48 mb-10 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background watermark text */}
          <motion.span
            variants={fadeUp}
            custom={0}
            className="absolute inset-0 flex items-start justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-dusty/10 tracking-widest select-none"
          >
            PORTFOLIO
          </motion.span>

          {/* Foreground heading */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="absolute bottom-10 left-0 right-0 z-10 text-center text-4xl font-medium tracking-wide md:text-5xl lg:text-6xl text-black"
          >
            /WORK
          </motion.h2>
        </motion.div>

        {/* Filters + CTA */}
        <motion.div
          className="w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Mobile filters */}
            <div className="flex md:hidden flex-wrap items-center gap-2">
              {filters.map((item, i) => (
                <motion.div
                  key={item.value}
                  variants={fadeUp}
                  custom={i + 2}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={filter === item.value ? "outline" : "ghost"}
                    onClick={() => {
                      setFilter(item.value as Project["type"] | "all");
                      setLoadMore(false);
                    }}
                    className="px-3! py-1! min-h-10 rounded-full! w-auto!"
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Desktop filters */}
            <div className="hidden md:flex flex-wrap items-center gap-2">
              {filters.map((item, i) => (
                <motion.div key={item.value} variants={fadeUp} custom={i + 2}>
                  <Button
                    variant={filter === item.value ? "default" : "ghost"}
                    onClick={() => {
                      setFilter(item.value as Project["type"] | "all");
                      setLoadMore(false);
                    }}
                    className="relative group transform transition-all duration-300 hover:scale-105"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* View All CTA */}
            <motion.div variants={fadeUp} custom={6}>
              <Link
                href="https://github.com/abhaytiwariii"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex"
              >
                <Button
                  variant="outline"
                  className="text-black px-6! py-3! rounded-full!"
                >
                  View All Work <ArrowUpRight />
                </Button>
              </Link>
            </motion.div>
          </div>
          {/* Projects grid */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectList projects={visibleProjects} />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Load More Button */}
          <AnimatePresence>
            {filteredProjects.length > 4 && !loadMore && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center my-10"
              >
                <Button variant="filled" onClick={() => setLoadMore(true)}>
                  Load More
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
