export default function Footer() {
  return (
    <footer className="relative border-t border-violet-500/10 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-500">
          <span className="text-violet-400">&lt;/&gt;</span> Designed & built by{" "}
          <span className="text-slate-300">Ahmer Rehman</span>
        </p>
        <p className="font-mono text-xs text-slate-600">
          React · Three.js · Framer Motion · Tailwind
        </p>
      </div>
    </footer>
  );
}
