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
  hidden: { opacity: 0, y: 20 },
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

type FilterValue = Project["type"] | Project["company"] | "all";

export default function Work() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [loadMore, setLoadMore] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.type === filter || project.company === filter,
        );

  const visibleProjects = loadMore
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const filters: { label: string; value: FilterValue }[] = [
    { label: "All", value: "all" },
    { label: "Professional", value: "Professional" },
    { label: "Personal", value: "Personal" },
    { label: "In Progress", value: "In Progress" },
    { label: "HB Gadget Technology", value: "hb-gadget" },
    { label: "LabelLift", value: "Labellift" },
  ];

  const getFilterCount = (val: FilterValue) => {
    if (val === "all") return projects.length;
    return projects.filter((p) => p.type === val || p.company === val).length;
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full overflow-hidden bg-background py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Header / Watermark */}
        <motion.div
          className="relative h-32 md:h-40 lg:h-48 mb-10 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background watermark text */}
          <motion.span
            variants={fadeUp}
            custom={0}
            className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-dusty/10 font-archivo tracking-widest select-none pointer-events-none"
          >
            PORTFOLIO
          </motion.span>

          {/* Foreground heading */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="absolute bottom-3 left-0 right-0 z-10 text-center text-4xl font-medium tracking-wide md:text-5xl lg:text-6xl text-black"
          >
            /WORK
          </motion.h2>
        </motion.div>

        {/* Filter Navigation Bar */}
        <motion.div
          className="w-full space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-border pb-5">
            {/* Scrollable Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
              {filters.map((item) => {
                const isActive = filter === item.value;
                const count = getFilterCount(item.value);

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setFilter(item.value);
                      setLoadMore(false);
                    }}
                    className={`
                      relative inline-flex items-center gap-2 rounded-full px-4 py-2
                      text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap
                      ${
                        isActive
                          ? "text-foreground bg-dusty/50"
                          : "text-secondary hover:text-foreground hover:bg-black/5"
                      }
                    `}
                  >
                    {/* Animated pill background indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeWorkFilterPill"
                        className="absolute inset-0 rounded-full bg-dark-slate shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    <span
                      className={`
                        relative z-10 rounded-full px-1.5 py-0.5 text-[10px] font-bold transition-colors
                        ${
                          isActive
                            ? "bg-white/25 text-foreground"
                            : "bg-black/5 text-dusty"
                        }
                      `}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View All GitHub CTA */}
            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 lg:pt-0 xl:border-none lg:border-l lg:pl-3">
              <span className="text-xs text-dusty font-medium">
                Showing {visibleProjects.length} of {filteredProjects.length}
              </span>
              <Link
                href="https://github.com/abhaytiwariii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground shadow-xs transition-all hover:border-black/30 hover:shadow-md"
              >
                <span>All Repositories</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {visibleProjects.length > 0 ? (
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectList projects={visibleProjects} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-dashed border-border p-12 text-center"
                >
                  <p className="text-secondary text-sm">
                    No projects found matching this filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className="mt-3 text-xs font-semibold text-black underline underline-offset-4 cursor-pointer"
                  >
                    Reset Filter
                  </button>
                </motion.div>
              )}
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
                className="flex flex-col items-center justify-center gap-2 pt-6 pb-2"
              >
                <Button
                  variant="filled"
                  onClick={() => setLoadMore(true)}
                  className="rounded-full! px-8! py-3! text-sm!"
                >
                  <span>
                    Load More Projects ({filteredProjects.length - 4} more)
                  </span>
                </Button>
                <p className="text-xs text-dusty">
                  Showing 4 of {filteredProjects.length} total projects in this
                  category
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
