This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Fluxo de onboarding (teste grátis + assinatura)

Foi adicionado um fluxo de adesao publica com os campos:

- Nome da associacao
- E-mail da associacao
- Nome do responsavel
- E-mail do responsavel
- Telefone
- Documento (CPF ou CNPJ)

Com os dados preenchidos, o usuário pode:

- Escolher um plano publico na landing e ir para `/onboarding`
- Enviar a solicitacao para `POST /public/signup` via proxy interno
- Acompanhar o provisionamento em `/signup-status/:id`
- Ativar a conta em `/auth/activate-account/:token`
- Enviar duvidas na secao de especialista

### Variáveis de ambiente

Crie um arquivo `.env` ou `.env.local` com:

```bash
API_URL=http://localhost:3001
```

> A secao de planos consome o backend via proxy interno em `/api/public/plans`.
> O fluxo principal desta fase usa `POST /api/public/signup`, polling em `/api/public/signup/:id/status` e ativacao em `/api/public/activate-account`.
> O checkout recorrente hospedado continua como etapa futura, depois da criacao e ativacao da conta.
> A secao de especialista e independente e serve apenas para duvidas e contato comercial.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
