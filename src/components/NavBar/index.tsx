"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
}

export const NavBar = ({ children }: Props) => {
  return (
    <nav className="flex flex-row justify-between items-center border-b-black border-solid border-b-2">
      {children}
    </nav>
  );
};

interface NavBarButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const NavBarButton = ({
  href,
  className,
  children,
}: NavBarButtonProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "inline-block  text-center flex-1 px-4 py-2",
        className
      )}>
      {children}
    </Link>
  );
};

export const NavBarSpacer = () => {
  return <div className="flex-1  px-4 py-2 h-full" />;
};
