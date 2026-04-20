# Meu-Portfólio

Portfólio profissional desenvolvido em **Astro + TypeScript**, com foco em apresentar projetos, especialidades técnicas e trajetória profissional de forma moderna, responsiva e fácil de manter.

## O que este projeto faz

Este site foi construído para:

- Apresentar uma visão geral profissional na home (`/`)
- Exibir páginas dedicadas de especialidade:
  - `especialidades/mobile`
  - `especialidades/frontend`
- Mostrar a trajetória profissional e cargos na rota `sobre`
- Listar projetos em formato de vitrine e arquivo:
  - `projetos`
  - `archive`
- Exibir páginas individuais de projeto por `slug` em `projetos/[slug]`
- Centralizar links de contato na rota `contato`

## Stack e tecnologias usadas

- **Astro** (`astro`) para estrutura de páginas e build estático
- **TypeScript** para tipagem dos dados e segurança de desenvolvimento
- **CSS puro** (estilos globais e por componente/página)
- **Three.js** para cenas e efeitos visuais no hero
- **Howler** para recursos de áudio (quando aplicável)
- **GSAP** para animações/efeitos de interface (componentes específicos)

## Estrutura principal

```text
src/
  components/      # Componentes Astro reutilizáveis
  data/            # Conteúdo do site em JSON (site.json e projects.json)
  layouts/         # Layout base das páginas
  lib/             # Helpers utilitários (ex.: paths)
  pages/           # Rotas Astro
  styles/          # CSS global e animações
  types/           # Tipagens TypeScript
public/            # Assets estáticos (imagens, favicon, etc.)
```

## Rotas principais

- `/` - Home
- `/sobre` - Sobre e trajetória
- `/contato` - Canais de contato
- `/projetos` - Lista de projetos
- `/projetos/[slug]` - Detalhes de projeto
- `/archive` - Arquivo completo de projetos
- `/especialidades/mobile` - Especialidade mobile
- `/especialidades/frontend` - Especialidade frontend

## Origem do conteúdo

O conteúdo é orientado por dados em JSON:

- `src/data/site.json` - informações de perfil, experiência, skills e contato
- `src/data/projects.json` - lista de projetos, tags, categorias e detalhes

Isso facilita edição sem precisar alterar toda a estrutura de componentes.

## Como rodar localmente

### Pré-requisitos

- Node.js 20+
- npm

### Desenvolvimento

```bash
npm install
npm run dev
```

Servidor local padrão do Astro:

- [http://localhost:4321](http://localhost:4321)

### Build de produção

```bash
npm run build
npm run preview
```

## Scripts disponíveis

- `npm run dev` - inicia ambiente local
- `npm run build` - gera build estático em `dist/`
- `npm run preview` - serve o build localmente
- `npm run astro` - comandos diretos do Astro CLI

## Deploy

O projeto está preparado para deploy estático (por exemplo, GitHub Pages), com workflow de CI/CD no repositório.

## Objetivo do projeto

Criar uma presença profissional forte, com navegação clara e visual moderno, destacando:

- Experiência prática de 2016 a 2026
- Especialidades em Full Stack, Frontend, Backend, Mobile, Arquitetura e IA aplicada
- Portfólio com foco em resultados e tecnologias utilizadas
