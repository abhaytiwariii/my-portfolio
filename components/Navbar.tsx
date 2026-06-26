"use client";

import {
  MoveUpRight,
  Dot,
  Menu,
  X,
  BriefcaseBusiness,
  UserRound,
  CodeXml,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState, useRef } from "react";

type NavItemType = {
  href: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  isDropdownOpen?: boolean;
  delayClass?: string;
};

type NavItemProps = NavItemType & { isMobileView?: boolean };

const NAV_ITEMS: NavItemType[] = [
  {
    href: "#work",
    label: "Work",
    description: "[20+]",
    icon: <BriefcaseBusiness size={18} />,
    delayClass: "delay-75",
  },
  {
    href: "#experience",
    label: "Experience",
    description: "[6m+]",
    icon: <UserRound size={18} />,
    delayClass: "delay-100",
  },
  {
    href: "#skills",
    label: "Skills",
    description: "[10+]",
    icon: <CodeXml size={18} />,
    delayClass: "delay-150",
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <Mail size={18} />,
    delayClass: "delay-200",
  },
];

function NavItem({
  href,
  label,
  description,
  icon,
  isDropdownOpen,
  delayClass,
  isMobileView = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex flex-nowrap items-center justify-between sm:justify-start md:justify-center w-full md:w-auto gap-2 cursor-pointer tracking-tight font-medium transform transition-all duration-300 ${
        isMobileView
          ? isDropdownOpen
            ? `translate-x-0 opacity-100 ${delayClass}`
            : "-translate-x-4 opacity-0 pointer-events-none"
          : "opacity-100 translate-x-0" // Always visible on Desktop
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-6 md:gap-0">
        {icon && isMobileView && isDropdownOpen && (
          <div className="rounded-md border border-border p-2 bg-silver">
            {icon}
          </div>
        )}
        {label}
      </div>
      <div>
        {description && (
          <span className="text-secondary text-xs md:ml-1">{description}</span>
        )}
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDropdownOpen]);

  // Click outside detector logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="fixed right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="flex justify-center items-center h-15 bg-background">
        <div className="flex flex-row flex-1 items-center justify-between max-w-7xl h-full font-sans px-5 sm:px-10 md:px-5">
          {/* LEFT CONTENT: TOGGLE & PILL */}
          <div className="flex justify-between flex-1 xs:flex-initial items-center gap-5 sm:gap-10">
            <div ref={menuRef} className="md:hidden relative z-50">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer"
              >
                {isDropdownOpen ? <X size={28} /> : <Menu size={28} />}
              </div>

              {/* SLIDE DOWN OVERLAY DROPDOWN */}
              <div
                className={`md:hidden fixed top-15 left-0 w-full border border-border bg-background shadow-lg transition-all duration-300 ease-in-out origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                <div
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex flex-col items-start justify-center gap-5 px-6 sm:px-10 py-6"
                >
                  {NAV_ITEMS.map((item) => (
                    <NavItem
                      key={item.href}
                      isDropdownOpen={isDropdownOpen}
                      isMobileView={true}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden xs:flex flex-nowrap items-center pr-5 h-8 justify-center gap-0 border-border border rounded-4xl shadow-[0_0_10px_rgba(22,163,74,0.2)] tracking-tight font-medium">
              <Dot color="#16a34a" size={40} />
              Available for Work
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex md:flex-1 md:h-full md:items-center md:justify-evenly md:gap-3 lg:gap-5 md:flex-nowrap px-2">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          {/* DESKTOP/MOBILE CTAs */}
          <button className="bg-black text-white rounded-4xl cursor-pointer hover:bg-zinc-800 transition-colors duration-200">
            <Link
              href="#contact"
              className="flex flex-row flex-nowrap gap-2 items-center px-5 xs:px-8 py-2 tracking-tight font-medium text-base"
            >
              Let&apos;s Talk <MoveUpRight size={15} />
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
