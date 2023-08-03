import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  duration?: number;
}

export function useToast({ message, setMessage, duration = 1000 }: Props) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (message) setIsShown(true);
  }, [message]);

  useEffect(() => {
    if (isShown) {
      const setTimeout1 = setTimeout(() => {
        setIsShown(false);
        clearTimeout(setTimeout1);
      }, duration);
      const setTimeout2 = setTimeout(() => {
        setMessage("");
        clearTimeout(setTimeout2);
      }, duration + 500);
    }
  }, [isShown, setMessage, duration]);

  return { isShown };
}
