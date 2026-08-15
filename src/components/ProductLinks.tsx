import type { Product } from "@/data/types";

export default function ProductLinks({ product }: { product: Product }) {
  if (!product.amazonUrl && !product.rakutenUrl) return null;

  return (
    <div className="flex gap-2">
      {product.amazonUrl && (
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-amber-400 hover:text-amber-700"
        >
          Amazonで見る
        </a>
      )}
      {product.rakutenUrl && (
        <a
          href={product.rakutenUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-red-400 hover:text-red-700"
        >
          楽天で見る
        </a>
      )}
    </div>
  );
}
