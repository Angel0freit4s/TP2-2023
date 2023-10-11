function mostrarMensagem(){
const oP = document.getElementById("texto")
const botao = document.getElementById("botao1")
oP.style = "display: block"
botao.value = 'ocultar'
botao.onclick = ocultarElemento
}

function trocarElemento() {
const oP = document.getElementById("texto")
oP.innerHTML = document.getElementById("t1").value
}

