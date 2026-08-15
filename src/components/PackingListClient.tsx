"use client";

import { useMemo } from "react";
import { PACKING_ITEMS } from "@/data/packingItems";
import { getProductById } from "@/data/products";
import { PACKING_CATEGORY_LABELS, type PackingAnswers, type PackingCategory } from "@/data/types";
import ProductLinks from "@/components/ProductLinks";
import ResultCTA from "@/components/ResultCTA";
import { useLocalStorageState } from "@/lib/useLocalStorageState";

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
  const [answers, setAnswers] = useLocalStorageState<Partial<PackingAnswers>>(
    "fes-packing-answers",
    {}
  );
  const [statuses, setStatuses] = useLocalStorageState<Record<string, Status>>(
    "fes-packing-statuses",
    {}
  );
  const [submitted, setSubmitted] = useLocalStorageState<boolean>("fes-packing-submitted", false);

  const answeredCount = QUESTIONS.filter((q) => answers[q.key] !== undefined).length;

  const items = useMemo(() => {
    if (!submitted) return [];
    const a = { ...answers } as unknown as Record<string, string>;
    for (const q of QUESTIONS) {
      if (a[q.key] === undefined || a[q.key] === "unknown") {
        a[q.key] = q.options[0].value;
      }
    }
    return PACKING_ITEMS.filter((item) => item.show(a as unknown as PackingAnswers));
  }, [answers, submitted]);

  const grouped = useMemo(() => {
    const map = new Map<PackingCategory, typeof items>();
    for (const item of items) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return map;
  }, [items]);

  const needCount = items.filter((item) => statuses[item.id] === "need").length;
  const suggestsRain = answers.weather === "rain" || answers.weather === "maybe_rain";
  const suggestsOvernight = answers.stay === "overnight";

  function setAnswer(key: keyof PackingAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function toggleStatus(id: string, value: Status) {
    setStatuses((prev) => ({ ...prev, [id]: prev[id] === value ? "unset" : value }));
  }

  if (!submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
        <h1 className="text-xl font-bold text-zinc-900">夏フェス持ち物チェッカー</h1>
        <p className="mt-1 text-sm text-zinc-500">
          5つの質問に答えると、あなたに必要な持ち物リストが作成されます。答えなくてもそのまま結果を見られます。
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
                <button
                  type="button"
                  onClick={() => setAnswer(q.key, "unknown")}
                  className={`rounded-full border border-dashed px-4 py-2.5 text-sm font-medium transition-colors active:scale-[0.97] ${
                    (answers[q.key] as string | undefined) === "unknown"
                      ? "border-zinc-400 bg-zinc-200 text-zinc-600"
                      : "border-zinc-300 bg-white text-zinc-400"
                  }`}
                >
                  わからない
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-8 w-full rounded-full bg-amber-500 py-3.5 text-sm font-bold text-white shadow-sm active:scale-[0.98]"
        >
          {answeredCount === QUESTIONS.length
            ? "持ち物リストを見る"
            : `この内容で結果を見る(${answeredCount}/${QUESTIONS.length}問回答)`}
        </button>
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
            setSubmitted(false);
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

      <div className="mt-8 flex flex-col gap-2">
        {needCount > 0 && (
          <p className="px-1 text-xs text-zinc-400">
            「まだ持っていない」が{needCount}件あります。商品リンクから確認できます。
          </p>
        )}
        {suggestsRain && (
          <ResultCTA href="/items?scenario=rainy" label="☔ 雨予報の日向けグッズを見る" />
        )}
        {suggestsOvernight && (
          <ResultCTA href="/items?scenario=overnight" label="🏕️ 泊まりフェス向けグッズを見る" />
        )}
        <ResultCTA href="/items" label="フェス用品一覧を見る" />
      </div>
    </div>
  );
}
