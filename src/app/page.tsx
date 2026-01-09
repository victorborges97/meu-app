import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig()

export default function Home() {
  const okdEnv = serverRuntimeConfig.mySecret;
  return (
    <main>
      <h1>Valor do OKD: {okdEnv || "Variável não encontrada"}</h1>
    </main>
  );
}