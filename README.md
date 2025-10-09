# Musculink

Projeto full-stack (Back-end em Node/TypeScript e Front-end com Expo/React Native) para gerenciar funcionalidades relacionadas ao Musculink.

## 📌 Visão geral

Este repositório contém duas partes principais:
- `Back-end/` — API REST escrita em TypeScript (Node.js).
- `Front-end/` — Aplicativo mobile feito com Expo (React Native).

O objetivo deste README é orientar desenvolvedores sobre como configurar, executar e contribuir com o projeto.

## 🗂 Estrutura do projeto

Raiz
- `Back-end/` — código do servidor (TypeScript)
  - `package.json` — scripts e dependências do back-end
  - `src/` — código-fonte (ex.: `server.ts`, controladores, rotas, middlewares)
- `Front-end/` — aplicativo Expo
  - `package.json` — scripts e dependências do front-end
  - `App.tsx`, `index.ts` e assets


## 🧰 Pré-requisitos

- Node.js (recomendo LTS >= 18)
- npm ou yarn
- Para o front-end: Expo CLI (pode rodar via npx)

## 🚀 Como rodar localmente

As instruções abaixo assumem que você está na raiz do repositório.

### Back-end (desenvolvimento)

1. Abra um terminal e vá para a pasta do back-end:

```pwsh
cd Back-end
```

2. Instale dependências:

```pwsh
npm install
# ou
# yarn
```

3. Rodar em modo desenvolvimento (usa `ts-node-dev`):

```pwsh
npm run dev
```

4. Build de produção e start:

```pwsh
npm run build
npm start
```

Observações:
- O arquivo `Back-end/package.json` já inclui os scripts `dev`, `build` e `start`.
- Se usar variáveis de ambiente, crie um arquivo `.env` na pasta `Back-end/` e carregue as variáveis no `server.ts` (ex.: porta, string de conexão do banco).

Exemplo mínimo de `.env` (crie conforme necessário):

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/musculink
JWT_SECRET=uma_chave_secreta
```


### Front-end (Expo)

1. Abra outro terminal e vá para a pasta do front-end:

```pwsh
cd Front-end
```

2. Instale dependências:

```pwsh
npm install
# ou
# yarn
```

3. Inicie o Expo:

```pwsh
npm start
# ou para abrir direto no Android/iOS
npm run android
npm run ios
```

Notas:
- O front-end utiliza `expo` conforme `Front-end/package.json`.
- Use o app Expo Go no dispositivo físico ou emulador para testar.


## 🧭 Scripts úteis

- Back-end (na pasta `Back-end/`):
  - `npm run dev` — inicializa em modo desenvolvimento com recarga automática
  - `npm run build` — compila TypeScript para `dist/`
  - `npm start` — executa `dist/server.js`

- Front-end (na pasta `Front-end/`):
  - `npm start` — abre o Metro/Expo
  - `npm run android` / `npm run ios` / `npm run web`


## 📡 Rotas e API

O arquivo `Back-end/src/server.ts` atualmente está vazio neste repositório. Para documentar corretamente as rotas, adicione as rotas/handlers no `server.ts` ou nos arquivos de rota existentes e depois atualize esta seção.

Enquanto isso, aqui está um exemplo de como documentar endpoints (substitua pelos reais):

- GET /health
  - Descrição: checa o status da API
  - Resposta: 200 { ok: true }

- POST /auth/login
  - Descrição: efetua login e retorna token JWT
  - Body: { email: string, password: string }
  - Resposta: 200 { token: string }

- GET /users/:id
  - Descrição: retorna dados do usuário
  - Autenticação: Bearer token


Sugestão: crie um arquivo `Back-end/DEVELOPING_API.md` ou `docs/API.md` e mantenha a lista de rotas atualizada sempre que adicionar endpoints.


## ✅ Checklist de qualidade

- [ ] Adicionar exemplos reais de variáveis de ambiente e `.env.example` em `Back-end/`.
- [ ] Preencher `Back-end/src/server.ts` com as rotas e middlewares (CORS, bodyParser, logger).
- [ ] Documentar todas as rotas em `docs/API.md` ou diretamente aqui.


## 🤝 Como contribuir

1. Fork do repositório
2. Crie uma branch com a feature/bugfix: `git checkout -b feat/nome-da-feature`
3. Faça commits pequenos e descritivos
4. Abra um Pull Request para `main`

Por favor, inclua passos para reproduzir bugs e exemplos de uso ao enviar PRs.


## 📞 Contato

Se precisar de ajuda, abra uma issue descrevendo o problema ou a melhoria desejada.


---

Se quiser, eu posso:
- preencher um `Back-end/.env.example` baseado nas suposições acima;
- gerar um template de `server.ts` com Express + TypeScript (incluindo exemplos de rotas mencionadas);
- criar `docs/API.md` e extrair automaticamente rotas se o servidor já existir.

Diga qual opção prefere que eu implemente em seguida.
