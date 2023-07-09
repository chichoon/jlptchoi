import { twMerge } from "tailwind-merge";
import cn from "classnames";

interface Props {
  type: "button" | "submit";
  colorType?: "primary" | "secondary";
  text: string;
}

export const Button = ({ type, colorType = "primary", text }: Props) => {
  return (
    <button
      type={type}
      className={twMerge(
        cn("text-lg h-10 rounded-xl transition-all active:scale-95 font-bold", {
          "bg-slate-500 hover:bg-slate-600 text-white": colorType === "primary",
          "bg-slate-300 hover:bg-slate-400 text-black":
            colorType === "secondary",
        })
      )}>
      {text}
    </button>
  );
};
