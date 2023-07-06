"use client";
import { ChangeEvent, FormEvent, useRef } from "react";

export const ImportForm = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(textRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea rows={20} cols={30} ref={textRef} />
      <button type="submit">제출</button>
    </form>
  );
};
