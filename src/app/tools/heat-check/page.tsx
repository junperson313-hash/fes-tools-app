import type { Metadata } from "next";
import HeatCheckClient from "@/components/HeatCheckClient";

export const metadata: Metadata = {
  title: "暑さ対策診断",
  description:
    "気温・屋外屋内・滞在時間・日陰の多さなどを選ぶだけで、熱中症リスクと必要な暑さ対策グッズを診断します。",
};

export default function Page() {
  return <HeatCheckClient />;
}
