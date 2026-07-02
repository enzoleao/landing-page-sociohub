import { resolveBackendUrl } from "@/lib/backend";

export type BackendPlan = {
  id: string;
  code: string;
  name: string;
  description: string;
  inline_description: string[];
  price: number;
  interval: string;
  trial_days: number;
  max_members: number;
  max_users: number;
  features: Record<string, unknown> | string[] | null;
};

export type Plan = BackendPlan & {
  slug: string;
  advantages: string[];
  priceLabel: string;
  badge?: string;
  popular?: boolean;
};

const backendPlansPath = "/public/plans";

const formatPrice = (price: number, interval: string) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  if (interval === "MONTHLY") {
    return `${currency}/mes`;
  }

  if (interval === "YEARLY") {
    return `${currency}/ano`;
  }

  return currency;
};

export function normalizePlans(plans: BackendPlan[]): Plan[] {
  return plans.map((plan, index) => ({
    ...plan,
    slug: plan.code || plan.id || plan.name.toLowerCase().replace(/\s+/g, "-"),
    advantages: plan.inline_description,
    priceLabel: formatPrice(plan.price, plan.interval),
    badge: plan.trial_days > 0 ? `${plan.trial_days} dias de teste` : undefined,
    popular: index === 1,
  }));
}

export const parsePlansResponse = (input: unknown): BackendPlan[] => {
  const candidateList = Array.isArray(input)
    ? input
    : input && typeof input === "object" && Array.isArray((input as { plans?: unknown[] }).plans)
      ? (input as { plans: unknown[] }).plans
      : [];

  return candidateList.filter((plan): plan is BackendPlan => {
    if (!plan || typeof plan !== "object") {
      return false;
    }

    const candidate = plan as Partial<BackendPlan>;
    return (
      typeof candidate.id === "string" &&
      typeof candidate.code === "string" &&
      typeof candidate.name === "string" &&
      typeof candidate.description === "string" &&
      Array.isArray(candidate.inline_description) &&
      candidate.inline_description.every((item) => typeof item === "string") &&
      typeof candidate.price === "number" &&
      typeof candidate.interval === "string" &&
      typeof candidate.trial_days === "number" &&
      typeof candidate.max_members === "number" &&
      typeof candidate.max_users === "number" &&
      (candidate.features === null ||
        Array.isArray(candidate.features) ||
        (typeof candidate.features === "object" && candidate.features !== null))
    );
  });
};

export async function fetchBackendPlans(): Promise<Plan[]> {
  const backendUrl = resolveBackendUrl(backendPlansPath);
  const response = await fetch(backendUrl, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const payload = (await response.json()) as unknown;
  const parsedPlans = parsePlansResponse(payload);

  if (!response.ok) {
    throw new Error("Não foi possível carregar os planos no backend.");
  }

  return normalizePlans(parsedPlans);
}
