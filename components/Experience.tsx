"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceRow from "./Experience/ExperienceRow";
import { experiences } from "./data/experience";
import { Briefcase, Clock, Award } from "lucide-react";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full overflow-hidden bg-gray py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Header / Watermark */}
        <motion.div
          className="relative h-28 sm:h-36 md:h-44 md:mb-16 flex items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background watermark text */}
          <motion.span
            variants={fadeUp}
            custom={0}
            className="absolute inset-0 flex items-center justify-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white/[0.04] font-archivo tracking-widest select-none pointer-events-none"
          >
            EXPERIENCE
          </motion.span>

          {/* Foreground heading content */}
          <div className="relative z-10 w-full h-full pb-5 md:pb-3 flex flex-row items-end justify-between gap-4">
            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-medium text-white"
            >
              /EXPERIENCE
            </motion.h2>

            {/* Total experience badge */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm text-surface-muted backdrop-blur-sm self-start md:self-end"
            >
              <span className="flex items-center gap-1.5 text-dusty">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span className="font-semibold text-white">10+ Months</span>
                <span>Production Exp</span>
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5 text-dusty">
                <Award className="h-4 w-4 text-dusty" />
                <span className="font-semibold text-white">2</span>
                <span>Companies</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Total experience badge */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="md:hidden inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm text-surface-muted backdrop-blur-sm self-start md:self-end mb-10"
        >
          <span className="flex items-center gap-1.5 text-dusty">
            <Clock className="h-4 w-4 text-emerald-400" />
            <span className="font-semibold text-white">10+ Months</span>
            <span>Production Exp</span>
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="flex items-center gap-1.5 text-dusty">
            <Award className="h-4 w-4 text-dusty" />
            <span className="font-semibold text-white">2</span>
            <span>Companies</span>
          </span>
        </motion.div>

        {/* Experience List */}
        <div className="mx-auto max-w-5xl flex flex-col gap-6 md:gap-8">
          {experiences.map((item, index) => (
            <ExperienceRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
