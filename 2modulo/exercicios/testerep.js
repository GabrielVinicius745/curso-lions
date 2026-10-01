import PromptSync from "prompt-sync";
const prompt = PromptSync();

let tab = parseInt(prompt("Insira o valor inicial cujo qual você procura a tabuada: "))

for (let i = 1; i <= 100; i++) {
    let produto = parseInt (i * tab)
    console.log(` ${produto} `);   
}

