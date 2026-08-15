import type { Metadata } from "next";
import BudgetSimulatorClient from "@/components/BudgetSimulatorClient";

export const metadata: Metadata = {
  title: "フェス予算シミュレーター",
  description:
    "チケット代・交通費・宿泊費・飲食費などを入力するだけで、夏フェスの合計費用と1人あたりの金額をリアルタイムに計算します。",
};

export default function Page() {
  return <BudgetSimulatorClient />;
}
