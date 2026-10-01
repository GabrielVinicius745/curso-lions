import PromptSync from "prompt-sync";
const teclado = PromptSync();

let valorOriginal = parseFloat(teclado("Qual era o valor original da fatura? "));
let diasAtraso = parseFloat(teclado("Quantos dias a fatura está atrasada? "));
let verifFeriadoFds = parseFloat(teclado("O vencimento original caiu em um feriado ou fim de semana (sim/nao)? "));
let FeriadoFimDS = verifFeriadoFds == "sim"

if (diasAtraso > 0 && FeriadoFimDS == false) {
    valorOriginal = valorOriginal + (valorOriginal * 0.2) + diasAtraso
}
console.log(`O valor atualizado da fatura é de: ${valorOriginal}`);