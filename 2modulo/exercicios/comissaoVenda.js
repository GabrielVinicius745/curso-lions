import PromptSync from "prompt-sync";
const teclado = PromptSync();

let totalVendas = parseFloat(teclado("Digite o valor total de vendas no mês: "))

if (totalVendas >= 20000) {
    totalVendas = totalVendas * 0.05
} else {
    totalVendas = totalVendas * 0.02
}
console.log(`Valor total da comissão: ${totalVendas}`);
