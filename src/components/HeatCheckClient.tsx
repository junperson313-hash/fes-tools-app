"use client";

import { useMemo } from "react";
import { getProductById } from "@/data/products";
import ProductLinks from "@/components/ProductLinks";
import ResultCTA from "@/components/ResultCTA";
import { useLocalStorageState } from "@/lib/useLocalStorageState";

interface HeatAnswers {
  temp: "under30" | "30to35" | "over35";
  venue: "outdoor" | "indoor";
  duration: "short" | "medium" | "long";
  shade: "much" | "little" | "none";
  time: "day" | "evening" | "night";
}

const QUESTIONS: {
  key: keyof HeatAnswers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "temp",
    question: "予想気温は?",
    options: [
      { value: "under30", label: "30℃未満" },
      { value: "30to35", label: "30〜35℃" },
      { value: "over35", label: "35℃以上" },
    ],
  },
  {
    key: "venue",
    question: "会場は屋外?屋内?",
    options: [
      { value: "outdoor", label: "屋外" },
      { value: "indoor", label: "屋内" },
    ],
  },
  {
    key: "duration",
    question: "滞在予定時間は?",
    options: [
      { value: "short", label: "〜3時間" },
      { value: "medium", label: "3〜6時間" },
      { value: "long", label: "6時間以上" },
    ],
  },
  {
    key: "shade",
    question: "日陰の多さは?",
    options: [
      { value: "much", label: "多い" },
      { value: "little", label: "少ない" },
      { value: "none", label: "ほぼ無い" },
    ],
  },
  {
    key: "time",
    question: "メインの時間帯は?",
    options: [
      { value: "day", label: "昼中心" },
      { value: "evening", label: "夕方中心" },
      { value: "night", label: "夜中心" },
    ],
  },
];

const RECOMMENDATIONS: {
  productId: string;
  show: (a: HeatAnswers) => boolean;
}[] = [
  { productId: "cap-hat", show: (a) => a.venue === "outdoor" && a.time !== "night" },
  { productId: "sunscreen", show: (a) => a.venue === "outdoor" && a.time !== "night" },
  { productId: "cooling-towel", show: (a) => a.venue === "outdoor" },
  { productId: "neck-fan", show: (a) => a.duration !== "short" },
  { productId: "cooling-spray", show: (a) => a.temp !== "under30" },
  { productId: "salt-candy", show: (a) => a.temp === "over35" || a.duration === "long" },
  { productId: "sports-drink", show: () => true },
  { productId: "cooling-inner", show: (a) => a.temp === "over35" },
  { productId: "portable-parasol", show: (a) => a.venue === "outdoor" && a.shade !== "much" },
];

function calcRiskLevel(a: HeatAnswers): { label: string; color: string; advice: string } {
  let score = 0;
  if (a.temp === "30to35") score += 1;
  if (a.temp === "over35") score += 2;
  if (a.venue === "outdoor") score += 1;
  if (a.duration === "medium") score += 1;
  if (a.duration === "long") score += 2;
  if (a.shade === "little") score += 1;
  if (a.shade === "none") score += 2;
  if (a.time === "day") score += 1;

  if (score >= 6) {
    return {
      label: "危険レベル",
      color: "bg-red-100 text-red-700 border-red-200",
      advice: "熱中症リスクが高い条件です。こまめな休憩と水分・塩分補給を徹底しましょう。",
    };
  }
  if (score >= 3) {
    return {
      label: "警戒レベル",
      color: "bg-amber-100 text-amber-700 border-amber-200",
      advice: "しっかり対策すれば安心。冷却グッズと日陰の確保を意識しましょう。",
    };
  }
  return {
    label: "注意レベル",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    advice: "比較的リスクは低めですが、基本の暑さ対策は忘れずに。",
  };
}

export default function HeatCheckClient() {
  const [answers, setAnswers] = useLocalStorageState<Partial<HeatAnswers>>(
    "fes-heat-answers",
    {}
  );
  const [submitted, setSubmitted] = useLocalStorageState<boolean>("fes-heat-submitted", false);
  const answeredCount = QUESTIONS.filter((q) => answers[q.key] !== undefined).length;

  const result = useMemo(() => {
    if (!submitted) return null;
    const a = { ...answers } as unknown as Record<string, string>;
    for (const q of QUESTIONS) {
      if (a[q.key] === undefined) {
        a[q.key] = q.options[0].value;
      }
    }
    const typed = a as unknown as HeatAnswers;
    return {
      risk: calcRiskLevel(typed),
      items: RECOMMENDATIONS.filter((r) => r.show(typed))
        .map((r) => getProductById(r.productId))
        .filter((p): p is NonNullable<typeof p> => Boolean(p)),
    };
  }, [answers, submitted]);

  function setAnswer(key: keyof HeatAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  if (!submitted || !result) {
    return (
      <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
        <h1 className="text-xl font-bold text-zinc-900">暑さ対策診断</h1>
        <p className="mt-1 text-sm text-zinc-500">
          5つの質問で熱中症リスクをチェックし、必要な暑さ対策グッズを提案します。答えなくてもそのまま結果を見られます。
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
                          ? "border-orange-500 bg-orange-500 text-white"
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

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-8 w-full rounded-full bg-orange-500 py-3.5 text-sm font-bold text-white shadow-sm active:scale-[0.98]"
        >
          {answeredCount === QUESTIONS.length
            ? "診断結果を見る"
            : `この内容で診断する(${answeredCount}/${QUESTIONS.length}問回答)`}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-900">診断結果</h1>
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setSubmitted(false);
          }}
          className="text-xs font-medium text-zinc-500 underline underline-offset-2"
        >
          質問をやり直す
        </button>
      </div>

      <div className={`mt-4 rounded-2xl border p-4 ${result.risk.color}`}>
        <p className="text-lg font-bold">{result.risk.label}</p>
        <p className="mt-1 text-sm">{result.risk.advice}</p>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-bold text-orange-700">おすすめの暑さ対策グッズ</p>
        <ul className="flex flex-col gap-2">
          {result.items.map((product) => (
            <li key={product.id} className="rounded-xl border border-zinc-200 bg-white p-3">
              <p className="text-sm font-medium text-zinc-800">{product.name}</p>
              <p className="mt-0.5 text-xs text-zinc-500">{product.description}</p>
              <div className="mt-2">
                <ProductLinks product={product} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <ResultCTA href="/items?category=heat" label="☀️ 暑さ対策グッズをもっと見る" />
        <ResultCTA href="/tools/festival-packing-list" label="🎒 持ち物リストも作る" />
      </div>
    </div>
  );
}
