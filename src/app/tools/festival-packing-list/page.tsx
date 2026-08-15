import type { Metadata } from "next";
import PackingListClient from "@/components/PackingListClient";

export const metadata: Metadata = {
  title: "夏フェス持ち物チェッカー | 何を持っていくか自動診断",
  description:
    "夏フェスの持ち物に迷ったら。屋外・屋内、日帰り・宿泊、天気などの質問に答えるだけで、フェス初心者でも必要な持ち物リストを自動作成します。無料・登録不要。",
  alternates: { canonical: "/tools/festival-packing-list" },
};

export default function Page() {
  return <PackingListClient />;
}
