# Aulas Colab

Site estático para organizar as monitorias que alunos dão para colegas com
dificuldade: slides, videoaulas, resumos, data, horário e link da reunião,
tudo em um só lugar.

Não tem backend nem banco de dados — o "banco de dados" é o arquivo
[`assets/data.js`](assets/data.js), versionado junto com o código. Adicionar
uma aula é editar esse arquivo e dar commit.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, se seu
   plano permitir Pages em repositórios privados) e suba todos os arquivos
   desta pasta para ele.
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`. Salve.
4. Em alguns minutos o GitHub mostra a URL do site, algo como
   `https://seu-usuario.github.io/nome-do-repositorio/`.

Pronto — qualquer novo commit na branch publicada atualiza o site
automaticamente.

## Estrutura dos arquivos

```
├── index.html          → página inicial (lista de aulas, busca e filtro)
├── adicionar.html       → formulário que gera o bloco para uma aula nova
├── assets/
│   ├── data.js          → lista das aulas (o "banco de dados" do site)
│   ├── style.css         → tema visual
│   ├── script.js         → lógica da página inicial
│   ├── adicionar.js      → lógica da página de cadastro
│   └── img/logo.png      → logo do projeto
└── README.md
```

## Como um monitor adiciona uma aula

**Opção A — pela página do site (mais fácil):**
1. Acesse `adicionar.html` no site publicado.
2. Preencha o formulário e clique em **Gerar bloco** → **Copiar bloco**.
3. No GitHub, abra `assets/data.js`, clique no ícone de lápis para editar,
   cole o bloco copiado logo depois de `const AULAS = [` e clique em
   **Commit changes**.
4. Sem permissão de escrita? Salve como uma nova branch e abra um
   **Pull Request** para um admin aprovar.

**Opção B — direto no `data.js`:**
Copie um dos objetos existentes no arquivo, cole um novo logo abaixo e
troque os valores. Os campos são:

| Campo         | O que é                                              |
|---------------|-------------------------------------------------------|
| `materia`     | Disciplina (usada no filtro)                          |
| `titulo`      | Assunto específico da aula                             |
| `monitor`     | Nome de quem dá a aula                                 |
| `data`        | Data no formato `AAAA-MM-DD`                           |
| `horario`     | Horário no formato `HH:MM`                              |
| `linkReuniao` | Link da chamada ao vivo (deixe `""` se não houver)      |
| `slides`      | Link dos slides (deixe `""` se não tiver)               |
| `video`       | Link da videoaula gravada (deixe `""` se não tiver)     |
| `resumo`      | Link do resumo/anotações (deixe `""` se não tiver)      |
| `descricao`   | 1–2 frases sobre o conteúdo da aula                     |

## Onde hospedar os arquivos (slides, vídeos, PDFs)

O GitHub Pages serve bem HTML/CSS/JS, mas não é ideal para arquivos grandes
como vídeos. Sugestão: suba slides e resumos em PDF no Google Drive (com
link público de visualização) e vídeos no YouTube (não listado, se quiser
mais privacidade) — depois é só colar o link em `data.js`.

## Personalizar

- Cores e fontes ficam todas no topo de `assets/style.css`, nas variáveis
  dentro de `:root`.
- Para trocar a logo, substitua `assets/img/logo.png` mantendo o mesmo nome.
