# Portfólio (Astro + TypeScript)

Site estático para divulgar serviços e uma **vitrine curada** de repositórios do GitHub. O conteúdo fica em JSON versionado em `src/data/` — você edita, faz commit e o GitHub Actions publica no Pages.

## Requisitos

- Node.js 20 ou superior

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (geralmente `http://localhost:4321`).

## Build local

```bash
npm run build
npm run preview
```

## GitHub Pages (repositório dedicado)

1. Crie um repositório **público** no GitHub e envie **apenas** o conteúdo desta pasta `portfolio-site` como raiz do repositório (ou use este diretório como raiz ao fazer `git init`).
2. Em **Settings → Pages**, em **Build and deployment**, escolha **GitHub Actions** como fonte.
3. Faça push na branch `main`. O workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) faz `npm ci`, `npm run build` e publica `dist/`.
4. O site ficará em `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`.

O workflow define automaticamente:

- `SITE_URL` → `https://<dono>.github.io`
- `BASE_PATH` → `/<nome-do-repositório>/`

Para um repositório **username.github.io** (site de usuário, sem subpasta), ajuste o workflow: remova `BASE_PATH` do passo de build (ou defina `BASE_PATH=/`) e garanta que `SITE_URL` seja `https://SEU_USUARIO.github.io`.

## Monorepo (esta pasta dentro de outro repositório)

O GitHub só executa workflows na **raiz** do repositório. Opções:

- Copie `.github/workflows/deploy-pages.yml` para a raiz do monorepo e prefixe os passos com `working-directory: portfolio-site` (ou o caminho desta pasta), ajustando `cache-dependency-path` e o `path` do artifact para `portfolio-site/dist`; **ou**
- Mantenha o portfólio em um repositório separado (recomendado no plano original).

## Atualizar conteúdo (5 passos)

1. Abra [`src/data/site.json`](src/data/site.json) e ajuste nome, headline, serviços, sobre e contato.
2. Abra [`src/data/projects.json`](src/data/projects.json): cada item precisa de `slug` (único, URL), `title`, `repoUrl`, `summary`, `tags`.
3. Opcional: `featured`, `order`, `highlights`, `demoUrl`, `caseStudyUrl`, `thumb` (caminho sob `public/`, ex. `images/foo.png`).
4. Rode `npm run build` localmente para validar.
5. Commit e push na `main`.

## Schema de `projects.json`

| Campo           | Obrigatório | Descrição                                                |
|-----------------|------------|------------------------------------------------------------|
| `slug`          | sim        | Identificador na URL: `/projetos/<slug>`                  |
| `title`         | sim        | Nome exibido                                              |
| `repoUrl`       | sim        | Link do repositório no GitHub                             |
| `summary`       | sim        | Resumo curto                                              |
| `tags`          | sim        | Lista de strings (filtro na página Projetos)              |
| `role`          | não        | Papel ou contexto                                       |
| `highlights`    | não        | Lista de bullets na página de detalhe                   |
| `featured`      | não        | Se entra na seção “Destaques” da home                     |
| `order`         | não        | Ordenação menor primeiro                                  |
| `thumb`         | não        | Caminho relativo a `public/` (sem barra inicial opcional) |
| `demoUrl`       | não        | Link de demonstração                                    |
| `caseStudyUrl`  | não        | Artigo ou PDF de caso                                    |

Tipos TypeScript: [`src/types/content.ts`](src/types/content.ts).

## Vercel (alternativa)

Conecte o repositório na Vercel, framework **Astro**, comando de build `npm run build`, diretório de saída `dist`. Para domínio na raiz, não defina `BASE_PATH` nos Environment Variables; defina `SITE_URL` com a URL canônica do site.

## Licença

Defina a licença do repositório nas configurações do GitHub conforme sua preferência.
