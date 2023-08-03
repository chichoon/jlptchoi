"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

interface Props {
  children: ReactNode;
}

const ToastPortal = ({ children }: Props) => {
  if (!document) return null;
  const element = document.getElementById("toast");
  if (!element) return null;
  return ReactDOM.createPortal(children, element);
};

interface ToastProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

export const Toast = ({ message, setMessage }: ToastProps) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (message) setIsShown(true);
  }, [message]);

  useEffect(() => {
    if (isShown) {
      setTimeout(() => {
        setIsShown(false);
      }, 1000);
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  }, [isShown, setMessage]);

  return (
    <ToastPortal>
      <div className="fixed bottom-1/2 left-1/2 w-fit h-fit flex items-center justify-center">
        <div
          className={cn("bg-white rounded-sm border-2 transition-opacity ", {
            "opacity-0": !isShown,
          })}
        >
          <span>{message}</span>
        </div>
      </div>
    </ToastPortal>
  );
};
