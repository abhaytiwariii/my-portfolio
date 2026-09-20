"use client";

import { MoveUpRight } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Button from "./ui/Button";

const CUBIC_EASE = [0.25, 0.1, 0.25, 1] as const;

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
    name: "Instagram",
    href: "https://instagram.com/_abhaytiwariii/",
    icon: SiInstagram,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/_abhaytiwariii/",
    icon: SiX,
  },
];

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.6,
    },
  },
};

const socialItemVariants: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: CUBIC_EASE,
    },
  },
};

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mousePosPx, setMousePosPx] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Easily customize the cursor color here (e.g., "black", "white", or any CSS color code)
  const cursorColor = "#2d3748";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
    setMousePosPx({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="relative max-h-225 md:max-h-175 lg:max-h-185 overflow-hidden bg-surface md:h-screen md:flex md:items-end md:justify-center">
      {/* BACKGROUND HEADER / NAME TEXT */}
      <div className="absolute z-0 top-4 lg:top-10 w-full flex justify-center">
        <motion.h1
          initial={{ opacity: 0.1, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: CUBIC_EASE,
          }}
          className="text-[20vw] xs:text-[22vw] sm:text-[18vw] leading-none md:text-[11vw] lg:text-[12vw] font-bold xl:text-[150px] text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:2px_black] flex flex-col items-center md:flex-row md:gap-6 lg:gap-16 xl:gap-20 font-archivo tracking-tighter select-none"
        >
          <span>ABHAY</span>
          <motion.span
            initial={{ color: "#6b7280" }}
            animate={{ color: "#000000" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: CUBIC_EASE,
            }}
            className="text-gray-600! [-webkit-text-stroke-width:0]"
          >
            TIWARI
          </motion.span>
        </motion.h1>
      </div>

      {/* MOBILE PORTRAIT (STATIC COLOR) */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.35,
          ease: CUBIC_EASE,
        }}
        className="relative z-10 mt-[35%] sm:mt-[30%] md:hidden w-full max-w-82.5 sm:max-w-95 mx-auto px-4"
      >
        <Image
          width={457}
          height={750}
          src="/Abhay-Tiwari-Portfolio.webp"
          alt="Abhay Tiwari Portfolio"
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* DESKTOP/TABLET PORTRAIT (INTERACTIVE LAYERS) */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.35,
          ease: CUBIC_EASE,
        }}
        className="hidden md:block md:absolute z-10 md:bottom-0 md:max-w-150 md:w-[80%] w-full lg:max-w-175 lg:w-170 "
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Under layer: Static Grayscale */}
        <Image
          width={457}
          height={750}
          src="/Abhay-Tiwari-Portfolio.webp"
          alt="Abhay Tiwari Portfolio"
          className="w-full h-auto grayscale-80"
        />

        {/* Top layer: Masked Dynamic Color */}
        <Image
          width={457}
          height={750}
          src="/Abhay-Tiwari-Portfolio.webp"
          alt="Abhay Tiwari"
          className="w-full h-auto absolute inset-0 transition-opacity duration-300 ease-out pointer-events-none"
          style={{
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 250px at ${mousePos.x}% ${mousePos.y}%, black 15%, transparent 100%)`
              : "radial-gradient(circle 0px at 0% 0%, black, transparent)",
            maskImage: isHovered
              ? `radial-gradient(ellipse 250px 200px at ${mousePos.x}% ${mousePos.y}%, black 15%, transparent 100%)`
              : "radial-gradient(circle 0px at 0% 0%, black, transparent)",
          }}
        />

        {/* Custom Designed Cursor */}
        {isHovered && (
          <div
            className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center transition-transform duration-70 ease-out"
            style={{
              left: `${mousePosPx.x}px`,
              top: `${mousePosPx.y}px`,
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer ring pulsing */}
              <div
                className="w-10 h-10 rounded-full border-2 opacity-80 animate-ping absolute"
                style={{
                  animationDuration: "2s",
                  borderColor: cursorColor,
                }}
              />
              {/* Outer ring static */}
              <div
                className="w-8 h-8 rounded-full border opacity-60"
                style={{
                  borderColor: cursorColor,
                }}
              />
              {/* Inner core dot */}
              <div
                className="w-2 h-2 rounded-full absolute"
                style={{
                  backgroundColor: cursorColor,
                }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* BACKGROUND GRAPHIC FOR MOBILE */}
      <div className="absolute top-[45%] -right-20 w-60 h-60 rounded-full bg-gray-100 blur-3xl md:hidden" />

      {/* FOREGROUND CONTENT SECTION */}
      <div className="relative z-20 mx-auto w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-10 justify-between items-center md:items-end px-6 md:px-8 lg:px-10 pb-10 md:pb-32 lg:pb-20 mt-4 md:mt-0 pointer-events-none">
        {/* BOTTOM-LEFT BLOCK */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.55,
            ease: CUBIC_EASE,
          }}
          className="flex flex-col gap-4 lg:gap-5 w-full max-w-md md:max-w-70 lg:max-w-90 xl:max-w-md text-center md:text-left pointer-events-auto"
        >
          <div className="md:text-2xl lg:text-3xl xl:text-4xl sm:text-3xl text-2xl font-semibold text-black">
            Full Stack Developer
          </div>
          <div className="text-gray-600 text-base md:text-xs lg:text-sm xl:text-lg leading-7 md:leading-5 lg:leading-6 xl:leading-8 max-w-lg">
            Full-Stack Web Developer with 10+ months of experience building
            scalable applications using Next.js and FastAPI.
          </div>
          <div>
            <Button href="https://linkedin.com/in/abhaytiwariii/">
              <span>Let&apos;s collaborate</span>
              <MoveUpRight
                size={15}
                className="text-gray-500 md:text-inherit"
              />
            </Button>
          </div>
        </motion.div>

        {/* SOCIAL LINKS (BOTTOM-RIGHT) */}
        <motion.div
          variants={socialContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 xs:grid-cols-4 md:flex md:flex-col gap-2 md:gap-3 lg:gap-4 w-full md:w-auto pointer-events-auto"
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.div key={link.name} variants={socialItemVariants}>
              <Button href={link.href} target="_blank" variant="outline">
                <link.icon className="text-xl md:text-lg lg:text-2xl" />
                <span className="text-[11px] md:text-xs lg:text-sm xl:text-lg font-medium">
                  {link.name}
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
