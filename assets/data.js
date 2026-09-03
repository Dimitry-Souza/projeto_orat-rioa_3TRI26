/**
 * Base de dados das aulas.
 *
 * Este site é estático (roda no GitHub Pages), então esta lista É o banco
 * de dados: cada aula monitorada vira um objeto aqui. Para adicionar uma
 * aula nova, use a página adicionar.html para gerar o bloco pronto, ou
 * copie um objeto existente e edite os campos.
 *
 * Campos:
 *  materia     - nome da disciplina (usado no filtro)
 *  titulo      - assunto específico da aula
 *  monitor     - nome de quem está dando a aula
 *  data        - "AAAA-MM-DD"
 *  horario     - "HH:MM" (formato 24h)
 *  linkReuniao - link da chamada (Meet, Zoom, Discord...). Deixe "" se não houver aula ao vivo marcada
 *  slides      - link dos slides. Deixe "" se não tiver
 *  video       - link da aula gravada. Deixe "" se não tiver
 *  resumo      - link do resumo/PDF de anotações. Deixe "" se não tiver
 *  descricao   - 1-2 frases sobre o que a aula cobre
 */

const AULAS = [
  {
    materia: "Conjuntos e Funções",
    titulo: "Fundamento dos conjuntos numéricos e das Funções",
    monitor: "Marcelo Rodrigues",
    data: "2026-08-21",
    horario: "21:00",
    linkReuniao: "https://meet.google.com/exemplo-calc1",
    slides: "https://docs.google.com/presentation/d/1jQD3LykBZTlBROhQrb8oaoKNBXPjsbiKh8RXa1LNKAE/edit?usp=sharing",
    video: "https://youtu.be/0aUEDxYjZg8?si=JLo5Nb01ABXHZwf3",
    resumo: "https://cdnportaldaobmep.impa.br/portaldaobmep/uploads/material/om0bb3r8kf4kw.pdf",
    descricao: "Revisão de base de MAT A para a recuperação, desde conjuntos numéricos á classificação de funções e usos práticos!"
  },
];
