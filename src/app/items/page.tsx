import type { Metadata } from "next";
import { Suspense } from "react";
import ItemsClient from "@/components/ItemsClient";

export const metadata: Metadata = {
  title: "フェス用品一覧 | カテゴリ・シーン別に探せる",
  description:
    "雨対策・暑さ対策・モバイルバッテリー・バッグ・宿泊遠征など、夏フェスに役立つグッズをカテゴリ別・シーン別にまとめて紹介します。",
  alternates: { canonical: "/items" },
};

export default function Page() {
  return (
    <Suspense>
      <ItemsClient />
    </Suspense>
  );
}
