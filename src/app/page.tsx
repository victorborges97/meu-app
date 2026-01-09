import { urlApi } from "./(actions)/urlApi";
export default async function Home() {
  const okdEnv =  await urlApi();
  return (
    <main>
      <h1>Valor do OKD: {okdEnv || "Variável não encontrada"}</h1>
    </main>
  );
}