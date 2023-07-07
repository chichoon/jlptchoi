"use client";

import { parseWords, saveToDB } from "@/utils";
import { ChangeEvent, FormEvent, useRef } from "react";

export const ImportForm = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (textRef.current === null) return;
    const words = parseWords(textRef.current.value);
    if (!words || words.length === 0) return;
    saveToDB(words);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="단어,의미,발음 순으로 줄마다 작성"
        rows={20}
        cols={30}
        ref={textRef}
      />
      <button type="submit">제출</button>
    </form>
  );
};
