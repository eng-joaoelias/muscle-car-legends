const btnAvancar = window.document.querySelector("#btn-avancar");
const btnVoltar = window.document.querySelector("#btn-voltar");
const listaCartoes = window.document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function avancarCartao() {
    listaCartoes[cartaoAtual].classList.remove("selecionado");
    cartaoAtual = (cartaoAtual + 1) % listaCartoes.length;
    listaCartoes[cartaoAtual].classList.add("selecionado");
}

function voltarCartao() {
    listaCartoes[cartaoAtual].classList.remove("selecionado");
    cartaoAtual = (cartaoAtual - 1 + listaCartoes.length) % listaCartoes.length;
    listaCartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", avancarCartao);
btnVoltar.addEventListener("click", voltarCartao);
