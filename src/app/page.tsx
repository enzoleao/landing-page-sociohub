"use client";

import { CallToActionSection } from "@/components/CallToActionSection";
import { ClientFeedbackSetion } from "@/components/ClientFeedback";
import { ContactSection } from "@/components/ContactSection";
import { FeatureSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import React from "react";

// NOTE: Estruturas de dados para facilitar manutenção e adição de conteúdo
// Mantida a mesma hierarquia e classes para não alterar o layout existente.

// Ícone utilitário de check reutilizado nas listas


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
    title: "Gestão de Membros",
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
];


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <HeroSection />
      <FeatureSection />
      <IntegrationsSection />
      <ClientFeedbackSetion />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}