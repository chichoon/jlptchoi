import {
  Header,
  NavBar,
  NavBarButton,
  NavBarSpacer,
  PageWrapper,
  WordsTable,
} from "@/components";

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
        <Header text="단어장" />
        <WordsTable />
      </PageWrapper>
    </>
  );
}
