import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden flex items-end bg-background justify-center pt-5">
      <div className="absolute z-0 top-10">
        <h1 className="text-[13vw] font-bold xl:text-[180px] text-transparent [-webkit-text-stroke:2px_black] flex flex-col md:flex-row md:gap-10 lg:gap-16 xl:gap-20">
          <span>ABHAY</span>
          <span className="text-gray-600 [-webkit-text-stroke-width:0] md:mt-0 mt-[-50]">
            TIWARI
          </span>
        </h1>
      </div>
      <div className="md:absolute static z-10 md:bottom-0 md:w-[80%] w-full lg:w-170 ">
        <Image
          width={457}
          height={750}
          src="/Abhay-Tiwari-Portfolio.webp"
          alt="Abhay Tiwari Portfolio"
          className="w-full h-auto"
        />
      </div>
      <div className="md:absolute hidden md:block z-10 md:bottom-0 md:w-[80%] w-full lg:w-170 ">
        <Image
          width={457}
          height={750}
          src="/Abhay-Tiwari-Portfolio.webp"
          alt="Abhay Tiwari Portfolio"
          className="w-full h-auto grayscale-80"
        />
      </div>
      <div className="static md:relative z-20 w-full max-w-7xl flex flex-col sm:flex-row gap-6 justify-center items-center sm:justify-between sm:items-end pb-20">
        <div className="flex flex-col gap-5">
          <div className="md:text-4xl sm:text-3xl text-2xl font-semibold text-black">
            Full Stack Developer
          </div>
          <div className="text-gray max-w-lg">
            Full-Stack Web Developer with 5+ months of experience building
            scalable applications using Next.js and FastAPI.
          </div>
          <div>
            <button className="bg-black text-white rounded-4xl">
              <Link
                href="#contact"
                className="flex flex-row flex-nowrap gap-2 items-center px-8 py-2 tracking-tight font-medium"
              >
                Let&apos;s collaborate <MoveUpRight size={15} />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex sm:flex-col flex-wrap gap-5">
          <Link href="https://github.com/abhaytiwariii/" className="">
            <div className="border-3 border-border bg-background px-6 py-2 rounded-4xl flex gap-2 justify-center items-center sm:text-xl hover:border-black/20 transition-colors duration-300 cursor-pointer">
              <SiGithub />
              GitHub
            </div>
          </Link>
          <Link href="https://github.com/abhaytiwariii/">
            <div className="border-3 border-border bg-background px-6 py-2 rounded-4xl flex gap-2 justify-center items-center sm:text-xl hover:border-black/20 transition-colors duration-300 cursor-pointer">
              <FaLinkedinIn />
              LinkedIn
            </div>
          </Link>
          <Link href="https://github.com/abhaytiwariii/">
            <div className="border-3 border-border bg-background px-6 py-2 rounded-4xl flex gap-2 justify-center items-center sm:text-xl hover:border-black/20 transition-colors duration-300 cursor-pointer">
              <SiInstagram />
              Instagram
            </div>
          </Link>
          <Link href="https://github.com/abhaytiwariii/">
            <div className="border-3 border-border bg-background px-6 py-2 rounded-4xl flex gap-2 justify-center items-center sm:text-xl hover:border-black/20 transition-colors duration-300 cursor-pointer">
              <SiX /> Twitter / X
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </section>
  );
}
