import PromptSync from "prompt-sync";
const teclado = PromptSync();

let quantCotas = parseFloat(teclado("Digite a quantidade de cotas que você possui: "));
let valorDividendo = parseFloat(teclado("digite o valor do dividendo: "));
let rendimentoTotal = quantCotas * valorDividendo;

if (rendimentoTotal >= 100.00) {
    console.log("Você já tem saldo suficiente para comprar uma nova cota e reinvestir!");
} else {
    console.log(`Rendimento recebido: R$ ${rendimentoTotal}. Acumule mais para reinvestir.`);   
}