"use client";

import { ReactNode } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

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
      <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className={cn("bg-white rounded-sm border-2 animate-fade-in", {
            "animate-fade-out": isHiding,
          })}
        >
          <span>{message}</span>
        </div>
      </div>
    </ToastPortal>
  );
};
