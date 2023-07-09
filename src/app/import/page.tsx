"use client";
import { ImportForm } from "@/components";
import { NavBar, NavBarButton, NavBarSpacer } from "@/components/NavBar";

export default function Import() {
  return (
    <>
      <NavBar>
        <NavBarButton href="/">
          <span>홈</span>
        </NavBarButton>
        <NavBarSpacer />
        <NavBarSpacer />
      </NavBar>
      <div>
        <h1>단어 추가</h1>
      </div>
      <ImportForm />
    </>
  );
}
