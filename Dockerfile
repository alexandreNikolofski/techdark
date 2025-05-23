# Etapa 1: Instala dependências de produção
FROM node:20-alpine AS deps
WORKDIR /app

# Instala pnpm
RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Etapa 2: Build da aplicação
FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Etapa 3: Servidor final
FROM node:20-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

# Usa react-router-serve como servidor
CMD ["pnpm", "start"]
