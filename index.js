function carregarMensagem() {
  const urlParams = new URLSearchParams(window.location.search);
  const usuario = urlParams.get('nome') || "Visitante";
  
  // CORREÇÃO: Usando textContent (evita XSS) e sem eval/chaves expostas
  document.getElementById("boas-vindas").textContent = "Olá, " + usuario;
  
  const resultado = 2 + 2;
  console.log("Resultado:", resultado);
}
