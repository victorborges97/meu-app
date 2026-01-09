import { NextResponse } from "next/server";

export async function GET() {
  const envVar = process.env.MINHA_CHAVE_OKD;
  console.log(envVar);
  return NextResponse.json({ value: envVar || "Variável não encontrada" });
}