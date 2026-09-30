cat << 'EOF' > index.js
function carregarMensagem() {
  const urlParams = new URLSearchParams(window.location.search);
  const usuario = urlParams.get('nome') || "Visitante";
  
  // CORREÇÃO: Usando textContent em vez de innerHTML (Evita XSS)
  document.getElementById("boas-vindas").textContent = "Olá, " + usuario;
  
  // CORREÇÃO: Removido o eval() e a chave hardcoded
  const resultado = 2 + 2;
  console.log("Resultado:", resultado);
}
EOF
