import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-1.5 text-lg font-bold text-zinc-900">
          <span aria-hidden>🎪</span>
          <span>夏フェス便利ツール</span>
        </Link>
        <Link
          href="/items"
          className="text-sm font-medium text-zinc-600 hover:text-amber-600"
        >
          用品一覧
        </Link>
      </div>
    </header>
  );
}
