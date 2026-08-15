import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 pb-16 pt-20 text-center">
      <p className="text-5xl" aria-hidden>
        🎪
      </p>
      <h1 className="mt-4 text-xl font-bold text-zinc-900">ページが見つかりませんでした</h1>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">
        お探しのページは移動または削除された可能性があります。
        <br />
        URLをご確認いただくか、トップページからやり直してください。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-sm active:scale-[0.98]"
      >
        トップページに戻る
      </Link>
    </div>
  );
}
