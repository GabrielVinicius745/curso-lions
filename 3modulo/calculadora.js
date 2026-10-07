import PromptSync from "prompt-sync";
const teclado = PromptSync();

let resultado = 0
let inicia = 0
let verifica = true
let resultadoTotal = 0

function line() {
    console.log("=====================================")
};
function menu() {
    line();
    console.log("               MENU");
    line()
    console.log("Escolha uma operação: \n");
    console.log(" 1. Adição\n 2. Subtração\n 3. Multiplicação\n 4. Divisão\n 5. Porcentagem\n 6. Ver resultado\n 7. Sair");
    line()

};
function recebeDados(a, b) {
    a = parseFloat(teclado("Primeiro valor: "));
    b = parseFloat(teclado("Segundo valor: "));
    if (isNaN(a) || isNaN(b)) {
        console.log("Digite números válidos!");
        return null;
    } 
    return { a, b };
}
function soma() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a + dados.b;
    resultadoTotal = resultadoTotal + resultado;
}
function subtrai() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a - dados.b;
    resultadoTotal = resultadoTotal + resultado;
}
function multiplica() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a * dados.b;
    resultadoTotal = resultadoTotal + resultado;
}
function divide() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a / dados.b;
    if (dados.b === 0) {
        console.log("Não é possível dividir por zero!");
    }
    resultadoTotal = resultadoTotal + resultado;
}
function porcentagem() {
    let a = parseFloat(teclado("Digite o valor: "));
    if (isNaN(a)) {
        console.log("Digite um número válido!");
        return;
    }
    resultado = ( a / resultadoTotal) * 100;
}
function iniciaPrograma() {
    switch (inicia) {
        case 1:
            soma()
            break
        case 2:
            subtrai()
            break
        case 3:
            multiplica()
            break
        case 4:
            divide()
            break
        case 5:
            porcentagem()
            break
        case 6:
            console.log(`Resultado total: ${resultadoTotal}`);
            break
        case 7: 
            verifica = false
            break
        default:
            console.log("Insira um número válido!");
            inicia = parseInt(teclado("R: "))
            iniciaPrograma()

    }

}

while (verifica === true) {
    menu();
    inicia = parseFloat(teclado("R: "));
    iniciaPrograma();
    if (inicia !== 6) {
        console.log(`Resultado: ${resultado}`);
    } 
}