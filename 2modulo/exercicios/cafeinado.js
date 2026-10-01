import PromptSync from "prompt-sync";
const prompt = PromptSync();

let pcafe = String(prompt("Você gosta de café? (Sim OU Não): "))

let gostaDeCafe = Boolean

if (pcafe == "Sim") {
    gostaDeCafe = true
} else {
    gostaDeCafe = false
}

if (gostaDeCafe == true) {
    console.log("Que bom, eu também!")
} else {
    console.log("Que pena :(")
}
