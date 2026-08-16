import type { Product } from "@/data/types";
import { buildAmazonSearchUrl, buildRakutenSearchUrl } from "@/lib/affiliate";

export default function ProductLinks({ product }: { product: Product }) {
  const keyword = product.searchKeyword ?? product.name;

  return (
    <div className="flex gap-2">
      <a
        href={buildAmazonSearchUrl(keyword)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-amber-400 hover:text-amber-700"
      >
        Amazonで見る
      </a>
      <a
        href={buildRakutenSearchUrl(keyword)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-red-400 hover:text-red-700"
      >
        楽天で見る
      </a>
    </div>
  );
}
