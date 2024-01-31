//Função para comparar Strings e int
function dayOne(){
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if(numeroUm == stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if(numeroTrinta == stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if(numeroDez == stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}
}
dayOne()

//Função para receber respostas e personalizar mensagens
function mensagens(){
let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let linguagem = prompt('Qual linguagem de programação você estuda?');


if (nome.trim() === '') {
    alert('Insira uma opção válida');
} else if (idade.trim() === '') {
    alert('Insira uma opção válida');
} else if (linguagem.trim() === '') {
    alert('Insira uma opção válida');
} else {
    alert(`Olá, ${nome}, você possui ${idade} anos e já estuda ${linguagem} !`);
}

let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para sim e com 2 para não.`);

if(resposta == 1){
       alert('Oba! Que ótimo que você gosta de aprender mais sobre!');
    } else if(resposta == 2){
       alert('Que pena. Quem sabe você não encontra uma outra linguagem que seja para ti!');
    } else {
       alert('Opção inválida.');
    }
}
mensagens()

//Desafio de possíveis destinos
function opcoesArea(){
    //Declaração das variáveis
    let escolhaArea; 
    let respostaBack = '';
    let respostaFront = '';
    let especializar;
    let listaLinguagens = [];
    let tecnologias;
    
    do {
        escolhaArea = prompt('Qual carreira você quer seguir? Digite 1 para Front-end ou 2 para Back-end. ');
        if (escolhaArea == 1) {
            respostaFront = prompt('Você quer aprender React ou Vue?').toUpperCase();   
        } else if (escolhaArea == 2) {
            respostaBack = prompt('Você quer aprender C# ou Java?').toUpperCase();
        } else {
            alert('Opção inválida');
            respostaBack = '';
            respostaFront = '';
        }
    } while (escolhaArea != 1 && escolhaArea  != 2);
    
    do {
        especializar = prompt('Você quer seguir se especializando na sua área? Se sim, digite 1.\n Caso queira ser Fullstack, digite 2.');
        if (especializar == 1) {
            alert('Que incrível que você queira se especializar, na Alura há diversos cursos para impulsionar sua carreira.');
        } else if (especializar == 2) {
            alert('Para se desenvolver como Fullstack, você pode se inscrever nas diversas formações da Alura, há cursos tanto para Back-end quanto para Front-end.');
        } else {
            alert('Opção inválida');
        }
    } while (especializar != 1 && especializar != 2);
    
    do {
        tecnologias = prompt('Quais tecnologias ou linguagens você gostaria de especializar ou aprender? Digite -1 caso queira finalizar a inserção');
        if(tecnologias == -1){
            let mensagem = listaLinguagens.length == 1 ? alert(`Uau, bom saber que você quer aprender mais sobre ${listaLinguagens}`) : alert(`Impressionante, você quer saber sobre ${listaLinguagens.length} tecnologias (${listaLinguagens})`);
        } else {
            listaLinguagens.push(tecnologias);
        }
        
    }while(tecnologias != -1)
}
opcoesArea()

//Função para jogo de adivinhar número aleatório
function desafioAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let tentativas = 1;
    let chute = prompt('Tente acertar o número aleatório, insira o seu chute!');
    let mensagemTentativas
    
    
    while(tentativas < 3){
        if(chute == numeroAleatorio){
            let mensagemTentativas = tentativas > 1 && chute == numeroAleatorio ? alert(`Você acertou o número aleatório ${numeroAleatorio} com ${tentativas} tentativas!!! `) : alert(`Parabéns, você acertou o número aleatório ${numeroAleatorio} com ${tentativas} tentativa!!!`)
            break;
        } else if (numeroAleatorio < chute) {
            alert('Poxa, você não acertou o número mas ainda pode acertar! Você tentar acertar em até 3 tentativas \n O seu chute foi maior que o número.');
            chute = prompt('Insira sua próxima tentativa');
            tentativas ++;
        } else if(numeroAleatorio > chute){
            alert('Poxa, você não acertou o número mas ainda pode acertar! Você tentar acertar em até 3 tentativas \n O seu chute foi menor que o número.');
            chute = prompt('Insira sua próxima tentativa');
            tentativas ++;
        }
        }
    if (tentativas = 3){
        alert(`Você não acertou o número aleatório. O número era ${numeroAleatorio}.`)
    }
}
desafioAleatorio()
