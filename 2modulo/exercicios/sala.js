import PromptSync from "prompt-sync";
const prompt = PromptSync();

let minhaMesa = ['José', 'Vinicius', 'Gabriel',' Daniel']
console.log(`Meu nome é ${minhaMesa[2]}, meus colegas são ${minhaMesa[0]}, ${minhaMesa[1]} e ${minhaMesa[3]}.`);

let segprova = parseFloat(prompt("Informe a nota da prova 1: "));
let priprova = parseFloat(prompt("Informe a nota da prova 2: "));
let media = parseFloat

let boletim = [];
boletim.push(segprova, priprova)
media = (boletim [0] + boletim [1])/2
console.log(`Sua média de notas é ${media}`)

if (media >= 7) {
console.log("Aprovado");
} else if (media <= 5) {
console.log("Recuperação");
} else {
console.log("Reprovado");
}