import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = String(prompt("Informe seu nome: "))
let idade = parseInt(prompt("Informe sua idade: "))

if (idade < 18) {
    let tempoFalta = parseInt
    tempoFalta = 18 - idade
    console.log(`${nome}, você é menor de idade, não vai pro bailão! Vai demorar mais ${tempoFalta} anos`);   

} else if (120 >= idade >= 18) {
 console.log("Você já é maior de idade, pode ir pro bailão")

} else {
    console.log("Valor inválido!")
}