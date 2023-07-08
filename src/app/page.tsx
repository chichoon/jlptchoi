import { ShowWords } from "@/components";
import { NavBar } from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar>
        <>
          <div className="flex-1" />
          <Link href="/import" className="px-4 py-2">
            <span>단어 추가</span>
          </Link>
          <Link href="/settings" className="inline-block flex-1 text-center">
            설정
          </Link>
        </>
      </NavBar>
      <div className="flex-1 flex flex-col items-center">
        <ShowWords />
      </div>
    </>
  );
}
