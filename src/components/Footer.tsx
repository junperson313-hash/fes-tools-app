import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const LEGAL_LINKS = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/disclaimer", label: "免責事項" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-xs leading-relaxed text-zinc-500">
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {LEGAL_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-zinc-700 hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="mt-4">
        当サイトではAmazon.co.jp・楽天市場等のアフィリエイト広告を利用する場合があります。
        商品購入により当サイトが紹介料を得ることがあります。
      </p>
      <p className="mt-1">© {new Date().getFullYear()} {SITE_NAME}</p>
    </footer>
  );
}
