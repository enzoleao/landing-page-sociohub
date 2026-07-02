const Stars = () => (
  <div className="flex gap-1 text-[#17c7aa]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

type Testimonial = { quote: string; author: string; role: string; initials: string };
const testimonials: Testimonial[] = [
  {
    quote:
      "Revolucionou nossa gestão! Agora conseguimos controlar todos os associados e pagamentos de forma muito mais eficiente. Recomendo para qualquer associação.",
    author: "Maria Santos",
    role: "Presidente - Associação dos Comerciantes",
    initials: "MS",
  },
  {
    quote:
      "Interface muito intuitiva e funcionalidades completas. O sistema de pagamentos com desconto antecipado aumentou nossa arrecadação em 30%.",
    author: "Carlos Lima",
    role: "Tesoureiro - Clube Recreativo",
    initials: "CL",
  },
  {
    quote:
      "Suporte excepcional e sistema muito estável. Conseguimos digitalizar completamente nossa gestão e os associados adoraram a praticidade.",
    author: "Ana Costa",
    role: "Diretora - Associação de Moradores",
    initials: "AC",
  },
];

export function ClientFeedbackSetion() {
    return (
    <section id="reviews" className="py-16 scroll-mt-16 md:py-24">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e2ef] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c77] shadow-sm">
              Prova social
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">O que clientes destacam depois da implementação</h2>
            <p className="mt-3 text-muted-foreground">Relatos que reforçam clareza, estabilidade e ganho de controle na rotina da associação.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 items-stretch">
            {testimonials.map((t) => (
              <div key={t.author} className="flex h-full flex-col rounded-[1.5rem] border border-[#d9e9ec] bg-white p-6 shadow-[0_18px_50px_rgba(11,44,119,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,44,119,0.1)]">
                <div className="flex items-start gap-3 mb-3">
                  <Stars />
                </div>
                <blockquote className="mb-6 flex-1 text-sm text-muted-foreground">
                  <span aria-hidden="true">“</span>
                  {t.quote}
                  <span aria-hidden="true">”</span>
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef4fd] font-semibold text-[#0b2c77]">{t.initials}</div>
                  <div>
                    <div className="font-[family-name:var(--font-space-grotesk)] font-semibold">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
