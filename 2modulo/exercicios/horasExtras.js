import PromptSync from "prompt-sync";
const teclado = PromptSync();

let valorHora = parseFloat(teclado("Indique o quanto recebe por hora comum trabalhada: "));
let quantHoras = parseFloat(teclado("Indique a quantidade de horas extras trabalhadas no mês: "));
let horaExtra = valorHora * 1.5;
let aReceber = horaExtra * quantHoras;

console.log(`O valor a receber de horas extras este mês é: R$ ${aReceber}`);
