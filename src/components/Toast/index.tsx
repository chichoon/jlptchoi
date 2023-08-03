"use client";

import { ReactNode } from "react";
import ReactDOM from "react-dom";

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
}

export const Toast = ({ message }: ToastProps) => {
  return (
    <ToastPortal>
      <div className="fixed bottom-1/2 left-1/2 w-fit h-fit flex items-center justify-center">
        <div className={"bg-white rounded-sm border-2 transition-opacity "}>
          <span>{message}</span>
        </div>
      </div>
    </ToastPortal>
  );
};
