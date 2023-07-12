import { NavBar, NavBarButton, NavBarSpacer, PageWrapper } from "@/components";

export default function Words() {
  return (
    <>
      <NavBar>
        <NavBarButton href="/">
          <span>홈</span>
        </NavBarButton>
        <NavBarSpacer />
        <NavBarButton href="/import">
          <span>단어 추가</span>
        </NavBarButton>
      </NavBar>
      <PageWrapper>
        <div>단어장</div>
      </PageWrapper>
    </>
  );
}
