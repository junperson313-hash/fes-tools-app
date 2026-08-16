import ToolCard from "@/components/ToolCard";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-10">
      <section className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold text-amber-600">無料・登録不要</p>
        <h1 className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
          夏フェス、何持っていけばいい？
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
          数問答えるだけで、持ち物・予算・暑さ対策・雨対策がすぐわかる。
          <br />
          フェスに行く前から当日までこれ1つ。
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <ToolCard
          href="/tools/festival-packing-list"
          emoji="🎒"
          title="持ち物を調べる"
          description="質問に答えるだけで必要な持ち物リストを自動作成"
          accent="bg-amber-100"
        />
        <ToolCard
          href="/tools/festival-budget"
          emoji="💰"
          title="予算を計算する"
          description="チケット代・交通費・宿泊費から合計と1人あたりを算出"
          accent="bg-emerald-100"
        />
        <ToolCard
          href="/tools/heat-check"
          emoji="☀️"
          title="暑さ対策を診断"
          description="気温や滞在時間から必要な熱中症対策グッズを提案"
          accent="bg-orange-100"
        />
        <ToolCard
          href="/tools/rain-check"
          emoji="☔"
          title="雨対策を診断"
          description="降り方や会場タイプから必要な雨具を提案"
          accent="bg-sky-100"
        />
      </section>

      <section className="mt-10 rounded-2xl bg-zinc-100 p-4 text-center">
        <p className="text-sm text-zinc-600">
          持ち物・グッズをカテゴリ別にまとめて見たい方はこちら
        </p>
        <a
          href="/items"
          className="mt-2 inline-block text-sm font-semibold text-amber-700 underline underline-offset-2"
        >
          フェス用品を見る →
        </a>
      </section>

      <FeaturedProducts />
    </div>
  );
}
