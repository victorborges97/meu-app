import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    mySecret: process.env.MINHA_CHAVE_OKD,
  },
};

export default nextConfig;
