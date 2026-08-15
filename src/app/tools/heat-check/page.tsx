import type { Metadata } from "next";
import HeatCheckClient from "@/components/HeatCheckClient";

export const metadata: Metadata = {
  title: "フェス暑さ対策診断 | 熱中症リスクをチェック",
  description:
    "夏フェスの暑さ対策に。気温・屋外屋内・滞在時間・日陰の多さなどを選ぶだけで、熱中症リスクと必要な暑さ対策グッズを診断します。",
  alternates: { canonical: "/tools/heat-check" },
};

export default function Page() {
  return <HeatCheckClient />;
}
