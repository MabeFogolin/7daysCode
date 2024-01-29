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
