import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NavBar = ({ children }: Props) => {
  return (
    <nav className="px-4 py-2 flex flex-row justify-between items-center border-b-black border-solid border-b-2">
      {children}
    </nav>
  );
};
