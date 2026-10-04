"use client";

import { useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "./ui/Button";

const CUBIC_EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: CUBIC_EASE,
    },
  }),
};

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/abhaytiwariii/",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abhaytiwariii/",
    icon: FaLinkedinIn,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/_abhaytiwariii/",
    icon: SiX,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_abhaytiwariii/",
    icon: SiInstagram,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abhay.tiwari.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background bg-[url('/ContactPageBackground.jpg')] bg-cover bg-bottom md:bg-center bg-no-repeat pt-16 md:pt-24 pb-8 flex flex-col justify-between"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8 lg:px-10 flex flex-col items-center text-center">
        {/* Header / Watermark matching Work & Experience sections */}
        <motion.div
          className="relative h-24 sm:h-32 md:h-36 mb-6 md:mb-10 flex items-center justify-center w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-dusty/10 font-archivo tracking-widest select-none pointer-events-none">
            CONTACT
          </span>
          <h2 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-medium text-black">
            /CONTACT
          </h2>
        </motion.div>

        {/* Status Pill */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground shadow-[0_0_12px_rgba(22,163,74,0.15)] backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for New Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h3
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
          className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-black uppercase max-w-3xl leading-[1.12]"
        >
          Have a project in mind?
        </motion.h3>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3}
          className="mt-4 text-sm sm:text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed"
        >
          Together, we can create something clear and impactful. Let&apos;s
          collaborate to bring ideas to life in a way that resonates with
          everyone.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
          className="mt-8 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Button
            variant="filled"
            href="mailto:at1384424@gmail.com"
            className="w-full xs:w-auto px-7 py-3 text-sm sm:text-base rounded-full shadow-sm hover:shadow-md transition-all gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </Button>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/90 backdrop-blur-xs px-6 py-3 text-sm sm:text-base font-medium text-black transition-all hover:bg-neutral-50 hover:border-black/30 hover:shadow-xs cursor-pointer active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <span>abhay.tiwari.dev@gmail.com</span>
                <Copy className="w-4 h-4 text-dusty" />
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Footer Divider & Links */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={5}
        className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10 mt-16 md:mt-24"
      >
        <div className="border-t border-border/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <span className="font-semibold text-black tracking-tight text-sm sm:text-base">
              Abhay Tiwari
            </span>
            <span className="hidden sm:inline-block text-dusty">·</span>
            <span className="text-xs sm:text-sm text-foreground/70">
              Full Stack Developer
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-white/90 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-black hover:border-black/40 hover:bg-neutral-50 hover:shadow-xs transition-all duration-200 active:scale-95"
                >
                  <Icon className="text-xs sm:text-sm" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
