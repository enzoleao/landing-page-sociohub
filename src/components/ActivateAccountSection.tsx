"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { validateActivationData } from "@/lib/onboarding";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type ActivateAccountSectionProps = {
  token: string;
};

type ActivationResponse = {
  message?: string;
};

export function ActivateAccountSection({ token }: ActivateAccountSectionProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    const validation = validateActivationData({ token, password, confirmPassword });

    if (!validation.ok) {
      setErrorMessage(validation.message);
      setSuccessMessage("");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/public/activate-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
          confirmPassword,
        }),
      });

      const data = (await response.json()) as ActivationResponse;

      if (!response.ok) {
        setErrorMessage(data.message ?? "Não foi possível ativar sua conta.");
        return;
      }

      setSuccessMessage(data.message ?? "Conta ativada com sucesso.");
      setPassword("");
      setConfirmPassword("");
    } catch {
      setErrorMessage("Falha de conexão ao ativar a conta.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 min-h-[70vh]">
      <div className="container max-w-2xl mx-auto px-4 sm:px-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Ativar conta</CardTitle>
            <CardDescription>Defina a senha do usuário responsável para concluir o acesso.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Nova senha</label>
              <input
                type="password"
                placeholder="Mínimo de 8 caracteres"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirmar senha</label>
              <input
                type="password"
                placeholder="Repita a senha"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {errorMessage && (
              <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                <AlertCircleIcon className="size-4 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="flex items-start gap-2 text-sm text-green-700 bg-green-50 border border-green-100 rounded-md px-3 py-2">
                <CheckCircle2Icon className="size-4 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            <Button size="md" className="w-full" variant="blue" type="button" disabled={isSubmitting} onClick={handleSubmit}>
              {isSubmitting ? <Loader2Icon className="size-4 animate-spin" /> : "Ativar conta"}
            </Button>

            <p className="text-xs text-muted-foreground">
              Depois da ativação, siga para o login no app. A cobrança recorrente entra em uma etapa posterior.
            </p>

            <div className="text-sm">
              <Link href="/" className="text-[#0b2c77] hover:text-[#0d8f84] hover:underline">
                Voltar para a página inicial
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
