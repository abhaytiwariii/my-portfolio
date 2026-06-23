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
import { ReactNode, useState } from "react";

type NavItemType = {
  href: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  isMobile?: boolean;
};

type NavItemProps = (typeof NAV_ITEMS)[number];

const NAV_ITEMS: NavItemType[] = [
  {
    href: "#work",
    label: "Work",
    description: "[20+]",
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    href: "#experience",
    label: "Experience",
    description: "[6m+]",
    icon: <UserRound size={18} />,
  },
  {
    href: "#skills",
    label: "Skills",
    description: "[10+]",
    icon: <CodeXml size={18} />,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <Mail size={18} />,
  },
];

function NavItem({ href, label, description, icon, isMobile }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex flex-nowrap items-center justify-between sm:justify-start md:justify-center w-full gap-2 cursor-pointer tracking-tight font-medium"
    >
      <div className="flex items-center gap-3 sm:gap-6">
        {icon && isMobile && (
          <div className="rounded-md border border-border p-2">{icon}</div>
        )}
        {label}
      </div>
      <div>
        {description && (
          <span className="text-secondary text-xs">{description}</span>
        )}
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="fixed right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="flex justify-center items-center h-15 bg-background">
        <div className="flex flex-row flex-1 items-center justify-between max-w-7xl h-full font-sans px-5 sm:px-10 md:px-5">
          <div className="flex justify-between flex-1 xs:flex-initial items-center gap-5 sm:gap-10">
            <div className="md:hidden">
              <div className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <X size={28} /> : <Menu size={28} />}
              </div>
              {isMobile && (
                <div className="md:hidden fixed z-50 top-15 left-0 w-full border border-border bg-background">
                  <div className="flex flex-col items-start justify-center gap-4 px-6 sm:px-10 py-5">
                    {NAV_ITEMS.map((item) => (
                      <NavItem key={item.href} isMobile={isMobile} {...item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden xs:flex flex-nowrap items-center pr-5 h-8 justify-center gap-0 border-border border rounded-4xl shadow-[0_0_10px_rgba(22,163,74,0.2)] tracking-tight font-medium *:">
              <Dot color="#16a34a" size={40} />
              Available for Work
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:h-full md:items-center md:justify-evenly md:gap-3 lg:gap-5 md:flex-nowrap px-2">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          <button className="bg-black text-white rounded-4xl">
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
