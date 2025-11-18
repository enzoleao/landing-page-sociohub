type Integration = { title: string; description: string; iconBg: string; icon: React.ReactNode };
const integrations: Integration[] = [
  {
    title: "Supabase",
    description: "Banco de dados e autenticação",
    iconBg: "bg-emerald-50",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path></svg>
    ),
  },
  {
    title: "Stripe",
    description: "Processamento de pagamentos",
    iconBg: "bg-blue-50",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2v4c0 1.105 1.343 2 3 2s3-.895 3-2v-4c0-1.105-1.343-2-3-2z"></path></svg>
    ),
  },
  {
    title: "Email",
    description: "Notificações automáticas",
    iconBg: "bg-violet-50",
    icon: (
      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    ),
  },
  {
    title: "Relatórios",
    description: "Exportação em PDF/Excel",
    iconBg: "bg-amber-50",
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6v6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18"></path></svg>
    ),
  },
];

export function IntegrationsSection() {
    return (
    <section id="integrations" className="bg-slate-50 py-16 md:py-20 scroll-mt-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">Integrações Disponíveis</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Conecte-se com as principais plataformas do mercado para potencializar sua gestão
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((i) => (
              <div key={i.title} className="bg-white border rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full ${i.iconBg} flex items-center justify-center mb-4`}>{i.icon}</div>
                <h4 className="font-semibold">{i.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}