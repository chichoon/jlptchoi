"use client";

import { Button, NavBar, NavBarButton, NavBarSpacer } from "@/components";
import { useWordsDB } from "@/hooks";

export default function Settings() {
  const { removeDB } = useWordsDB();
  function handleReset() {
    removeDB();
  }
  return (
    <>
      <NavBar>
        <NavBarButton href="/">
          <span>홈</span>
        </NavBarButton>
        <NavBarSpacer />
        <NavBarSpacer />
      </NavBar>
      <div className="w-full flex flex-col p-2">
        <h1 className="text-2xl w-full text-center mb-4">설정</h1>
        <Button
          type="button"
          colorType="secondary"
          text="초기화"
          onClick={handleReset}
        />
      </div>
    </>
  );
}
