"use server";

export async function urlApi() {
  const envVar = process.env.MINHA_CHAVE_OKD;
  console.log(process.env);
  return envVar || "Variável não encontrada";
}