import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { toastMessageState } from "@/store";

export const Toast = () => {
  const [toastText, setToastText] = useRecoilState(toastMessageState);

  useEffect(() => {
    if (!toastText || toastText === "") return;
    const timer = setTimeout(() => {
      setToastText(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toastText, setToastText]);

  return (
    <div className="absolute bottom-10 left-[50vw]">
      <span>{toastText}</span>
    </div>
  );
};
