import type { Metadata } from "next";
import PackingListClient from "@/components/PackingListClient";

export const metadata: Metadata = {
  title: "夏フェス持ち物チェッカー",
  description:
    "屋外・屋内、日帰り・宿泊、天気などの質問に答えるだけで、あなたに必要な夏フェスの持ち物リストを自動作成します。",
};

export default function Page() {
  return <PackingListClient />;
}
