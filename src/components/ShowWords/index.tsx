"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { useWordsDB } from "@/hooks/useWordsDB";
import { Word } from "@/types/Words";
import { Button } from "../Button";

export const ShowWords = () => {
  const [count, setCount] = useState<number>(0);
  const [currentWordKey, setCurrentWordKey] = useState<number>(0);
  const [word, setWord] = useState<Word | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { getWord, getWordCount } = useWordsDB();

  useEffect(() => {
    getWordCount().then((value) => {
      setCount(value);
    });
  }, []);

  useEffect(() => {
    setCurrentWordKey(Math.round(Math.random() * (count - 1)) + 1);
  }, [count]);

  useEffect(() => {
    getWord(currentWordKey).then((value) => {
      setWord(value);
    });
  }, [currentWordKey]);

  useEffect(() => {
    if (errorMsg.length === 0) return;
    setTimeout(() => {
      setErrorMsg("");
    }, 1000);
  }, [errorMsg]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current === null || !word) return;
    if (inputRef.current.value !== word.pronunciation) {
      setErrorMsg("틀렸습니다!");
      return;
    }
    setCurrentWordKey(Math.round(Math.random() * (count - 1)) + 1);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full p-2">
      <h2 className="text-4xl w-full text-center mb-4">{word?.word}</h2>
      <input
        type="text"
        autoFocus
        placeholder="발음을 입력"
        ref={inputRef}
        className="w-full border-2 rounded-sm bg-white text-xl h-12"
      />
      <div className="h-10 flex items-center justify-center my-2">
        <span className="text-red-600">{errorMsg}</span>
      </div>
      <Button type="submit" text="제출" />
    </form>
  );
};
