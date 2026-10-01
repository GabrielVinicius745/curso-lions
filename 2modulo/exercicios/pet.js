// Forma antiga
// const prompt = require("prompt-sync")();

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nomePet = prompt("Qual é o nome do seu pet? R: ");
let idadePet = prompt("Qual é a idade do seu pet? R: ");

console.log(`O ${nomePet} tem ${idadePet} anos!`);