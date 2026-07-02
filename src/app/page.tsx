import { CallToActionSection } from "@/components/CallToActionSection";
import { ClientFeedbackSetion } from "@/components/ClientFeedback";
import { ContactSection } from "@/components/ContactSection";
import { FeatureSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { PlansSection } from "@/components/PlansSection";
import { Header } from "@/components/ui/header";
import { fetchBackendPlans } from "@/lib/plans";


export default async function LandingPage() {
  const plans = await fetchBackendPlans();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <HeroSection />
      <FeatureSection />
      <IntegrationsSection />
      <PlansSection plans={plans} />
      <ClientFeedbackSetion />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
