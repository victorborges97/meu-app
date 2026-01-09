export default function Home() {
  // Isso lerá do OKD em tempo de execução (Server Component)
  const okdEnv = process.env.MINHA_CHAVE_OKD;

  return (
    <main>
      <h1>Valor do OKD: {okdEnv || "Variável não encontrada"}</h1>
    </main>
  );
}