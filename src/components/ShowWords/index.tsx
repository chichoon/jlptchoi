"use client";

import { useEffect, useState } from "react";

import { useWordsDB } from "@/hooks/useWordsDB";

export const ShowWords = () => {
  const [count, setCount] = useState(0);
  const { getWordCount } = useWordsDB();
  useEffect(() => {
    getWordCount().then((value) => {
      setCount(value);
      console.log(value);
    });
  }, []);
  return (
    <div>
      <h2>하이</h2>
      <input type="text" autoFocus placeholder="발음을 입력" />
    </div>
  );
};
