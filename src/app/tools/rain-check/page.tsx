import type { Metadata } from "next";
import RainCheckClient from "@/components/RainCheckClient";

export const metadata: Metadata = {
  title: "雨フェス対策診断",
  description:
    "雨の降り方と会場タイプ(野外・都市型)を選ぶだけで、レインポンチョや防水グッズなど必要な雨対策アイテムを提案します。",
};

export default function Page() {
  return <RainCheckClient />;
}
