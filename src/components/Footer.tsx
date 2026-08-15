export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-xs leading-relaxed text-zinc-500">
      <p>
        当サイトは Amazon.co.jp、楽天市場等のアフィリエイトプログラムを利用しており、
        商品購入により当サイトが紹介料を得ることがあります。
      </p>
      <p className="mt-1">© {new Date().getFullYear()} 夏フェス便利ツール</p>
    </footer>
  );
}
