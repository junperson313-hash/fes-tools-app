"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORY_LABELS, type ProductCategory } from "@/data/types";
import ProductLinks from "@/components/ProductLinks";

const CATEGORIES: ProductCategory[] = ["rain", "heat", "phone", "bag", "convenience", "camp"];

export default function ItemsClient() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const products = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8">
      <h1 className="text-xl font-bold text-zinc-900">フェス用品</h1>
      <p className="mt-1 text-sm text-zinc-500">カテゴリ別に持ち物・グッズをまとめてチェックできます。</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
            filter === "all"
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
            onClick={() => setFilter(c)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              filter === c
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 bg-white text-zinc-600"
            }`}
          >
            {PRODUCT_CATEGORY_LABELS[c]}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
