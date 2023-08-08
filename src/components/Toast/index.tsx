"use client";

import { ReactNode } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
}

const ToastPortal = ({ children }: Props) => {
  const element = document.getElementById("toast");
  if (!element) return null;
  return ReactDOM.createPortal(children, element);
};

interface ToastProps {
  message: string;
  isHiding: boolean;
}

export const Toast = ({ message, isHiding }: ToastProps) => {
  return (
    <ToastPortal>
      <div
        className={twMerge(
          cn("fixed top-12 right-4 px-4 py-1 bg-slate-600", {
            "animate-fade-top-down": !isHiding,
            "animate-fade-out": isHiding,
          })
        )}
      >
        <span className="text-white">{message}</span>
      </div>
    </ToastPortal>
  );
};
