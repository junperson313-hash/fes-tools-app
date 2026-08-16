export default function AdDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-center gap-1 text-[11px] text-zinc-400 ${className}`}>
      <span className="rounded border border-zinc-300 px-1 py-px font-bold">PR</span>
      Amazonのアソシエイトとして、当サイトは適格販売により収入を得ています。
    </p>
  );
}
