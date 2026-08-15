import Link from "next/link";

export default function ToolCard({
  href,
  emoji,
  title,
  description,
  accent,
}: {
  href: string;
  emoji: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all active:scale-[0.98] hover:border-zinc-300 hover:shadow-md"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${accent}`}
        aria-hidden
      >
        {emoji}
      </div>
      <div className="flex-1">
        <h2 className="text-base font-bold text-zinc-900">{title}</h2>
        <p className="mt-0.5 text-sm text-zinc-500">{description}</p>
      </div>
      <span className="text-zinc-300 group-hover:text-zinc-400" aria-hidden>
        ›
      </span>
    </Link>
  );
}
