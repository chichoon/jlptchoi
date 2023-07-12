"use client";
import { Header, ImportForm, PageWrapper } from "@/components";
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
      <PageWrapper>
        <Header text="단어 추가" />
        <ImportForm />
      </PageWrapper>
    </>
  );
}
