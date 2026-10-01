import PromptSync from "prompt-sync";
const teclado = PromptSync();

let resultado = 0
let inicia = 0

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
}
function subtrai() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a - dados.b;
}
function multiplica() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a * dados.b;
}
function divide() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a / dados.b;
}
function porcentagem() {
    let dados = recebeDados();
    if (dados === null) {
        return;
    }
    resultado = dados.a;
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
            mostraResultado()
            break
        case 7: 
            sair()
            break
        default:
            console.log("Insira um número válido!");
            inicia = parseInt(teclado("R: "))
            iniciaPrograma()

    }
}

menu();
inicia = parseFloat(teclado("R: "))
iniciaPrograma()
console.log(resultado);
