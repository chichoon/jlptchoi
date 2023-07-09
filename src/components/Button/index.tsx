import { twMerge } from "tailwind-merge";
import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit";
  colorType?: "primary" | "secondary";
  text: string;
}

export const Button = ({
  type,
  colorType = "primary",
  text,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={twMerge(
        cn("text-lg h-10 rounded-xl transition-all active:scale-95 font-bold", {
          "bg-slate-500 hover:bg-slate-600 text-white": colorType === "primary",
          "bg-slate-300 hover:bg-slate-400 text-black":
            colorType === "secondary",
        })
      )}
      {...props}>
      {text}
    </button>
  );
};
