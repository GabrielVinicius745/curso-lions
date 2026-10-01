import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ano = 2026;
let nome = String(prompt("Informe seu nome: "));
let idade = parseInt(prompt("Informe sua idade: "));
let niver = String(prompt("Já fez aniversário este ano? S/N: "));

let pabens = Boolean;
if (niver == "S") {
    pabens = true
} else {
    pabens = false
}

let nasc = parseInt
if (pabens == true){
    nasc = ano - idade
} else
{nasc = ano - idade - 1}

console.log(`${nome} nasceu no ano de ${nasc}`);