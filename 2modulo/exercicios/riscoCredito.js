import PromptSync from "prompt-sync";
const teclado = PromptSync();

let salarioLiquido = parseFloat(teclado("Informe seu salário líquido: "))
let valorParcela = parseFloat(teclado("Informe o valor da parcela: "))
let verifRestricao = teclado("O cliente possui restrição (sim ou nao)? ")
let restricao = verifRestricao == "sim"
let limiteParcela = salarioLiquido * 0.3



if (valorParcela <= limiteParcela && restricao == false) {
    console.log("Crédito aprovado!");
} else {
    console.log("Crédito negado. Parcela acima do limite ou restrição do CPF.");   
}