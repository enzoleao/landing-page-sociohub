import { NextResponse } from "next/server";
import { extractBackendErrorMessage, resolveBackendUrl } from "@/lib/backend";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;

  if (!id?.trim()) {
    return NextResponse.json({ message: "Solicitação inválida." }, { status: 400 });
  }

  try {
    const response = await fetch(resolveBackendUrl(`/public/signup/${id}/status`), {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const payload = (await response.json().catch(() => null)) as unknown;

    if (!response.ok) {
      return NextResponse.json(
        { message: extractBackendErrorMessage(payload, "Não foi possível consultar a solicitação.") },
        { status: response.status }
      );
    }

    return NextResponse.json(payload, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Erro ao consultar o status da solicitação no backend." },
      { status: 500 }
    );
  }
}
