import { NextResponse } from "next/server";
import { validateActivationData } from "@/lib/onboarding";
import { extractBackendErrorMessage, resolveBackendUrl } from "@/lib/backend";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const validation = validateActivationData(body);

    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    const response = await fetch(resolveBackendUrl("/public/activate-account"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: validation.data.token,
        password: validation.data.password,
      }),
      cache: "no-store",
    });

    const payload = (await response.json().catch(() => null)) as unknown;

    if (!response.ok) {
      return NextResponse.json(
        { message: extractBackendErrorMessage(payload, "Não foi possível ativar a conta.") },
        { status: response.status }
      );
    }

    return NextResponse.json(payload, { status: response.status });
  } catch {
    return NextResponse.json(
      { message: "Erro ao ativar a conta no backend." },
      { status: 500 }
    );
  }
}
