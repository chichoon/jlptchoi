import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/import">
        <span>단어 추가하러 가기</span>
      </Link>
    </div>
  );
}
