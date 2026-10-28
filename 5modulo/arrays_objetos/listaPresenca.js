import PromptSync from "prompt-sync";
const teclado = PromptSync();


let listaAlunos = ["João", "Maria"]
let terAluno = teclado("Digite o nome do aluno que será adicionado: ");

listaAlunos.push(terAluno);
if (listaAlunos.length == 3)
console.log(`Turma formada com sucesso! Alunos: ${listaAlunos}`);