// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.
let soma = 0;

for (let index = 1 ; index <= 50 ; index += 1) {
  soma += index;
}

console.log("A soma de 1 a 50 é: " + soma);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let resultado = 0;

for (let index = 2 ; index <= 150 ; index += 1) {
  if (index % 3 === 0) {
    resultado += 1;
  }
}

if (resultado === 50) {
  console.log("Mensagem secreta")
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let possibilidades = ["pedra", "papel", "tesoura"];

let jogador1 = Math.floor(Math.random() * 3);
let jogador2 = Math.floor(Math.random() * 3);

// 1-1 , 1-2 , 1-3 , 2-1 , 2-2 , 2-3 , 3-1 , 3-2 , 3-3, 

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = Math.floor(Math.random() * 100) + 1;

console.log(idade)

if (idade >= 18) {
  console.log("A pessoa é maior de idade");
} else {
  console.log("Pessoa menor de idade");
}

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let idades = [22, 23 ,34];
let menorIdade = idades[0];

for (let index = 0 ; index < idades.length ; index += 1) {

  if (idades[index] < menorIdade) {
    menorIdade = idades[index];
  }
}

console.log(menorIdade);