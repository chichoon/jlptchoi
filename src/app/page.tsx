import { ShowWords } from "@/components";
import { NavBar, NavBarButton, NavBarSpacer } from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar>
        <>
          <NavBarSpacer />
          <NavBarButton href="/import">
            <span>단어 추가</span>
          </NavBarButton>
          <NavBarButton href="/settings">
            <span>설정</span>
          </NavBarButton>
        </>
      </NavBar>
      <div className="flex-1 flex flex-col items-center">
        <ShowWords />
      </div>
    </>
  );
}
