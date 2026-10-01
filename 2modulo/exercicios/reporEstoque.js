import PromptSync from "prompt-sync";
const teclado = PromptSync();

let quantidadeAtual = parseFloat(teclado("Digite a quantidade atual de um produto: "));
let minimaQuantidade = parseFloat(teclado("Digite a quantidade mínima segura: "))

if (quantidadeAtual < minimaQuantidade) {
    let diferenca = minimaQuantidade - quantidadeAtual
    console.log(`Alerta: Estoque baixo É necessário solicitar a compra de ${diferenca} unidades.`);    
} else {
    console.log("Estoque regularizado.");   
}