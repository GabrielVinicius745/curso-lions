
import PromptSync from "prompt-sync";
import contatos from './contatos.js';
import listarContatos from './listar_contatos.js';
import adicionarContato from "./adicionarContatos.js";

const teclado = PromptSync();
let opcao = '0'


    do {
        console.log("\n=+=+=+=MENU=+=+=+=");
        console.log("1 - Adicionar contato");
        console.log("2 - Editar contato");
        console.log("3 - Listar contatos");
        console.log("4 - Remover contato");
        console.log("0 - Sair");

    }
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
            
        }
    }