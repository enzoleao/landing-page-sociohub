import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './FeaturesCarousel';


type FeatureCard = { title: string; description: string; iconBg: string; icon: React.ReactNode };
const featureCards: FeatureCard[] = [
  {
    title: "Dashboard Inteligente",
    description: "Visualize métricas críticas em tempo real com leitura rápida e apresentação mais executiva.",
    iconBg: "bg-[#edf4ff]",
    icon: (
      <svg className="w-7 h-7 text-[#0b2c77]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"></path></svg>
    ),
  },
  {
    title: "Gestão de Associados",
    description: "Cadastre e organize associados e dependentes com dados claros e histórico centralizado.",
    iconBg: "bg-[#eef3ff]",
    icon: (
      <svg className="w-7 h-7 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3h-2M9 20H4v-2a3 3 0 013-3h2m0-6a4 4 0 100-8 4 4 0 000 8z"></path></svg>
    ),
  },
  {
    title: "Pagamentos Online",
    description: "Cobrança completa com múltiplos meios de pagamento e acompanhamento de inadimplência.",
    iconBg: "bg-[#edf4ff]",
    icon: (
      <svg className="w-7 h-7 text-[#0b2c77]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.667 0 1.333.667 1.333 1.333S12.667 10.667 12 10.667 10.667 10 10.667 9.333 11.333 8 12 8zM5 20h14v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2z"></path></svg>
    ),
  }, 
  {
    title: "Personalização de Planos",
    description: "Ofereça diferentes planos de associação com regras e benefícios por categoria.",
    iconBg: "bg-[#eef3ff]",
    icon: (
      <svg className="w-7 h-7 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.667 0 1.333.667 1.333 1.333S12.667 10.667 12 10.667 10.667 10 10.667 9.333 11.333 8 12 8zM5 20h14v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2z"></path></svg>
    ),
  },  
  {
    title: "Controle de permissões",
    description: "Defina níveis de acesso para administradores, equipe e associados com segurança.",
    iconBg: "bg-[#edf4ff]",
    icon: (
      <svg className="w-7 h-7 text-[#0b2c77]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.667 0 1.333.667 1.333 1.333S12.667 10.667 12 10.667 10.667 10 10.667 9.333 11.333 8 12 8zM5 20h14v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2z"></path></svg>
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
      "Tenha uma visão completa da operação com gráficos de receita, crescimento de membros e ações rápidas.",
    bullets: ["Estatísticas em tempo real", "Gráficos de receita e crescimento", "Atividades recentes e notificações"],
    image: "/system_preview.webp",
    imageAlt: "dashboard screenshot",
    imageFirst: false,
  },
  {
    title: "Gestão Completa de Associados",
    description:
      "Cadastre e gerencie associados e dependentes com informações detalhadas, status e histórico.",
    bullets: ["Cadastro completo de associados", "Gestão de dependentes", "Filtros avançados e busca"],
    image: "/associates.webp",
    imageAlt: "associates screenshot",
    imageFirst: true,
  }, 
  {
    title: "Gestão Completa de Pagamentos",
    description:"Cadastre e acompanhe pagamentos com facilidade, múltiplos métodos e controle de inadimplência.",
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

const OPTIONS: EmblaOptionsType = { loop: true }



export function FeatureSection() {
  return (
  <section id="features" className="container mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e2ef] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c77] shadow-sm">
            Funcionalidades essenciais
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Tudo o que sua associação precisa para operar com mais segurança</h2>
          <p className="mt-3 text-muted-foreground">
            Estrutura pensada para reduzir ruído operacional, melhorar o controle e transmitir profissionalismo ao associado.
          </p>
        </div>

        <div className="gap-6 md:gap-8 mb-12 md:mb-16">
            <EmblaCarousel slides={featureCards} options={OPTIONS} />
        </div>

        {alternatingSections.map((sec) => {
          const imageBlock = (
            <div className={`md:flex-1 flex justify-center ${sec.imageFirst ? "md:justify-end" : "md:justify-start"}`}>
              <div className="rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-[0_20px_70px_rgba(11,44,119,0.08)] md:p-6">
                <div className="overflow-hidden rounded-lg">
                  <Image src={sec.image} alt={sec.imageAlt} width={520} height={320} className="block w-[520px] max-w-full h-auto" />
                </div>
              </div>
            </div>
          );
          const textBlock = (
            <div className="md:flex-1">
              <h3 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-slate-950">{sec.title}</h3>
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
            <div
              key={sec.title}
              className={`mb-12 flex flex-col items-center gap-8 md:mb-16 md:gap-10 ${
                sec.imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {imageBlock}
              {textBlock}
            </div>
          );
        })}
      </section>
    )
}
