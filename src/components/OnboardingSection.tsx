"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { AlertCircleIcon, CheckCircle2Icon, ClockIcon, Loader2Icon, MailIcon, RefreshCcwIcon } from "lucide-react";
import type { Plan } from "@/lib/plans";
import { detectDocumentType, formatDocument, formatPhone, isValidDocument } from "@/lib/onboarding";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type OnboardingSectionProps = {
  selectedPlan: Plan;
  plans: Plan[];
};

type SignupResponse = {
  signup_request?: {
    id: string;
    status: string;
  };
  message?: string;
};

export function OnboardingSection({ selectedPlan, plans }: OnboardingSectionProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tenantName: "",
    tenantEmail: "",
    ownerName: "",
    ownerEmail: "",
    phone: "",
    document: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const documentType = useMemo(() => detectDocumentType(formData.document), [formData.document]);
  const documentLabel = documentType === "cnpj" ? "CNPJ" : "CPF";
  const hasMultiplePlans = plans.length > 1;

  const isFormValid = useMemo(() => {
    return (
      formData.tenantName.trim().length >= 2 &&
      /\S+@\S+\.\S+/.test(formData.tenantEmail) &&
      formData.ownerName.trim().length >= 3 &&
      /\S+@\S+\.\S+/.test(formData.ownerEmail) &&
      formData.phone.replace(/\D/g, "").length >= 10 &&
      isValidDocument(formData.document)
    );
  }, [formData]);

  const updateField = (field: keyof typeof formData, value: string) => {
    setErrorMessage("");
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      setErrorMessage("Preencha os dados corretamente para solicitar a criação da conta.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/public/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          planCode: selectedPlan.code,
        }),
      });

      const data = (await response.json()) as SignupResponse;

      if (!response.ok || !data.signup_request?.id) {
        setErrorMessage(data.message ?? "Não foi possível criar sua solicitação agora.");
        return;
      }

      router.push(`/signup-status/${data.signup_request.id}`);
    } catch {
      setErrorMessage("Ocorreu um erro de conexão. Tente novamente em alguns instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="onboarding" className="bg-gray-50 py-16 md:py-20 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bfeae2] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0d8f84] shadow-sm">
            <CheckCircle2Icon className="size-4" />
            Adesão e teste
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">Crie sua conta e inicie a avaliação</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Escolha o plano, preencha os dados e acompanhe a criação da conta. Você pode trocar o plano aqui sem perder o progresso do fluxo.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Plano selecionado</CardTitle>
                <CardDescription>Seu teste será provisionado com este plano.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-xl border border-[#cde9e6] bg-[#effaf8] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold text-[#0b2c77]">{selectedPlan.name}</div>
                      <div className="mt-1 text-sm text-[#0b2c77]/80">{selectedPlan.description}</div>
                    </div>
                    {selectedPlan.popular && (
                      <div className="inline-flex items-center rounded-full bg-[#0d8f84] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                        Mais escolhido
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-2xl font-bold text-[#0b2c77]">{selectedPlan.priceLabel}</div>
                  <div className="mt-2 text-sm text-[#0d8f84]">
                    {selectedPlan.trial_days > 0 ? `${selectedPlan.trial_days} dias de teste` : "Sem teste configurado"}
                  </div>
                </div>

                <ul className="space-y-3">
                  {selectedPlan.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-green-600" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl border bg-gray-50 p-4 text-sm text-muted-foreground space-y-3">
                  <div className="flex items-start gap-3">
                    <ClockIcon className="mt-0.5 size-4 shrink-0 text-[#0d8f84]" />
                    <p>Depois do envio, o backend provisiona a organização, o responsável e a assinatura em fila.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MailIcon className="mt-0.5 size-4 shrink-0 text-[#0d8f84]" />
                    <p>Quando a conta estiver pronta, o responsável recebe um e-mail com o link de ativação.</p>
                  </div>
                </div>

                {hasMultiplePlans && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Trocar plano</div>
                        <div className="text-sm text-muted-foreground">Escolha outro plano sem sair do fluxo.</div>
                      </div>
                      <RefreshCcwIcon className="size-4 text-[#0d8f84]" />
                    </div>

                    <div className="grid gap-2">
                      {plans.map((plan) => {
                        const isActive = plan.code === selectedPlan.code;

                        return (
                          <Button key={plan.code} variant={isActive ? "blue" : "outline"} size="sm" className="h-auto justify-start px-4 py-3" asChild>
                            <Link href={`/onboarding?plan=${plan.code}`}>
                              <span className="flex w-full items-center justify-between gap-3 text-left">
                                <span className="min-w-0">
                                  <span className="block truncate font-semibold">{plan.name}</span>
                                  <span className="block truncate text-xs opacity-80">{plan.priceLabel}</span>
                                </span>
                                {isActive && (
                                  <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
                                    Atual
                                  </span>
                                )}
                              </span>
                            </Link>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl bg-white p-5 shadow-2xl md:p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">Dados da solicitação</h3>
                    <p className="text-sm text-muted-foreground">Essas informações serão enviadas ao endpoint público de cadastro.</p>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-[#bfeae2] bg-[#effaf8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0d8f84]">
                    {selectedPlan.code}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium">Nome da associação</label>
                    <input
                      type="text"
                      placeholder="Ex.: Associa Mais"
                      value={formData.tenantName}
                      onChange={(event) => updateField("tenantName", event.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      autoComplete="organization"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium">E-mail da associação</label>
                    <input
                      type="email"
                      placeholder="contato@suaassociacao.org.br"
                      value={formData.tenantEmail}
                      onChange={(event) => updateField("tenantEmail", event.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      autoComplete="organization email"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Nome do responsável</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.ownerName}
                      onChange={(event) => updateField("ownerName", event.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">E-mail do responsável</label>
                    <input
                      type="email"
                      placeholder="voce@email.com"
                      value={formData.ownerEmail}
                      onChange={(event) => updateField("ownerEmail", event.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Telefone</label>
                    <input
                      type="text"
                      placeholder="(91) 99999-9999"
                      value={formData.phone}
                      onChange={(event) => updateField("phone", formatPhone(event.target.value))}
                      className="w-full rounded-md border px-3 py-2"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={15}
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">{documentLabel}</label>
                    <input
                      type="text"
                      placeholder={documentType === "cnpj" ? "00.000.000/0000-00" : "000.000.000-00"}
                      value={formData.document}
                      onChange={(event) => updateField("document", formatDocument(event.target.value))}
                      className="w-full rounded-md border px-3 py-2"
                      inputMode="numeric"
                      autoComplete="off"
                      maxLength={18}
                      required
                    />
                  </div>
                </div>

                {!isValidDocument(formData.document) && formData.document.length > 0 && (
                  <div className="flex items-start gap-2 rounded-md border border-amber-100 bg-amber-50 px-3 py-2 text-sm text-amber-700">
                    <AlertCircleIcon className="mt-0.5 size-4" />
                    <span>{documentLabel} inválido. Confira os números informados.</span>
                </div>
              )}

                {errorMessage && (
                  <div className="rounded-md border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-600">{errorMessage}</div>
                )}

                <Button size="md" className="w-full" variant="blue" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2Icon className="size-4 animate-spin" /> : "Começar teste grátis"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  Ao enviar, sua solicitação entra em processamento. Quando a conta estiver pronta, você receberá o link de ativação por e-mail.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
