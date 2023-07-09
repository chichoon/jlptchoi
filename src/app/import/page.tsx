"use client";
import { ImportForm } from "@/components";
import { NavBar, NavBarButton } from "@/components/NavBar";

export default function Import() {
  return (
    <>
      <NavBar>
        <NavBarButton href="/">
          <span>홈</span>
        </NavBarButton>
        <div className="flex-1" />
      </NavBar>
      <div>
        <h1>단어 추가</h1>
      </div>
      <ImportForm />
    </>
  );
}
