import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  duration?: number;
}

export function useToast({ message, setMessage, duration = 1000 }: Props) {
  const [isShown, setIsShown] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (message) setIsShown(true);
  }, [message]);

  useEffect(() => {
    if (isShown) {
      const setTimeout1 = setTimeout(() => {
        setIsShown(false);
        setMessage("");
        setIsHiding(false);
        clearTimeout(setTimeout1);
      }, duration);
      const setTimeout2 = setTimeout(() => {
        setIsHiding(true);
        clearTimeout(setTimeout2);
      }, duration - 200);
    }
  }, [isShown, setMessage, duration]);

  return { isShown, isHiding };
}
