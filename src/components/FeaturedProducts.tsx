import { getFeaturedProducts } from "@/data/products";
import { buildAmazonSearchUrl } from "@/lib/affiliate";
import AdDisclosure from "@/components/AdDisclosure";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-zinc-800">あると便利な持ち物</h2>
        <a href="/items" className="text-xs font-medium text-amber-600 underline underline-offset-2">
          もっと見る
        </a>
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
        {products.map((product) => (
          <a
            key={product.id}
            href={buildAmazonSearchUrl(product.searchKeyword ?? product.name)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex w-32 shrink-0 flex-col rounded-xl border border-zinc-200 bg-white p-3 transition-colors hover:border-amber-300"
          >
            <span className="text-sm font-bold text-zinc-800">{product.name}</span>
            <span className="mt-auto pt-3 text-xs font-medium text-amber-600">Amazonで見る</span>
          </a>
        ))}
      </div>
      <AdDisclosure className="mt-2" />
    </section>
  );
}
