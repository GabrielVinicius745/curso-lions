
import PromptSync from "prompt-sync";
import contatos from './contatos.js';
import listarContatos from './listar_contatos.js';
import adicionarContato from "./adicionarContatos.js";
import atualizarContato from "./atualizar_contatos.js";

const teclado = PromptSync();
let opcao = '0'

function menu() {
    console.log("\n=+=+=+=MENU=+=+=+=");
    console.log("1 - Listar contatos");
    console.log("2 - Adicionar contato");
    console.log("3 - Editar contato");
    console.log("4 - Remover contato");
    console.log("5 - Sair");
}

    menu()    

    while (opcao !== '5') {
        
        opcao = teclado('Escolha uma opção: ')
        switch (opcao) {
            case '1': listarContatos(contatos);
            break
            case '2': 
                let novoContato = {
                    nome: teclado('Nome: '),
                    email: teclado('Email: '),
                    telefones: [],
                }
                let addMais = 'sim'
                while (addMais.toLowerCase() === 'sim') {
                    novoContato.telefones.push(teclado('Telefone: '))
                    addMais = teclado('Adicionar outro telefone? (sim/nao): ')
                }
                if (adicionarContato(contatos, novoContato)) {
                    console.log('Contato adicionado com sucesso!')
                }
            break
            case '3': 
            let contatoAtualizado() = {
                nome: ,
                email: ,
                telefones:
            }

            let id = teclado("Digite o ID do contato que você deseja alterar: ")
            let novoNome = teclado('Você deseja alterar o seu nome? (s/n)')
            let novoEmail = teclado('Você deseja alterar seu email? (s/n)')
            let novoTelefone = teclado('Você deseja alterar seu telefone? (s/n)')
            
            if (novoNome === 's') {
                contatoAtualizado()
            }
            while (alterarDados.toLowerCase() === 'sim') {
                alterarDados.telefones.push(teclado('Telefone: '))
            }
            

            atualizarContato(contatos, id, contatoAtualizado);

        }
    }