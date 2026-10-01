import PromptSync from "prompt-sync";
const teclado = PromptSync();

let distPerc = parseFloat(teclado("Digite a distância percorrida (em km!): "));
let combConsum = parseFloat(teclado("Digite a quantidade de combustível consumido (em litros!): "));
let mediaConsumo = distPerc / combConsum;

if (mediaConsumo < 10) {
    console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.");  
} else {
    console.log("Consumo dentro do padrão operacional.");   
}