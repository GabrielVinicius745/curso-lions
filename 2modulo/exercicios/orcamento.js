import PromptSync from "prompt-sync";
const teclado = PromptSync();

let valorHora = 45;
let totalProjeto = 0;
let horasEstimadas = parseInt(teclado("Digite a quantia de horas estimadas: "))
let verifONG = teclado("O cliente é uma ONG? (sim/não) ")
let oNG = Boolean

if (verifONG == "sim") {
    oNG = true
} else {
    oNG = false
}

totalProjeto = valorHora * horasEstimadas


if (oNG === true && totalProjeto >= 5000) {
    totalProjeto = totalProjeto * 0.90
}

console.log(`valor total: ${totalProjeto}`);