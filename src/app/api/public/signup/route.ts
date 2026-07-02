import { NextResponse } from "next/server";
import { buildSignupPayload, validateSignupData } from "@/lib/onboarding";
import { extractBackendErrorMessage, resolveBackendUrl } from "@/lib/backend";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    if (!body || typeof body !== "object") {
      return NextResponse.json({ message: "Dados inválidos para cadastro." }, { status: 400 });
    }

    const candidate = body as Record<string, unknown>;
    const planCode = typeof candidate.planCode === "string" ? candidate.planCode.trim() : "";

    if (!planCode) {
      return NextResponse.json({ message: "Selecione um plano válido para continuar." }, { status: 400 });
    }

    const validation = validateSignupData(candidate);

    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    const response = await fetch(resolveBackendUrl("/public/signup"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(buildSignupPayload(validation.data, planCode)),
      cache: "no-store",
    });

    const payload = (await response.json().catch(() => null)) as unknown;

    if (!response.ok) {
      return NextResponse.json(
        { message: extractBackendErrorMessage(payload, "Não foi possível enviar sua solicitação.") },
        { status: response.status }
      );
    }

    return NextResponse.json(payload, { status: response.status });
  } catch {
    return NextResponse.json(
      { message: "Erro ao enviar a solicitação de adesão ao backend." },
      { status: 500 }
    );
  }
}
