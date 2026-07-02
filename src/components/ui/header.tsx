"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const menuItems = [
    { id: "home", label: "Início" },
    { id: "features", label: "Funcionalidades" },
    { id: "plans", label: "Planos" },
    { id: "integrations", label: "Integrações" },
    { id: "reviews", label: "Avaliações" },
    { id: "contact-specialist", label: "Contato" },
  ];

  const buildHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/60 bg-white/78 backdrop-blur-xl shadow-[0_10px_30px_rgba(11,44,119,0.06)]">
      <div className="container mx-auto grid grid-cols-2 items-center px-4 md:grid-cols-3">
        <div className="flex items-center p-0">
          <Link href={pathname === "/" ? "#home" : "/#home"} aria-label="Ir para o início">
            <img src="/assets/logo_associa_mais_2026.png" alt="Logo Associa Mais" className="h-16 w-auto p-0 md:h-20" />
          </Link>
        </div>

        <nav className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8 text-sm">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={buildHref(item.id)}
                  className="font-medium text-slate-700 transition hover:text-[#0b2c77]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:block">
            <Link
              href={pathname === "/" ? "#plans" : "/#plans"}
              className="inline-flex h-11 items-center rounded-full border border-[#d7e2ef] bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-[#0b2c77]/20 hover:text-[#0b2c77]"
            >
              Ver planos
            </Link>
          </div>

          <button
            aria-label="Abrir menu"
            className="rounded-full border border-[#d9e9ec] bg-white p-2.5 shadow-sm transition hover:bg-[#f4fbfb] md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/60 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex flex-col gap-3 text-sm">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                  href={buildHref(item.id)}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700 transition hover:text-[#0b2c77]"
                >
                  {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
