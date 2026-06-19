"use client";

import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

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
    <section className="relative max-h-225 md:max-h-175 lg:max-h-200 overflow-hidden bg-background pt-5 md:h-screen md:flex md:items-end md:justify-center">
      {/* BACKGROUND HEADER */}
      <div className="absolute z-0 top-4 md:top-10 lg:top-14 w-full flex justify-center">
        <h1 className="text-[20vw] xs:text-[22vw] sm:text-[18vw] leading-none md:text-[11vw] lg:text-[12vw] font-bold xl:text-[150px] text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:2px_black] flex flex-col items-center md:flex-row md:gap-6 lg:gap-16 xl:gap-20 font-archivo tracking-tighter">
          <span>ABHAY</span>
          <span className="text-gray-600 [-webkit-text-stroke-width:0]">
            TIWARI
          </span>
        </h1>
      </div>

      {/* MOBILE PORTRAIT (STATIC COLOR) */}
      <div className="relative z-10 mt-[35%] sm:mt-[30%] md:hidden w-full max-w-82.5 sm:max-w-95 mx-auto px-4">
        <Image
          width={457}
          height={750}
          src="/Abhay-Tiwari-Portfolio.webp"
          alt="Abhay Tiwari Portfolio"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* DESKTOP/TABLET PORTRAIT (INTERACTIVE LAYERS) */}
      <div
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
      </div>

      {/* BACKGROUND GRAPHIC FOR MOBILE */}
      <div className="absolute top-[45%] -right-20 w-60 h-60 rounded-full bg-gray-100 blur-3xl md:hidden" />

      {/* FOREGROUND CONTENT SECTION */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-10 justify-between items-center md:items-end px-6 md:px-8 lg:px-10 pb-10 md:pb-32 lg:pb-20 mt-4 md:mt-0 pointer-events-none">
        <div className="flex flex-col gap-4 lg:gap-5 w-full max-w-md md:max-w-70 lg:max-w-90 xl:max-w-md text-center md:text-left pointer-events-auto">
          <div className="md:text-2xl lg:text-3xl xl:text-4xl sm:text-3xl text-2xl font-semibold text-black">
            Full Stack Developer
          </div>
          <div className="text-gray-600 text-base md:text-xs lg:text-sm xl:text-lg leading-7 md:leading-5 lg:leading-6 xl:leading-8 max-w-lg">
            Full-Stack Web Developer with 6+ months of experience building
            scalable applications using Next.js and FastAPI.
          </div>
          <div>
            <button className="border border-gray-300 rounded-2xl w-full bg-black text-white md:rounded-full md:w-fit hover:bg-white hover:text-black md:border-2 md:border-black hover:border-border box-border hover:transition-all duration-300 shadow-sm md:shadow-none">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-4 md:px-4 md:py-2.5 lg:px-8 lg:py-4 tracking-tight font-medium text-base md:text-xs lg:text-sm xl:text-lg"
              >
                {/* <Users size={18} className="md:hidden text-gray-700" /> */}
                <span>Let&apos;s collaborate</span>
                <MoveUpRight
                  size={15}
                  className="text-gray-500 md:text-inherit"
                />
              </Link>
            </button>
          </div>
        </div>
        {/* SOCIAL LINKS */}
        <div className="grid grid-cols-2 xs:grid-cols-4 md:flex md:flex-col gap-2 md:gap-3 lg:gap-4 w-full md:w-auto pointer-events-auto">
          <Link href="https://github.com/abhaytiwariii/" target="_blank">
            <div className="border border-border bg-white px-2 py-4 md:px-4 md:py-3 lg:px-6 lg:py-5 rounded-2xl md:rounded-3xl flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-center text-xs md:text-sm lg:text-lg hover:border-black/20 transition-all duration-300 cursor-pointer min-h-22.5 md:min-h-0 shadow-sm">
              <SiGithub className="text-xl md:text-lg lg:text-2xl" />
              <span className="text-[11px] md:text-xs lg:text-sm xl:text-lg font-medium">
                GitHub
              </span>
            </div>
          </Link>
          <Link href="https://linkedin.com/in/abhaytiwariii/" target="_blank">
            <div className="border border-border bg-white px-2 py-4 md:px-4 md:py-3 lg:px-6 lg:py-5 rounded-2xl md:rounded-3xl flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-center text-xs md:text-sm lg:text-lg hover:border-black/20 transition-all duration-300 cursor-pointer min-h-22.5 md:min-h-0 shadow-sm">
              <FaLinkedinIn className="text-xl md:text-lg lg:text-2xl" />
              <span className="text-[11px] md:text-xs lg:text-sm xl:text-lg font-medium">
                LinkedIn
              </span>
            </div>
          </Link>
          <Link href="https://instagram.com/_abhaytiwariii/" target="_blank">
            <div className="border border-border bg-white px-2 py-4 md:px-4 md:py-3 lg:px-6 lg:py-5 rounded-2xl md:rounded-3xl flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-center text-xs md:text-sm lg:text-lg hover:border-black/20 transition-all duration-300 cursor-pointer min-h-22.5 md:min-h-0 shadow-sm">
              <SiInstagram className="text-xl md:text-lg lg:text-2xl" />
              <span className="text-[11px] md:text-xs lg:text-sm xl:text-lg font-medium">
                Instagram
              </span>
            </div>
          </Link>
          <Link href="https://x.com/_abhaytiwariii/" target="_blank">
            <div className="border border-border bg-white px-2 py-4 md:px-4 md:py-3 lg:px-6 lg:py-5 rounded-2xl md:rounded-3xl flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-center text-xs md:text-sm lg:text-lg hover:border-black/20 transition-all duration-300 cursor-pointer min-h-22.5 md:min-h-0 shadow-sm">
              <SiX className="text-xl md:text-lg lg:text-2xl" />
              <span className="text-[11px] md:text-xs lg:text-sm xl:text-lg font-medium">
                Twitter / X
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
