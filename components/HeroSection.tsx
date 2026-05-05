import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden flex items-end justify-center pt-5">
      <div className="absolute top-10">
        <h1 className="text-[13vw] font-bold xl:text-[180px] text-transparent [-webkit-text-stroke:2px_black] ">
          ABHAY{" "}
          <span className="text-gray-600 [-webkit-text-stroke-width:0]">
            TIWARI
          </span>
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-7xl flex flex-col sm:flex-row gap-6 justify-center items-center sm:justify-between sm:items-end pb-20">
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
          <div className="border border-border px-6 py-2 rounded-4xl">
            <Link
              href="https://github.com/abhaytiwariii/"
              className="flex gap-2 justify-center items-center"
            >
              <SiGithub />
              GitHub
            </Link>
          </div>
          <div className="border border-border px-6 py-2 rounded-4xl">
            <Link
              href="https://github.com/abhaytiwariii/"
              className="flex gap-2 justify-center items-center"
            >
              <FaLinkedinIn />
              LinkedIn
            </Link>
          </div>
          <div className="border border-border px-6 py-2 rounded-4xl">
            <Link
              href="https://github.com/abhaytiwariii/"
              className="flex gap-2 justify-center items-center"
            >
              <SiInstagram />
              Instagram
            </Link>
          </div>
          <div className="border border-border px-6 py-2 rounded-4xl">
            <Link
              href="https://github.com/abhaytiwariii/"
              className="flex gap-2 justify-center items-center"
            >
              <SiX /> X
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
