import type { Metadata } from "next";
import ItemsClient from "@/components/ItemsClient";

export const metadata: Metadata = {
  title: "フェス用品一覧",
  description:
    "雨対策・暑さ対策・スマホ充電・バッグ・宿泊キャンプなど、夏フェスに役立つグッズをカテゴリ別にまとめて紹介します。",
};

export default function Page() {
  return <ItemsClient />;
}
