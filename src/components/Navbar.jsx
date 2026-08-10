import { useState } from "react";
import { Menu, X, Radio } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Mission", "#mission"],
  ["Team", "#team"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-7xl mx-auto glass rounded-2xl px-5 py-3">
        <div className="flex items-center justify-between">

          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="font-display font-bold text-slate-950">
                TB
              </span>
            </div>

            <div>
              <h1 className="font-display font-bold text-sm tracking-wide">
                TECH BUILDERS
              </h1>
              <p className="text-[8px] text-slate-500 tracking-[0.3em]">
                DIGITAL INNOVATION
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm text-slate-400 hover:text-cyan-300 transition"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-[10px] text-emerald-400">
            <Radio size={13} />
            ONLINE
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pt-4 mt-3 border-t border-slate-800">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-300"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}