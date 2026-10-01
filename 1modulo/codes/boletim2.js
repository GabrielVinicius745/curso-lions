import PromptSync from "prompt-sync";
const teclado = PromptSync();

let notas = []
let prinota = parseFloat(teclado("Primeira nota: "));
let segnota = parseFloat(teclado("Segunda nota: "));
let ternota = parseFloat(teclado("Terceira nota: "));
let quarnota = parseFloat(teclado("Quarta nota: "));
let quinota = parseFloat(teclado("Quinta nota: "));
let media = 0
notas.push (prinota, segnota, ternota, quarnota, quinota);
let resultado = 0

for (let i = 0; i < notas.length; i++) {
    notas[i]
    resultado = notas[i] + resultado
};

resultado = resultado/notas.length

if (resultado >= 7){
    console.log("Aprovado");
} else if (resultado < 7 && resultado > 5) {
    console.log("Recuperação");
} else if (resultado < 5) {
    console.log("Reprovado");
}
console.log(resultado);

    