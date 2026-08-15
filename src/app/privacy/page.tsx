import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${SITE_NAME}におけるプライバシーポリシー(個人情報の取り扱い、アクセス解析、広告について)。`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
      <h1 className="text-xl font-bold text-zinc-900">プライバシーポリシー</h1>
      <p className="mt-2 text-sm text-zinc-500">
        {SITE_NAME}(以下「当サイト」といいます)は、ご利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
      </p>

      <div className="mt-8 flex flex-col gap-8">
        <section>
          <h2 className="text-base font-bold text-zinc-800">個人情報の取得について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトの各種診断・シミュレーターツールは、氏名やメールアドレスなど個人を特定できる情報の入力・送信を求めるものではありません。入力内容はお使いの端末内(ブラウザのローカルストレージ)にのみ保存され、当サイトのサーバーに送信・保存されることはありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">アクセス解析ツールについて</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトでは、サイトの利用状況を把握するためGoogle社が提供するアクセス解析ツール「Google
            Analytics」を導入する場合があります。Google
            Analyticsはトラフィックデータの収集のためにCookieを使用しますが、この機能はCookieを無効にすることで収集を拒否することが可能です。詳細はGoogle社のプライバシーポリシーをご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">広告・アフィリエイトプログラムについて</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトは、Amazonアソシエイト・プログラムをはじめとする各種アフィリエイトプログラムに参加する場合があります。当サイトで紹介する商品リンクを経由して商品を購入されると、売上の一部が当サイトの収益となることがあります。これらのプログラムの参加企業がCookie等を利用して情報を取得する場合がありますが、これは各プログラム提供企業のプライバシーポリシーに基づくものです。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">免責事項について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトのコンテンツ・情報について、できる限り正確な情報を提供するよう努めておりますが、正確性や安全性を保証するものではありません。詳しくは
            <a href="/disclaimer" className="text-amber-600 underline underline-offset-2">
              免責事項
            </a>
            をご覧ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">プライバシーポリシーの変更について</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            当サイトは、法令等に反しない範囲において、本ポリシーの内容を予告なく変更できるものとします。変更後のプライバシーポリシーについては、当サイトに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-zinc-800">お問い合わせ</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            本ポリシーに関するお問い合わせは
            <a href="/contact" className="text-amber-600 underline underline-offset-2">
              お問い合わせページ
            </a>
            よりご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
