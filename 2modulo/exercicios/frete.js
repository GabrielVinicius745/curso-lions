import PromptSync from "prompt-sync";
const teclado = PromptSync();

let kilometragem = parseFloat(teclado("Informe a distância em km: "));
let verifRisco = teclado("A entrega é de risco ou urgente? (sim/nao) ");
let riscoUrgente = verifRisco == "sim"
let valorFrete = 20 + (1.5 * kilometragem)

if (kilometragem >= 100 || riscoUrgente == true) {
    valorFrete = valorFrete + 15
}
console.log(`O valor do frete será de R$ ${valorFrete}`);
