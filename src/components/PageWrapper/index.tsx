import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return <div className="p-2 w-full flex flex-col">{children}</div>;
};
