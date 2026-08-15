"use client";

import { useMemo, useState } from "react";
import { PACKING_ITEMS } from "@/data/packingItems";
import { getProductById } from "@/data/products";
import { PACKING_CATEGORY_LABELS, type PackingAnswers, type PackingCategory } from "@/data/types";
import ProductLinks from "@/components/ProductLinks";

const CATEGORY_ORDER: PackingCategory[] = ["must", "heat", "rain", "phone", "hygiene", "nice", "stay"];

type Status = "unset" | "have" | "need";

const QUESTIONS: {
  key: keyof PackingAnswers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "venue",
    question: "会場は屋外?屋内?",
    options: [
      { value: "outdoor", label: "屋外" },
      { value: "indoor", label: "屋内" },
    ],
  },
  {
    key: "stay",
    question: "日帰り?宿泊?",
    options: [
      { value: "day", label: "日帰り" },
      { value: "overnight", label: "宿泊" },
    ],
  },
  {
    key: "weather",
    question: "天気予報は?",
    options: [
      { value: "sunny", label: "晴れ" },
      { value: "maybe_rain", label: "雨の可能性あり" },
      { value: "rain", label: "雨" },
    ],
  },
  {
    key: "duration",
    question: "滞在時間は?",
    options: [
      { value: "full", label: "朝から夜まで" },
      { value: "half", label: "半日程度" },
    ],
  },
  {
    key: "transport",
    question: "移動手段は?",
    options: [
      { value: "train", label: "電車" },
      { value: "car", label: "車" },
      { value: "other", label: "その他" },
    ],
  },
];

export default function PackingListClient() {
  const [answers, setAnswers] = useState<Partial<PackingAnswers>>({});
  const [statuses, setStatuses] = useState<Record<string, Status>>({});

  const isComplete = QUESTIONS.every((q) => answers[q.key] !== undefined);

  const items = useMemo(() => {
    if (!isComplete) return [];
    const a = answers as PackingAnswers;
    return PACKING_ITEMS.filter((item) => item.show(a));
  }, [answers, isComplete]);

  const grouped = useMemo(() => {
    const map = new Map<PackingCategory, typeof items>();
    for (const item of items) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return map;
  }, [items]);

  function setAnswer(key: keyof PackingAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function toggleStatus(id: string, value: Status) {
    setStatuses((prev) => ({ ...prev, [id]: prev[id] === value ? "unset" : value }));
  }

  if (!isComplete) {
    return (
      <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
        <h1 className="text-xl font-bold text-zinc-900">夏フェス持ち物チェッカー</h1>
        <p className="mt-1 text-sm text-zinc-500">
          5つの質問に答えると、あなたに必要な持ち物リストが作成されます。
        </p>

        <div className="mt-6 flex flex-col gap-6">
          {QUESTIONS.map((q) => (
            <div key={q.key}>
              <p className="mb-2 text-sm font-semibold text-zinc-800">{q.question}</p>
              <div className="flex flex-wrap gap-2">
                {q.options.map((opt) => {
                  const selected = answers[q.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setAnswer(q.key, opt.value)}
                      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors active:scale-[0.97] ${
                        selected
                          ? "border-amber-500 bg-amber-500 text-white"
                          : "border-zinc-300 bg-white text-zinc-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-900">あなたの持ち物リスト</h1>
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setStatuses({});
          }}
          className="text-xs font-medium text-zinc-500 underline underline-offset-2"
        >
          質問をやり直す
        </button>
      </div>
      <p className="mt-1 text-sm text-zinc-500">
        「持っている」「まだ持っていない」をタップして管理できます。
      </p>

      <div className="mt-6 flex flex-col gap-6">
        {CATEGORY_ORDER.filter((c) => grouped.has(c)).map((category) => (
          <div key={category}>
            <h2 className="mb-2 text-sm font-bold text-amber-700">
              {PACKING_CATEGORY_LABELS[category]}
            </h2>
            <ul className="flex flex-col gap-2">
              {grouped.get(category)!.map((item) => {
                const status = statuses[item.id] ?? "unset";
                const product = item.productId ? getProductById(item.productId) : undefined;
                return (
                  <li
                    key={item.id}
                    className="rounded-xl border border-zinc-200 bg-white p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-sm font-medium ${
                          status === "have" ? "text-zinc-400 line-through" : "text-zinc-800"
                        }`}
                      >
                        {item.label}
                      </span>
                      <div className="flex shrink-0 gap-1.5">
                        <button
                          type="button"
                          onClick={() => toggleStatus(item.id, "have")}
                          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                            status === "have"
                              ? "bg-emerald-500 text-white"
                              : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          持っている
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleStatus(item.id, "need")}
                          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                            status === "need"
                              ? "bg-amber-500 text-white"
                              : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          まだ持っていない
                        </button>
                      </div>
                    </div>
                    {status === "need" && product && (
                      <div className="mt-2">
                        <ProductLinks product={product} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
