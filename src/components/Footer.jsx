export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <div>
          <p className="font-display font-bold">
            TECH BUILDERS
          </p>

          <p className="text-xs text-slate-600 mt-1">
            Build. Innovate. Transform.
          </p>
        </div>

        <p className="text-xs text-slate-600">
          © 2026 Tech Builders
        </p>

      </div>
    </footer>
  );
}