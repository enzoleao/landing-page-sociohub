"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "./button";

export function Header() {
  const menuItems = [
    { id: "home", label: "Início" },
    { id: "features", label: "Funcionalidades" },
    { id: "integrations", label: "Integrações" },
    { id: "reviews", label: "Avaliações" },
    { id: "contact", label: "Contato" },
  ];

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4">
        <div className="flex items-center p-0">
          <img src="/logo.png" alt="Sócio Hub Logo" className="p-0 h-22" />
        </div>

        <nav className="hidden md:flex justify-center">
          <ul className="flex gap-8 text-sm items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-end md:hidden">
          <button
            aria-label="Abrir menu"
            className="p-2 rounded-md border hover:bg-slate-50"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex flex-col gap-3 text-sm">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
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