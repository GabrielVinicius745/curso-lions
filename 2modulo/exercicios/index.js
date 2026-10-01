import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = prompt("Qual o nome do seu pet? ");
let idade = prompt("Qual a idade do seu pet em anos? ");

console.log(`O ${nome} tem ${idade} anos!`);