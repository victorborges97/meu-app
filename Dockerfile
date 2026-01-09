# Estágio de Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Nota: Variáveis NEXT_PUBLIC_ precisam estar aqui se forem fixas.
# Se forem dinâmicas, use a estratégia de Server Components.
RUN npm run build

# Estágio de Runtime
FROM node:20-alpine AS runner
WORKDIR /app

# O OpenShift exige permissões de usuário não-root (UID aleatório)
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
