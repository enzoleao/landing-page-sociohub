"use client";

import { CheckCircle2Icon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import type { Plan } from "@/lib/plans";

type PlansSectionProps = {
  plans: Plan[];
};

export function PlansSection({ plans }: PlansSectionProps) {
  return (
    <section id="plans" className="bg-white py-16 scroll-mt-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e2ef] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c77] shadow-sm">
            <SparklesIcon className="size-4" />
            Planos e adesão
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Escolha o plano ideal para sua associação</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Selecione um plano para iniciar o teste e criar sua conta. A cobrança recorrente entra após a ativação.
          </p>
        </div>

        {plans.length === 0 && (
          <div className="rounded-2xl border bg-gray-50 px-4 py-8 text-center text-muted-foreground">
            Nenhum plano foi retornado pelo backend no momento.
          </div>
        )}

        {plans.length > 0 && (
          <div className="grid gap-6 items-stretch justify-center md:[grid-template-columns:repeat(auto-fit,minmax(280px,320px))]">
            {plans.map((plan) => {
              return (
                <Card
                  key={plan.id}
                  className={`relative h-full w-full overflow-hidden border-2 ${plan.popular ? "border-[#0b2c77] shadow-lg shadow-[#0b2c77]/10" : "border-border"}`}
                >
                  {plan.popular && (
                    <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[#0b2c77] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                      Mais escolhido
                    </div>
                  )}
                  <CardHeader className="min-h-44">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="min-h-16 pr-20">{plan.description}</CardDescription>
                    <div className="text-3xl font-bold text-[#0b2c77]">{plan.priceLabel}</div>
                    {plan.badge && (
                      <div className="inline-flex w-fit items-center rounded-full border border-[#d7e2ef] bg-[#f3f7fd] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b2c77]">
                        {plan.badge}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col space-y-4">
                    <ul className="flex-1 space-y-3">
                      {plan.advantages.map((advantage) => (
                        <li key={advantage} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-green-600" />
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-auto w-full"
                      variant={plan.popular ? "blue" : "outline"}
                      asChild
                    >
                      <Link href={`/onboarding?plan=${plan.code}`}>Começar teste grátis</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
