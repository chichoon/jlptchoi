"use client";

import { useEffect, useState } from "react";

import { useWordsDB } from "@/hooks";
import { Word } from "@/types/Words";
import { Button } from "../Button";

export const WordsTable = () => {
  const { getAllWords, removeFromDB } = useWordsDB();
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    getAllWords().then((value) => {
      setWords(value);
    });
  }, []);

  function handleClickDelete(key: number) {
    return function () {
      console.log(key);
      removeFromDB(key)
        .then(getAllWords)
        .then((value) => {
          setWords(value);
        });
    };
  }

  return (
    <table>
      <tbody>
        {words.map((word, index) => {
          return (
            <tr key={`${word}-${index}`}>
              <td>{word.word}</td>
              <td>{word.pronunciation}</td>
              <td>{word.meaning}</td>
              <td>
                <Button
                  type="button"
                  text="삭제"
                  onClick={handleClickDelete(word.key)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
