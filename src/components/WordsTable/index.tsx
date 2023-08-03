/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

import { useToast, useWordsDB } from "@/hooks";
import { Word } from "@/types/Words";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Toast } from "../Toast";

export const WordsTable = () => {
  const { getAllWords, removeFromDB } = useWordsDB();
  const [words, setWords] = useState<Word[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(
    null
  );
  const [message, setMessage] = useState("");
  const { isShown, isHiding } = useToast({ message, setMessage });

  useEffect(() => {
    getAllWords().then((value) => {
      setWords(value);
    });
  }, []);

  function handleClickDelete(key: number) {
    return () => {
      setIsModalOpen(true);
      setSelectedWordIndex(key);
    };
  }

  function handleClickClose() {
    setIsModalOpen(false);
  }

  function handleClickOK() {
    console.log(selectedWordIndex);
    if (!selectedWordIndex) return;

    removeFromDB(selectedWordIndex)
      .then(getAllWords)
      .then((value) => {
        setWords(value);
        setIsModalOpen(false);
        setMessage("삭제 완료");
      });
  }

  return (
    <>
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
      {isModalOpen && (
        <Modal
          onClickOK={handleClickOK}
          onClickClose={handleClickClose}
          message={`단어를 삭제하시겠습니까?`}
        />
      )}
      {isShown && <Toast message={message} isHiding={isHiding} />}
    </>
  );
};
