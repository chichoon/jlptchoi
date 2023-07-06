"use client";
import { ImportForm } from "@/components";
import Link from "next/link";

export default function Import() {
  return (
    <div>
      <div>
        <Link href="/">
          <span>돌아가기</span>
        </Link>
        <h1>단어 추가</h1>
      </div>
      <ImportForm />
    </div>
  );
}
