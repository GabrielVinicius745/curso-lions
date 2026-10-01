import PromptSync from "prompt-sync";
const teclado = PromptSync();

let genero = teclado("Qual o gênero do seu filme?: ")

switch (genero) {
    case 'Ação':
        console.log("Sala 1");
        break;
    case 'Comédia':
        console.log("Sala 2");
        break;
    case 'Terror':
        console.log("Sala 3");
        break;
    case 'Animação':
        console.log("Sala 4");
        break;
    default:
        console.log("Gênero não encontrado. Veja as opções disponíveis");
        
}

