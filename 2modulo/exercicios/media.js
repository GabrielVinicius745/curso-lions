import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let mediaNota = (nota1+nota2)/2;

console.log(`Sua média final é: ${mediaNota}`);