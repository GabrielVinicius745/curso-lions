import PromptSync from "prompt-sync";
const teclado = PromptSync();

console.log("Escolha um produto cadastrado no sistema: "+
    "\n[1] - Fone" +
    "\n[2] - Teclado" +
    "\n[3] - Mouse"
);


let escolha = parseInt(teclado("Qual produto deseja comprar? "));

let resgistroDaCompra  = {
    produto: "",
    precoFixo: 0
}

switch (escolha) {
    case 1:
        resgistroDaCompra.produto = "Fone";
        resgistroDaCompra.precoFixo = 250;
        break;
    case 2:
        resgistroDaCompra.produto = "Teclado";
        resgistroDaCompra.precoFixo = 100;
        break;
    case 3:
        resgistroDaCompra.produto = "Mouse";
        resgistroDaCompra.precoFixo = 50;
        break;
    default:
        resgistroDaCompra.produto = "Desconhecido"
        resgistroDaCompra.precoFixo = 0
        break;
}

console.table(resgistroDaCompra);