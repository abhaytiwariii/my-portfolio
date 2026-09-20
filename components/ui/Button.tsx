import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";

interface BaseProps {
  variant?: "default" | "filled" | "outline" | "ghost";
  children: React.ReactNode;
}

type ButtonAsButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button(props: ButtonProps) {
  // 1. Establish the locked base rules for your portfolio brand
  const baseStyles =
    "tracking-tight font-medium transition-all duration-300 cursor-pointer flex items-center justify-center";

  // 2. Tokenize design choices safely based on your configured global theme values
  const variants = {
    default:
      "text-sm md:text-base px-1 xs:px-2 sm:px-3",
    filled:
      "bg-black text-white border border-gray-300 md:border-2 md:border-black hover:bg-white hover:text-black hover:border-border box-border rounded-2xl md:rounded-full w-full md:w-fit shadow-sm md:shadow-none gap-2 px-6 py-4 md:px-4 md:py-2.5 lg:px-8 lg:py-4 text-base md:text-xs lg:text-sm xl:text-lg",
    outline:
      "bg-white text-black border border-border hover:border-black/20 rounded-2xl md:rounded-3xl flex flex-col md:flex-row gap-2 md:gap-3 min-h-22.5 md:min-h-0 shadow-sm px-2 py-4 md:px-4 md:py-3 lg:px-6 lg:py-5 text-xs md:text-sm lg:text-lg w-full md:w-auto",
    ghost:
      "bg-transparent text-secondary hover:text-black px-1 xs:px-2 sm:px-3 text-sm lg:text-base gap-2",
  };

  const { variant = "filled", className = "", children } = props;

  const combinedStyles = cn(baseStyles, variants[variant], className);

  if (props.href !== undefined) {
    const { href, target, rel, className, children, variant, ...rest } = props;
    return (
      <Link
        href={href}
        className={combinedStyles}
        target={target}
        rel={rel}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  } else {
    const { onClick, disabled, children, variant, className, ...rest } = props;
    return (
      <button
        className={combinedStyles}
        onClick={onClick}
        disabled={disabled}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
}
