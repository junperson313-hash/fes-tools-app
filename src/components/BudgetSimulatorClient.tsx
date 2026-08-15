"use client";

import { useMemo, useState } from "react";
import ResultCTA from "@/components/ResultCTA";

type FieldKey = "ticket" | "transport" | "stay" | "food" | "goods" | "other";

const FIELDS: { key: FieldKey; label: string; color: string }[] = [
  { key: "ticket", label: "チケット代", color: "bg-amber-400" },
  { key: "transport", label: "交通費", color: "bg-sky-400" },
  { key: "stay", label: "宿泊費", color: "bg-violet-400" },
  { key: "food", label: "飲食費", color: "bg-emerald-400" },
  { key: "goods", label: "グッズ代", color: "bg-pink-400" },
  { key: "other", label: "その他", color: "bg-zinc-400" },
];

function toNumber(v: string) {
  const n = Number(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function BudgetSimulatorClient() {
  const [people, setPeople] = useState("1");
  const [values, setValues] = useState<Record<FieldKey, string>>({
    ticket: "",
    transport: "",
    stay: "",
    food: "",
    goods: "",
    other: "",
  });

  const peopleCount = Math.max(1, toNumber(people) || 1);

  const amounts = useMemo(() => {
    return FIELDS.map((f) => ({ ...f, amount: toNumber(values[f.key]) }));
  }, [values]);

  const total = amounts.reduce((sum, f) => sum + f.amount, 0);
  const perPerson = total / peopleCount;

  return (
    <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
      <h1 className="text-xl font-bold text-zinc-900">フェス予算シミュレーター</h1>
      <p className="mt-1 text-sm text-zinc-500">
        金額を入力すると合計・1人あたりの費用がリアルタイムで計算されます。
      </p>

      <div className="mt-6">
        <label className="mb-1.5 block text-sm font-semibold text-zinc-800">人数</label>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-24 rounded-lg border border-zinc-300 px-3 py-2 text-sm"
        />
        <span className="ml-2 text-sm text-zinc-500">人</span>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {FIELDS.map((f) => (
          <div key={f.key} className="flex items-center justify-between gap-3">
            <label className="w-24 shrink-0 text-sm font-medium text-zinc-700">{f.label}</label>
            <div className="flex flex-1 items-center gap-1">
              <input
                type="number"
                inputMode="numeric"
                min={0}
                placeholder="0"
                value={values[f.key]}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [f.key]: e.target.value }))
                }
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-right text-sm"
              />
              <span className="text-sm text-zinc-500">円</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-semibold text-zinc-700">合計金額</span>
          <span className="text-2xl font-bold text-zinc-900">
            ¥{total.toLocaleString()}
          </span>
        </div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-zinc-700">1人あたり</span>
          <span className="text-lg font-bold text-amber-700">
            ¥{Math.round(perPerson).toLocaleString()}
          </span>
        </div>
      </div>

      {total > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold text-zinc-800">内訳</p>
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-zinc-100">
            {amounts
              .filter((f) => f.amount > 0)
              .map((f) => (
                <div
                  key={f.key}
                  className={f.color}
                  style={{ width: `${(f.amount / total) * 100}%` }}
                  title={f.label}
                />
              ))}
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {amounts
              .filter((f) => f.amount > 0)
              .map((f) => (
                <li key={f.key} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-zinc-600">
                    <span className={`h-2.5 w-2.5 rounded-full ${f.color}`} />
                    {f.label}
                  </span>
                  <span className="text-zinc-700">
                    ¥{f.amount.toLocaleString()}
                    <span className="ml-1 text-xs text-zinc-400">
                      ({Math.round((f.amount / total) * 100)}%)
                    </span>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}

      {total > 0 && (
        <div className="mt-8 flex flex-col gap-2">
          <ResultCTA href="/tools/festival-packing-list" label="🎒 持ち物リストも作る" />
          <ResultCTA href="/items" label="フェス用品一覧を見る" />
        </div>
      )}
    </div>
  );
}
