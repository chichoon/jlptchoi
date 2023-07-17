/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useWordsDB } from "@/hooks/useWordsDB";
import { Word } from "@/types/Words";
import { Button } from "../Button";
import { Header } from "../Header";

export const ShowWords = () => {
  const router = useRouter();
  const [words, setWords] = useState<Word[] | null>(null);
  const [word, setWord] = useState<Word>({
    word: "",
    pronunciation: "",
    meaning: "",
    key: 0,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { getAllWords } = useWordsDB();

  useEffect(() => {
    getAllWords().then((value) => {
      setWords(value);
    });
  }, []);

  useEffect(() => {
    if (!words) return;
    setWord(words[Math.round(Math.random() * (words.length - 1))]);
  }, [words]);

  useEffect(() => {
    if (errorMsg.length === 0) return;
    setTimeout(() => {
      setErrorMsg("");
    }, 1000);
  }, [errorMsg]);

  function handleClickImport() {
    router.push("/import");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current === null || !words) return;
    if (inputRef.current.value !== word.pronunciation) {
      setErrorMsg("틀렸습니다!");
      return;
    }
    setWord(words[Math.round(Math.random() * (words.length - 1))]);
    inputRef.current.value = "";
  }
  console.log(words);
  if (!words)
    return (
      <>
        <Header text="단어를 찾을 수 없어요" />
        <Button text="단어 추가하기" onClick={handleClickImport} />
      </>
    );
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <Header size="large" text={word.word} />
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
