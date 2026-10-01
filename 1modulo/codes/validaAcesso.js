import PromptSync from "prompt-sync";
const teclado = PromptSync();

const validador = (nome, codCracha) => {
    switch (true) {
        case (codCracha > 1000 && nome.length > 5 ):
            return true;
            break;

    }

    return false;
};

let nome = teclado("Informe seu nome: ")
let codCracha = parseInt(teclado("Informe o número do seu crachá: "))

if (validador(nome, codCracha)) {
    console.log("Acesso concedido!");
}   else {
    console.log("Acesso negado.");    
}
