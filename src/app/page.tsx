'use client';
import { env } from 'next-runtime-env';

export default function SomePage() {
  const envValue = env('NEXT_PUBLIC_MINHA_CHAVE_OKD');
  return (
    <main>
      <h1>Valor do OKD: {envValue || "Variável não encontrada"}</h1>
    </main>
  );
}