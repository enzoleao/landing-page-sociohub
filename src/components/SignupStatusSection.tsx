"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, MailIcon, RefreshCcwIcon } from "lucide-react";
import type { SignupRequest, SignupRequestStatus } from "@/lib/onboarding";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type SignupStatusSectionProps = {
  signupRequestId: string;
};

type StatusResponse = {
  signup_request?: SignupRequest | null;
  message?: string;
};

const terminalStatuses: SignupRequestStatus[] = ["COMPLETED", "FAILED"];

export function SignupStatusSection({ signupRequestId }: SignupStatusSectionProps) {
  const [signupRequest, setSignupRequest] = useState<SignupRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    const intervalId = window.setInterval(() => {
      void fetchStatus();
    }, 4000);

    const fetchStatus = async () => {
      try {
        const response = await fetch(`/api/public/signup/${signupRequestId}/status`, {
          cache: "no-store",
        });
        const data = (await response.json()) as StatusResponse;

        if (!response.ok) {
          if (!cancelled) {
            setErrorMessage(data.message ?? "Não foi possível consultar o andamento da solicitação.");
            setLoading(false);
          }
          return;
        }

        if (!cancelled) {
          const nextSignupRequest = data.signup_request ?? null;
          setSignupRequest(nextSignupRequest);
          setErrorMessage("");
          setLoading(false);

          if (nextSignupRequest?.status && terminalStatuses.includes(nextSignupRequest.status) && intervalId) {
            window.clearInterval(intervalId);
          }
        }
      } catch {
        if (!cancelled) {
          setErrorMessage("Falha de conexão ao consultar o andamento da solicitação.");
          setLoading(false);
        }
      }
    };

    void fetchStatus();

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [signupRequestId]);

  const status = signupRequest?.status ?? "PENDING";
  const isTerminal = terminalStatuses.includes(status);

  return (
    <section className="py-16 md:py-20 bg-gray-50 min-h-[70vh]">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Acompanhamento da solicitação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-xl border bg-white p-5">
              <div className="text-sm text-muted-foreground">Protocolo</div>
              <div className="mt-1 font-mono text-sm break-all">{signupRequestId}</div>
            </div>

            {loading && (
              <div className="flex items-center gap-3 rounded-xl border border-[#cde9e6] bg-[#effaf8] p-5 text-[#0b2c77]">
                <Loader2Icon className="size-5 animate-spin" />
                <div>
                  <div className="font-semibold">Estamos preparando sua conta</div>
                  <div className="text-sm text-[#0b2c77]/80">Isso pode levar alguns instantes.</div>
                </div>
              </div>
            )}

            {!loading && !errorMessage && status === "PENDING" && (
              <div className="rounded-xl border border-[#cde9e6] bg-[#f3fcfb] p-5">
                <div className="font-semibold text-[#0d8f84]">Solicitação recebida</div>
                <div className="mt-2 text-sm text-[#0d8f84]/85">
                  Sua adesão foi registrada e está aguardando o início do provisionamento.
                </div>
              </div>
            )}

            {!loading && !errorMessage && status === "PROCESSING" && (
              <div className="rounded-xl border border-[#cde9e6] bg-[#effaf8] p-5">
                <div className="font-semibold text-[#0b2c77]">Provisionamento em andamento</div>
                <div className="mt-2 text-sm text-[#0b2c77]/80">
                  A organização, o responsável e a assinatura de teste estão sendo preparados no backend.
                </div>
              </div>
            )}

            {!loading && !errorMessage && status === "COMPLETED" && (
              <div className="rounded-xl border bg-green-50 p-5 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-green-900">
                  <CheckCircle2Icon className="size-5" />
                  Conta criada com sucesso
                </div>
                <div className="text-sm text-green-900/80">
                  O e-mail de ativação foi enviado ao responsável. Verifique a caixa de entrada para definir a senha e concluir o acesso.
                </div>
                <div className="flex items-start gap-3 text-sm text-green-900/80">
                  <MailIcon className="size-4 mt-0.5" />
                  <span>Quando a cobrança recorrente estiver concluída, o cartão será solicitado depois da ativação da conta.</span>
                </div>
              </div>
            )}

            {!loading && !errorMessage && status === "FAILED" && (
              <div className="rounded-xl border bg-red-50 p-5 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-red-900">
                  <AlertCircleIcon className="size-5" />
                  Não foi possível concluir o provisionamento
                </div>
                <div className="text-sm text-red-900/80">
                  {signupRequest?.failure_reason ?? "O backend informou falha no processo de criação da conta."}
                </div>
                <Button variant="outline" asChild>
                  <Link href="/onboarding">Tentar novamente</Link>
                </Button>
              </div>
            )}

            {errorMessage && (
              <div className="rounded-xl border bg-red-50 p-5 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-red-900">
                  <AlertCircleIcon className="size-5" />
                  Falha ao consultar o status
                </div>
                <div className="text-sm text-red-900/80">{errorMessage}</div>
                <Button variant="outline" onClick={() => window.location.reload()}>
                  <RefreshCcwIcon className="size-4" />
                  Atualizar página
                </Button>
              </div>
            )}

            {!loading && !errorMessage && !isTerminal && (
              <div className="text-sm text-muted-foreground">
                Esta tela atualiza automaticamente a cada poucos segundos.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
