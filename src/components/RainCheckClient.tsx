"use client";

import { useMemo, useState } from "react";
import { getProductById } from "@/data/products";
import ProductLinks from "@/components/ProductLinks";

interface RainAnswers {
  intensity: "light" | "heavy" | "long";
  venueType: "outdoor" | "urban";
}

const QUESTIONS: {
  key: keyof RainAnswers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "intensity",
    question: "雨の降り方は?",
    options: [
      { value: "light", label: "小雨" },
      { value: "heavy", label: "本降り" },
      { value: "long", label: "長時間の雨" },
    ],
  },
  {
    key: "venueType",
    question: "会場タイプは?",
    options: [
      { value: "outdoor", label: "野外フェス" },
      { value: "urban", label: "都市型フェス" },
    ],
  },
];

const RECOMMENDATIONS: {
  productId: string;
  show: (a: RainAnswers) => boolean;
}[] = [
  { productId: "rain-poncho", show: () => true },
  { productId: "waterproof-bag-cover", show: (a) => a.venueType === "outdoor" },
  { productId: "waterproof-phone-case", show: () => true },
  { productId: "waterproof-shoes", show: (a) => a.intensity !== "light" },
  { productId: "quick-dry-towel", show: () => true },
  { productId: "dry-bag", show: (a) => a.intensity === "long" || a.venueType === "outdoor" },
];

export default function RainCheckClient() {
  const [answers, setAnswers] = useState<Partial<RainAnswers>>({});
  const [submitted, setSubmitted] = useState(false);
  const answeredCount = QUESTIONS.filter((q) => answers[q.key] !== undefined).length;

  const items = useMemo(() => {
    if (!submitted) return [];
    const a = { ...answers } as unknown as Record<string, string>;
    for (const q of QUESTIONS) {
      if (a[q.key] === undefined) {
        a[q.key] = q.options[0].value;
      }
    }
    const typed = a as unknown as RainAnswers;
    return RECOMMENDATIONS.filter((r) => r.show(typed))
      .map((r) => getProductById(r.productId))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
  }, [answers, submitted]);

  function setAnswer(key: keyof RainAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  if (!submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
        <h1 className="text-xl font-bold text-zinc-900">雨フェス対策診断</h1>
        <p className="mt-1 text-sm text-zinc-500">
          雨の降り方と会場タイプを選ぶだけで、必要な雨対策グッズを提案します。答えなくてもそのまま結果を見られます。
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
                          ? "border-sky-500 bg-sky-500 text-white"
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
          className="mt-8 w-full rounded-full bg-sky-500 py-3.5 text-sm font-bold text-white shadow-sm active:scale-[0.98]"
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

      <div className="mt-6">
        <p className="mb-2 text-sm font-bold text-sky-700">おすすめの雨対策グッズ</p>
        <ul className="flex flex-col gap-2">
          {items.map((product) => (
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
    </div>
  );
}
