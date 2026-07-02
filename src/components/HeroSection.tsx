import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  const highlights = [
    { value: "100%", label: "operacional digital" },
    { value: "24h", label: "para iniciar o teste" },
    { value: "+controle", label: "sobre cobranças e associados" },
  ];

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f9fbff_0%,#eef4ff_46%,#f8fffd_100%)]" />
      <div className="absolute left-[-6rem] top-16 -z-10 h-72 w-72 rounded-full bg-[#0b2c77]/10 blur-3xl" />
      <div className="absolute right-[-4rem] top-36 -z-10 h-64 w-64 rounded-full bg-[#12bfa6]/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c9d9ef] to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7e2ef] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c77] shadow-sm backdrop-blur">
              Gestão profissional para associações
            </div>
            <h1 className="mt-6 max-w-xl text-center font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 md:text-left md:text-6xl">
              Mais controle, mais confiança e uma operação visivelmente mais moderna.
            </h1>
            <p className="mt-6 text-center text-base leading-7 text-slate-600 md:text-left md:text-lg">
              Centralize associados, cobranças, planos e relatórios em uma plataforma clara, confiável e pronta para apoiar uma rotina mais profissional.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" className="w-full rounded-full px-6 py-4 shadow-lg shadow-[#0b2c77]/20 sm:w-auto" variant="blue" asChild>
                <Link href="/onboarding">Começar teste grátis</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full rounded-full border-[#d7e2ef] px-6 py-4 sm:w-auto" asChild>
                <Link href="/#contact-specialist">Falar com especialista</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Cobrança e inadimplência sob controle",
                "Relatórios para decisões mais rápidas",
                "Interface pensada para operação diária",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#d7e2ef] bg-white/80 px-4 py-4 shadow-sm backdrop-blur">
                  <div className="text-xl font-semibold text-slate-950">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[560px] rounded-[1.9rem] border border-white/70 bg-white/90 p-4 shadow-[0_24px_80px_rgba(11,44,119,0.16)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Visão executiva</p>
                  <p className="text-sm font-medium text-slate-900">Indicadores em tempo real</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  operação ativa
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border border-slate-100">
                <Image
                  src="/system_preview.webp"
                  alt="Prévia do dashboard do sistema"
                  width={1120}
                  height={760}
                  priority
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
