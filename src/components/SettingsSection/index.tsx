"use client";
import { useState } from "react";

import { useWordsDB } from "@/hooks";
import { Button } from "../Button";
import { Modal } from "../Modal";

export const SettingsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeDB } = useWordsDB();
  function handleReset() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOK() {
    removeDB();
    setIsModalOpen(false);
  }

  return (
    <div className="w-full flex flex-col p-2">
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
    </div>
  );
};
