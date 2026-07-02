import { NextResponse } from "next/server";
import { fetchBackendPlans } from "@/lib/plans";

export async function GET() {
  try {
    const plans = await fetchBackendPlans();
    return NextResponse.json({ plans }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Erro ao buscar os planos no backend." },
      { status: 500 }
    );
  }
}
