"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { ExperienceItem } from "../data/experience";

type ExperienceRowProps = {
  item: ExperienceItem;
  index: number;
};

export default function ExperienceRow({ item, index }: ExperienceRowProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="
        group relative rounded-2xl
        border border-white/10 bg-white/[0.03]
        p-6 md:p-8
        transition-all duration-300
        hover:border-white/20 hover:bg-white/[0.05]
        shadow-sm hover:shadow-xl hover:shadow-black/20
      "
    >
      {/* Header Info */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 space-y-2">
          {/* Company & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {item.companyUrl ? (
              <Link
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-dusty transition-colors"
              >
                <span>{item.company}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 opacity-70 group-hover/link:opacity-100" />
              </Link>
            ) : (
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {item.company}
              </h3>
            )}

            {/* Work Type Pill */}
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-surface-muted/90">
              {item.workType}
            </span>
          </div>

          {/* Role */}
          <p className="text-base sm:text-lg font-medium text-dusty tracking-normal">
            {item.role}
          </p>
        </div>

        {/* Duration & Location */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-surface-muted/70 md:flex-col md:items-end md:gap-1.5">
          <div className="inline-flex items-center gap-1.5 font-medium">
            <Calendar className="h-3.5 w-3.5 text-dusty" />
            <span>{item.duration}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-surface-muted/60">
            <MapPin className="h-3.5 w-3.5 text-dusty/80" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-surface-muted/80">
        {item.summary}
      </p>

      {/* Tech Stack Pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-surface-muted/90 transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable Key Contributions / Highlights */}
      <div className="mt-5 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="group/btn inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-dusty hover:text-white transition-colors cursor-pointer"
        >
          <span>
            {isExpanded
              ? "Hide Key Highlights"
              : "View Key Highlights & Impact"}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180 text-white" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-dusty">
                  Key Technical Achievements
                </h4>
                <ul className="space-y-2.5">
                  {item.keyContributions.map((contrib, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-surface-muted/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>

                {/* Linked projects if any */}
                {item.projectsLinked && item.projectsLinked.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-dusty font-medium">Shipped on:</span>
                    {item.projectsLinked.map((proj, pIdx) =>
                      proj.link ? (
                        <Link
                          key={pIdx}
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-surface-muted hover:bg-white/10 hover:text-white transition-colors underline-offset-2 hover:underline"
                        >
                          <span>{proj.title}</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      ) : (
                        <span
                          key={pIdx}
                          className="rounded-md bg-white/5 px-2 py-1 text-surface-muted"
                        >
                          {proj.title}
                        </span>
                      ),
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
