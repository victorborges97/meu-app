"use server";
export async function urlApi() {
  const envVar = process.env.MINHA_CHAVE_OKD;
  return envVar || "";
}