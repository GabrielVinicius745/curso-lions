import PromptSync from "prompt-sync";
const teclado = PromptSync();

let temperaturas = []

for (let i=0; i<=2; i++) {
    let valor = parseInt(teclado("Quais são as temperaturas? "))
    temperaturas[i].push(valor)
}

const avaliarTemperaturas = (temperaturas) => {
    let clima = (temperaturas[0] + temperaturas[1] + temperaturas[2]) / 3
    if (clima > 30){
        console.log("Alerta de aquecimento");
    } else if (clima <= 30 ) {
        console.log("Clima estável");
    }
        
}