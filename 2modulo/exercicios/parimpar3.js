import PromptSync from "prompt-sync";
const teclado = PromptSync();

let num = parseInt(teclado("Digite um número: "));

while (num > 2) {
    num = num - 2

}

if (num === 1) {
    console.log("O número era ímpar!");
    
} else if (num === 2) {
    console.log("O número era par!");
    
}
