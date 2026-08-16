"use client";

import { useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { PRODUCTS, getProductsByScenario } from "@/data/products";
import {
  PRODUCT_CATEGORY_LABELS,
  SCENARIO_LABELS,
  type ProductCategory,
  type Scenario,
} from "@/data/types";
import ProductLinks from "@/components/ProductLinks";
import AdDisclosure from "@/components/AdDisclosure";

const CATEGORIES: ProductCategory[] = [
  "heat",
  "rain",
  "power",
  "bag",
  "towel",
  "hat",
  "drink",
  "leisure",
  "camp",
  "misc",
];

const SCENARIOS: Scenario[] = ["beginner", "peak-summer", "rainy", "overnight"];

const SCENARIO_EMOJI: Record<Scenario, string> = {
  beginner: "🔰",
  "peak-summer": "☀️",
  rainy: "☔",
  overnight: "🏕️",
};

export default function ItemsClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeScenario = searchParams.get("scenario") as Scenario | null;
  const activeCategory = searchParams.get("category") as ProductCategory | null;

  const products = useMemo(() => {
    if (activeScenario && SCENARIOS.includes(activeScenario)) {
      return getProductsByScenario(activeScenario);
    }
    if (activeCategory && CATEGORIES.includes(activeCategory)) {
      return PRODUCTS.filter((p) => p.category === activeCategory);
    }
    return PRODUCTS;
  }, [activeScenario, activeCategory]);

  function goTo(params: { category?: ProductCategory; scenario?: Scenario } | null) {
    if (!params) {
      router.push(pathname);
      return;
    }
    const sp = new URLSearchParams();
    if (params.category) sp.set("category", params.category);
    if (params.scenario) sp.set("scenario", params.scenario);
    router.push(`${pathname}?${sp.toString()}`);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8">
      <h1 className="text-xl font-bold text-zinc-900">フェス用品一覧</h1>
      <p className="mt-1 text-sm text-zinc-500">
        カテゴリやシーンから、必要な持ち物・グッズをまとめてチェックできます。
      </p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-bold text-zinc-400">シーンから探す</p>
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => goTo({ scenario: s })}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeScenario === s
                  ? "border-amber-500 bg-amber-500 text-white"
                  : "border-zinc-300 bg-white text-zinc-600"
              }`}
            >
              {SCENARIO_EMOJI[s]} {SCENARIO_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-bold text-zinc-400">カテゴリから探す</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => goTo(null)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              !activeCategory && !activeScenario
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 bg-white text-zinc-600"
            }`}
          >
            すべて
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => goTo({ category: c })}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === c
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 bg-white text-zinc-600"
              }`}
            >
              {PRODUCT_CATEGORY_LABELS[c]}
            </button>
          ))}
        </div>
      </div>

      <AdDisclosure className="mt-6" />

      <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {products.map((product) => (
          <li key={product.id} className="rounded-xl border border-zinc-200 bg-white p-3.5">
            <p className="text-xs font-semibold text-amber-600">
              {PRODUCT_CATEGORY_LABELS[product.category]}
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-800">{product.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">{product.description}</p>
            <div className="mt-3">
              <ProductLinks product={product} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
