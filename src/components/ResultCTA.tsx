import Link from "next/link";

export default function ResultCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-amber-300 hover:text-amber-700"
    >
      {label}
      <span className="text-zinc-300" aria-hidden>
        ›
      </span>
    </Link>
  );
}
