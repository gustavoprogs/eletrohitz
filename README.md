# EletroHitz

Portal editorial de música eletrônica: notícias, lançamentos, DJs, festivais, agenda e rádio online.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Lucide React

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Estrutura
- `src/app`: rotas e estilos globais
- `src/components`: componentes compartilhados
- `src/lib`: conteúdo demonstrativo

## Player
O player fixo é uma interface inicial. Para transmitir áudio, configure uma URL de stream autorizada em `src/lib/site.ts` ou integre um provedor de rádio/streaming com direitos de execução.

## Próximas etapas
1. CMS e banco de dados para notícias, artistas e eventos.
2. Autenticação e painel editorial.
3. Fonte licenciada para rádio e sets.
4. SEO, analytics e deploy.
