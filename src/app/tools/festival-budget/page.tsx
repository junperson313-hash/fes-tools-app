import type { Metadata } from "next";
import BudgetSimulatorClient from "@/components/BudgetSimulatorClient";

export const metadata: Metadata = {
  title: "フェス予算シミュレーター | 費用を自動計算",
  description:
    "フェスの予算がいくらかかるか一目でわかる。チケット代・交通費・宿泊費・飲食費などを入力するだけで、合計費用と1人あたりの金額をリアルタイムに計算します。",
  alternates: { canonical: "/tools/festival-budget" },
};

export default function Page() {
  return <BudgetSimulatorClient />;
}
