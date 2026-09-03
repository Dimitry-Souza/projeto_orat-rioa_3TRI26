// Gera o objeto JS pronto para colar em assets/data.js, a partir do formulário.

function escaparAspas(texto) {
  return texto.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function gerarBloco() {
  const campo = (id) => document.getElementById(id).value.trim();

  const materia = campo("materia");
  const titulo = campo("titulo");
  const monitor = campo("monitor");
  const data = campo("data");
  const horario = campo("horario");
  const linkReuniao = campo("linkReuniao");
  const slides = campo("slides");
  const video = campo("video");
  const resumo = campo("resumo");
  const descricao = campo("descricao");

  const bloco = `  {
    materia: "${escaparAspas(materia)}",
    titulo: "${escaparAspas(titulo)}",
    monitor: "${escaparAspas(monitor)}",
    data: "${data}",
    horario: "${horario}",
    linkReuniao: "${escaparAspas(linkReuniao)}",
    slides: "${escaparAspas(slides)}",
    video: "${escaparAspas(video)}",
    resumo: "${escaparAspas(resumo)}",
    descricao: "${escaparAspas(descricao)}"
  },`;

  document.getElementById("saida").textContent = bloco;
  document.getElementById("output-box").hidden = false;
}

function copiarBloco() {
  const texto = document.getElementById("saida").textContent;
  navigator.clipboard.writeText(texto).then(() => {
    const btn = document.getElementById("btn-copiar");
    const original = btn.textContent;
    btn.textContent = "Copiado!";
    setTimeout(() => (btn.textContent = original), 1500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-aula").addEventListener("submit", (e) => {
    e.preventDefault();
    gerarBloco();
  });
  document.getElementById("btn-copiar").addEventListener("click", copiarBloco);

  // data mínima = hoje, só por conveniência
  document.getElementById("data").min = new Date().toISOString().split("T")[0];
});
