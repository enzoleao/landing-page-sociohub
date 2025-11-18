type FeatureCard = { title: string; description: string; iconBg: string; icon: React.ReactNode };
const featureCards: FeatureCard[] = [
  {
    title: "Dashboard Inteligente",
    description: "Visualize métricas importantes em tempo real com gráficos e estatísticas detalhadas.",
    iconBg: "bg-blue-50",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"></path></svg>
    ),
  },
  {
    title: "Gestão de Associados",
    description: "Cadastre e gerencie associados e dependentes com informações completas e organizadas.",
    iconBg: "bg-green-50",
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3h-2M9 20H4v-2a3 3 0 013-3h2m0-6a4 4 0 100-8 4 4 0 000 8z"></path></svg>
    ),
  },
  {
    title: "Pagamentos Online",
    description: "Cobrança completa com múltiplos métodos de pagamento e controle de inadimplência.",
    iconBg: "bg-purple-50",
    icon: (
      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.667 0 1.333.667 1.333 1.333S12.667 10.667 12 10.667 10.667 10 10.667 9.333 11.333 8 12 8zM5 20h14v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2z"></path></svg>
    ),
  },
];

type AlternatingSection = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageFirst?: boolean;
  imageAlt: string;
};

const alternatingSections: AlternatingSection[] = [
  {
    title: "Dashboard Completo com Estatísticas",
    description:
      "Tenha uma visão geral completa da sua associação com gráficos de receita, crescimento de membros, atividades recentes e ações rápidas.",
    bullets: ["Estatísticas em tempo real", "Gráficos de receita e crescimento", "Atividades recentes e notificações"],
    image: "/system_preview.webp",
    imageAlt: "dashboard screenshot",
    imageFirst: false,
  },
  {
    title: "Gestão Completa de Associados",
    description:
      "Cadastre e gerencie todos os seus associados e dependentes com informações detalhadas, status de pagamento e histórico completo.",
    bullets: ["Cadastro completo de associados", "Gestão de dependentes", "Filtros avançados e busca"],
    image: "/associates.webp",
    imageAlt: "associates screenshot",
    imageFirst: true,
  }, 
  {
    title: "Gestão Completa de Pagamentos",
    description:"Cadastre e gerencie todos os pagamentos de seus associados com facilidade, oferecendo múltiplos métodos de pagamento e controle de inadimplência.",
    bullets: ["Cadastro completo de pagamentos", "Gestão de métodos de pagamento", "Controle de inadimplência"],
    image: "/payments.webp",
    imageAlt: "payments screenshot",
    imageFirst: false,
  },
];

const CheckIcon = (
  <span className="mt-1 text-green-500">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </span>
);



export function FeatureSection() {
  return (
  <section id="features" className="container max-w-6xl mx-auto py-16 md:py-20 px-4 sm:px-6 scroll-mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Funcionalidades Completas</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar sua associação de forma eficiente e profissional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featureCards.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center p-6">
              <div className={`w-16 h-16 rounded-full ${f.iconBg} flex items-center justify-center mb-4`}>{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>

        {alternatingSections.map((sec, idx) => {
          const imageBlock = (
            <div className="flex justify-center md:justify-end">
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform -translate-y-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={sec.image} alt={sec.imageAlt} className="block w-[520px] max-w-full h-auto" />
                </div>
              </div>
            </div>
          );
          const textBlock = (
            <div>
              <h3 className="text-2xl font-bold mb-4">{sec.title}</h3>
              <p className="text-muted-foreground mb-6">{sec.description}</p>
              <ul className="space-y-3 text-muted-foreground">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    {CheckIcon}
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
          return (
            <div key={sec.title} className="grid md:grid-cols-2 items-center gap-8 md:gap-10 mb-12 md:mb-16">
              {sec.imageFirst ? imageBlock : textBlock}
              {sec.imageFirst ? textBlock : imageBlock}
            </div>
          );
        })}
      </section>
    )
}