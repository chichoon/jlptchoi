import { PageWrapper, ShowWords } from "@/components";
import { NavBar, NavBarButton } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar>
        <>
          <NavBarButton href="/words">
            <span>단어장</span>
          </NavBarButton>
          <NavBarButton href="/import">
            <span>단어 추가</span>
          </NavBarButton>
          <NavBarButton href="/settings">
            <span>설정</span>
          </NavBarButton>
        </>
      </NavBar>
      <PageWrapper>
        <ShowWords />
      </PageWrapper>
    </>
  );
}
