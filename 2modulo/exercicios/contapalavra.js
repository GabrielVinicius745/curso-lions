import PromptSync from "prompt-sync";
const teclado = PromptSync();

let entrada = teclado("Me conte uma frase, história ou conto aleatório, que eu te direi a quantia de palavras! \nDigite aqui: " )
let frase = entrada

frase.split(" ")

