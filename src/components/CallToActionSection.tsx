import Link from "next/link";
import { Button } from "./ui/button";

export function CallToActionSection() {
    return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b2c77_0%,#11419f_48%,#12bfa6_100%)] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold sm:text-3xl md:text-4xl">Pronto para operar com mais confiança?</h2>
          <p className="mb-8 text-base text-primary-foreground/90 md:text-lg">Crie sua conta, conheça o fluxo da plataforma e avance com uma gestão mais organizada e moderna.</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#0b2c77] shadow-lg shadow-black/10 hover:bg-[#f4fbfb] sm:w-auto" asChild>
              <Link href="/onboarding">Começar teste grátis</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#0b2c77] sm:w-auto" asChild>
              <Link href="/#contact-specialist">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    )
}
