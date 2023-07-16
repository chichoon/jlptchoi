"use client";

import { useState } from "react";

import { useWordsDB } from "@/hooks";
import { Button } from "../Button";
import { Modal } from "../Modal";

export const SettingsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clearDB } = useWordsDB();
  function handleReset() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOK() {
    clearDB();
    setIsModalOpen(false);
  }

  return (
    <>
      <h1 className="text-2xl w-full text-center mb-4">설정</h1>
      <Button
        colorType="secondary"
        text="데이터베이스 초기화"
        onClick={handleReset}
      />
      {isModalOpen && (
        <Modal
          onClickOK={handleOK}
          onClickClose={handleClose}
          message="데이터베이스를 초기화하시겠습니까?"
        />
      )}
    </>
  );
};
