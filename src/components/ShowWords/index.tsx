"use client";

import { useEffect } from "react";

export const ShowWords = () => {
  // useEffect(() => {
  //   const count = getWordCountFromDB();
  //   console.log(count);
  // }, []);
  return (
    <div>
      <h2>하이</h2>
      <input type="text" autoFocus placeholder="발음을 입력" />
    </div>
  );
};
