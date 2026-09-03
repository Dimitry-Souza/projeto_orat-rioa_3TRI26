// Renderiza a lista de aulas na página inicial a partir de AULAS (assets/data.js)

const DIAS_SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const MESES = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez"
];

function formatarData(isoDate) {
  const [ano, mes, dia] = isoDate.split("-").map(Number);
  const d = new Date(ano, mes - 1, dia);
  return `${DIAS_SEMANA[d.getDay()]}, ${dia} ${MESES[mes - 1]}`;
}

function ehFutura(isoDate) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return new Date(isoDate + "T00:00:00") >= hoje;
}

function criarChip(url, rotulo) {
  if (!url) {
    return `<span class="chip disabled">${rotulo}</span>`;
  }
  return `<a class="chip" href="${url}" target="_blank" rel="noopener">${rotulo}</a>`;
}

function criarCard(aula) {
  const futura = ehFutura(aula.data);
  const botaoReuniao = aula.linkReuniao
    ? `<a class="btn btn-primary" href="${aula.linkReuniao}" target="_blank" rel="noopener">
         ${futura ? "Entrar na aula" : "Ver link da chamada"}
       </a>`
    : `<span class="btn btn-primary disabled">Sem chamada marcada</span>`;

  return `
    <article class="card" data-materia="${aula.materia}">
      <div class="card-top">
        <span class="card-subject">${aula.materia}</span>
        <span class="card-when">${formatarData(aula.data)} · ${aula.horario}</span>
      </div>
      <h3>${aula.titulo}</h3>
      <p class="card-monitor">Com <strong>${aula.monitor}</strong></p>
      <p class="desc">${aula.descricao}</p>
      <div class="card-materials">
        ${criarChip(aula.slides, "Slides")}
        ${criarChip(aula.video, "Videoaula")}
        ${criarChip(aula.resumo, "Resumo")}
      </div>
      <div class="card-actions">${botaoReuniao}</div>
    </article>
  `;
}

function popularFiltroMaterias() {
  const select = document.getElementById("filtro-materia");
  const materias = [...new Set(AULAS.map((a) => a.materia))].sort();
  materias.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    select.appendChild(opt);
  });
}

function renderizar() {
  const grid = document.getElementById("grid-aulas");
  const busca = document.getElementById("busca").value.trim().toLowerCase();
  const materia = document.getElementById("filtro-materia").value;

  const ordenadas = [...AULAS].sort((a, b) => {
    // futuras primeiro (mais próxima primeiro), depois passadas (mais recente primeiro)
    const aFutura = ehFutura(a.data);
    const bFutura = ehFutura(b.data);
    if (aFutura !== bFutura) return aFutura ? -1 : 1;
    return aFutura
      ? a.data.localeCompare(b.data)
      : b.data.localeCompare(a.data);
  });

  const filtradas = ordenadas.filter((a) => {
    const bateMateria = materia === "todas" || a.materia === materia;
    const alvo = `${a.titulo} ${a.materia} ${a.monitor} ${a.descricao}`.toLowerCase();
    const bateBusca = busca === "" || alvo.includes(busca);
    return bateMateria && bateBusca;
  });

  document.getElementById("contagem").textContent =
    `${filtradas.length} aula${filtradas.length === 1 ? "" : "s"} encontrada${filtradas.length === 1 ? "" : "s"}`;

  grid.innerHTML = filtradas.length
    ? filtradas.map(criarCard).join("")
    : `<div class="empty-state"><span>Nenhuma aula por aqui</span>Tenta outro termo ou outra matéria no filtro.</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  popularFiltroMaterias();
  renderizar();
  document.getElementById("busca").addEventListener("input", renderizar);
  document.getElementById("filtro-materia").addEventListener("change", renderizar);
});
