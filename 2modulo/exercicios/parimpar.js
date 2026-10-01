import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = parseInt(prompt("Insira o número que você quer definir se é par ou ímpar: "));

if (num = 0) {
    console.log("Mas também, valor nulo não dá né meu filho!"   );
    
} else if (num%2 === 1) {
    console.log("Seu número é ímpar :( ")
} else {
    console.log("Seu número é par :) ")
};