import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "免責事項",
  description: `${SITE_NAME}の免責事項について。掲載情報の正確性、外部リンク、著作権に関する注意事項を記載しています。`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
      <h1 className="text-xl font-bold text-zinc-900">免責事項</h1>
      <p className="mt-2 text-sm text-zinc-500">
        {SITE_NAME}(以下「当サイト」といいます)をご利用いただく前に、以下の免責事項をご確認ください。
      </p>

      <div className="mt-8 flex flex-col gap-8">
        <section>
          <h2 className="text-base font-bold text-zinc-800">掲載情報の正確性について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトの持ち物リスト・予算計算・暑さ対策/雨対策の診断結果は、一般的な目安として提供するものであり、内容の正確性・完全性・最新性を保証するものではありません。会場のルールや天候、体調等は個人差がありますので、実際の持ち物や対策については、開催地の最新情報や天気予報、フェス公式サイトの案内も合わせてご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">熱中症・体調管理について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            暑さ対策診断は熱中症のリスクを完全に排除するものではありません。体調に異常を感じた場合は、無理をせず速やかに日陰で休息を取り、必要に応じて会場スタッフや医療機関にご相談ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">商品・アフィリエイトリンクについて</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトで紹介する商品は、Amazon・楽天市場等のアフィリエイトプログラムを利用してリンクを設置している場合があります。商品の購入は必ずご自身の判断と責任において行ってください。商品の仕様・価格・在庫状況はリンク先の販売ページの情報が優先されます。購入後のトラブルについて、当サイトは責任を負いかねます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">外部サイトへのリンクについて</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報・サービス等について当サイトは一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">著作権について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトに掲載しているコンテンツ(文章・画像・プログラム等)の著作権は当サイトまたは正当な権利を有する第三者に帰属します。無断での複製・転載はご遠慮ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">免責事項の変更について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトは、必要に応じて予告なく本免責事項の内容を変更することがあります。変更後の内容は、当サイトに掲載した時点から適用されるものとします。
          </p>
        </section>
      </div>
    </div>
  );
}
