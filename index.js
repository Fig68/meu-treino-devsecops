function carregarMensagem() {
  const urlParams = new URLSearchParams(window.location.search);
  const usuario = urlParams.get('nome') || "Visitante";
  
  // CORREÇÃO: Substituído innerHTML por textContent (Previne XSS)
  document.getElementById("boas-vindas").textContent = "Olá, " + usuario;
  
  // CORREÇÃO: Removido eval() e removido segredo da AWS
  const resultado = 2 + 2;
  console.log("Resultado:", resultado);
}
