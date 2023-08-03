"use client";

import { FormEvent, useRef, useState } from "react";

import { useToast, useWordsDB } from "@/hooks";
import { parseWords } from "@/utils";
import { Button } from "../Button";
import { Toast } from "../Toast";

export const ImportForm = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { saveToDB } = useWordsDB();
  const [message, setMessage] = useState("");
  const { isShown, isHiding } = useToast({ message, setMessage });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (textRef.current === null) return;
    const words = parseWords(textRef.current.value);
    if (!words || words.length === 0) return;
    saveToDB(words);
    setMessage("저장 완료");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          placeholder="단어,의미,발음 순으로 줄마다 작성"
          rows={15}
          cols={30}
          ref={textRef}
        />
        <Button type="submit" text="제출" />
      </form>
      {isShown && <Toast message={message} isHiding={isHiding} />}
    </>
  );
};
