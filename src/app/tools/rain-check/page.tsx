import type { Metadata } from "next";
import RainCheckClient from "@/components/RainCheckClient";

export const metadata: Metadata = {
  title: "フェス雨対策診断 | 必要な雨具を提案",
  description:
    "夏フェスの雨対策に。雨の降り方と会場タイプ(野外・都市型)を選ぶだけで、レインポンチョや防水グッズなど必要な雨対策アイテムを提案します。",
  alternates: { canonical: "/tools/rain-check" },
};

export default function Page() {
  return <RainCheckClient />;
}
