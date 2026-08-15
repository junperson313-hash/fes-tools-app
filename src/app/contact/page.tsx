import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${SITE_NAME}へのお問い合わせについて。`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-16 pt-8">
      <h1 className="text-xl font-bold text-zinc-900">お問い合わせ</h1>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        {SITE_NAME}に関するご意見・ご要望・掲載内容の誤りのご指摘などがございましたら、下記の連絡先までお気軽にご連絡ください。内容を確認のうえ、対応させていただきます。
      </p>

      <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4">
        {CONTACT_EMAIL ? (
          <p className="text-sm text-zinc-700">
            メールアドレス:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-600 underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
          </p>
        ) : (
          <p className="text-sm text-zinc-500">
            現在お問い合わせ窓口を準備中です。しばらくお待ちください。
          </p>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-zinc-400">
        ご連絡内容によっては、返信までにお時間をいただく場合や、お答えできない場合がございます。あらかじめご了承ください。
      </p>
    </div>
  );
}
