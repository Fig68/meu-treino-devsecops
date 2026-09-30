function carregarMensagem() {
  const urlParams = new URLSearchParams(window.location.search);
  const usuario = urlParams.get('nome') || "Visitante";
  
  // CORREÇÃO SAST: Uso de textContent em vez de innerHTML (Evita XSS)
  document.getElementById("boas-vindas").textContent = "Olá, " + usuario;
  
  // CORREÇÃO SAST: Removidos o eval() e a chave hardcoded
  const resultado = 2 + 2;
  console.log("Resultado:", resultado);
}
