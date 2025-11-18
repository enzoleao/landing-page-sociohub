const Stars = () => (
  <div className="flex gap-1 text-amber-400">
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
    <section id="reviews" className="py-16 md:py-20 scroll-mt-16">
    <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">O que nossos clientes dizem</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Veja como estamos transformando a gestão de associações pelo Brasil</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Stars />
                </div>
                <blockquote className="text-sm text-muted-foreground mb-6">"{t.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{t.initials}</div>
                  <div>
                    <div className="font-semibold">{t.author}</div>
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