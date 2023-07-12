import { twMerge } from "tailwind-merge";
import cn from "classnames";

interface Props {
  text: string;
  color?: "primary" | "secondary";
  size?: "medium" | "large";
}

export const Header = ({ text, color = "primary", size = "medium" }: Props) => {
  return (
    <h1
      className={twMerge(
        cn(
          "mb-4 text-center font-bold",
          { "text-2xl": size === "medium" },
          { "text-4xl": size === "large" },
          { "text-slate-800": color === "primary" },
          { "text-slate-600": color === "secondary" }
        )
      )}
    >
      {text}
    </h1>
  );
};
