import { MoveUpRight, Dot } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="flex justify-center items-center h-15 bg-background">
        <div className="flex flex-row flex-1 items-center justify-between max-w-7xl h-full font-sans px-2">
          <div className="flex flex-nowrap items-center pr-5 h-8 justify-center gap-0 border-border border rounded-4xl shadow-[0_0_10px_rgba(22,163,74,0.2)] tracking-tight font-medium *:">
            <Dot color="#16a34a" size={40} />
            Available for Work
          </div>
          <Link
            href="#work"
            className="sm:flex flex-nowrap items-center gap-2 cursor-pointer tracking-tight font-medium hidden"
          >
            Work <span className="text-secondary text-xs">[20+]</span>
          </Link>
          <Link
            href="#experience"
            className="sm:flex hidden flex-nowrap items-center gap-2 cursor-pointer tracking-tight font-medium"
          >
            Experience <span className="text-secondary text-xs">[5m+]</span>
          </Link>
          <Link
            href="#skills"
            className="sm:flex hidden flex-nowrap items-center gap-2 cursor-pointer tracking-tight font-medium"
          >
            Skills <span className="text-secondary text-xs">[10+]</span>
          </Link>
          <Link
            href="#contact"
            className="sm:flex hidden cursor-pointer tracking-tight font-medium"
          >
            Contact
          </Link>
          <button className="bg-black text-white rounded-4xl">
            <Link
              href="#contact"
              className="flex flex-row flex-nowrap gap-2 items-center px-8 py-2 tracking-tight font-medium"
            >
              Let&apos;s Talk <MoveUpRight size={15} />
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
