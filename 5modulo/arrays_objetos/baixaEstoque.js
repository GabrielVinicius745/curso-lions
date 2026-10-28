import PromptSync from "prompt-sync";
const teclado = PromptSync();

let estoqueTamanhos = [10, 12, 14];
let camisetasP = estoqueTamanhos[0];
let camisetasVend = parseInt(teclado("Quantas camisetas foram vendidas: "))
let estoque = camisetasP - camisetasVend

if (estoque < 5) {
    console.log("Alerta! Estoque de camisetas tamanho P está crítico!");
} else {
    console.log(`Estoque atualizado. quantidade restante do tamanho P: ${estoque}`);
}