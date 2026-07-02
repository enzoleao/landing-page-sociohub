import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/ui/header";
import { OnboardingSection } from "@/components/OnboardingSection";
import { fetchBackendPlans } from "@/lib/plans";
import { notFound } from "next/navigation";

type OnboardingPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const resolvePlanId = async (searchParams?: Promise<Record<string, string | string[] | undefined>>) => {
  const params = (await searchParams) ?? {};
  const rawPlanId = params.plan;
  const planId = Array.isArray(rawPlanId) ? rawPlanId[0] : rawPlanId;
  const plans = await fetchBackendPlans();

  if (plans.length === 0) {
    return { plans, selectedPlan: null };
  }

  return {
    plans,
    selectedPlan: plans.find((plan) => plan.code === planId || plan.id === planId) ?? plans[0],
  };
};

export default async function OnboardingPage({ searchParams }: OnboardingPageProps) {
  const { plans, selectedPlan } = await resolvePlanId(searchParams);

  if (!selectedPlan) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Header />
      <main className="flex-1">
        <OnboardingSection selectedPlan={selectedPlan} plans={plans} />
      </main>
      <FooterSection />
    </div>
  );
}
