import Image from "next/image";

type Integration = {
  title: string;
  description: string;
  iconBg?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};
const integrations: Integration[] = [
  {
    title: "Asaas Gateway",
    description: "Gestão completa de cobranças e pagamentos",
    imageSrc: "/assets/logo_asaas.png",
    imageAlt: "Logo Asaas",
  },
  {
    title: "Email",
    description: "Notificações automáticas",
    iconBg: "bg-[#eef3ff]",
    icon: (
      <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    ),
  },
  {
    title: "Relatórios",
    description: "Exportação em PDF/Excel",
    iconBg: "bg-[#edf4ff]",
    icon: (
      <svg className="w-6 h-6 text-[#0b2c77]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6v6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18"></path></svg>
    ),
  },
];

export function IntegrationsSection() {
    return (
    <section id="integrations" className="py-16 scroll-mt-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e2ef] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c77] shadow-sm">
            Integrações confiáveis
          </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Conecte sua operação ao que realmente importa</h2>
            <p className="mt-3 text-muted-foreground">
              Integrações selecionadas para cobrança, comunicação e relatórios sem adicionar complexidade desnecessária.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <div key={i.title} className="group flex h-full flex-col items-center rounded-[1.5rem] border border-[#d7e2ef] bg-white p-6 text-center shadow-[0_18px_50px_rgba(11,44,119,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,44,119,0.1)]">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 overflow-hidden ${i.imageSrc ? "" : (i.iconBg ?? "")}`}>
                  {i.imageSrc ? (
                    <Image src={i.imageSrc} alt={i.imageAlt ?? i.title} width={56} height={56} className="h-12 w-12 rounded-full object-contain" />
                  ) : (
                    i.icon
                  )}
                </div>
                <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">{i.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
