const btnTema = document.getElementById("btnTema");
const btnProjeto = document.getElementById("btnProjeto");
const mensagem = document.getElementById("mensagem");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");

  if (document.body.classList.contains("claro")) {
    btnTema.innerText = "🌞 Modo claro";
  } else {
    btnTema.innerText = "🌙 Modo escuro";
  }
});

btnProjeto.addEventListener("click", () => {
  mensagem.innerText = "🚀 Esse foi meu primeiro projeto interativo!";
});
