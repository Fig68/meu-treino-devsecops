// FALHA 1: Segredo exposto no código (Hardcoded Secret)
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE_SECRET_KEY";

function carregarMensagem() {
  const urlParams = new URLSearchParams(window.location.search);
  const usuario = urlParams.get('nome') || "Visitante";

  // FALHA 2: Uso de innerHTML (Vulnerabilidade a XSS)
  document.getElementById("boas-vindas").innerHTML = "Olá, " + usuario;

  // FALHA 3: Uso de eval() (Função perigosa)
  const resultado = eval("2 + 2");
  console.log("Resultado:", resultado);
}