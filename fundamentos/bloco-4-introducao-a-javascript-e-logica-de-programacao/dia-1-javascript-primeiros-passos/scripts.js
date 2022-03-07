//Programa 1

const a = 10;
const b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Programa 2

const n1 = 5;
const n2 = 10;
let resultado;

if (n1 > n2) {
  resultado = n1;
} else if (n1 < n2) {
  resultado = n2;
}

console.log(resultado);

//Programa 3

const num1 = 5;
const num2 = 10;
const num3 = 15;
let resultado2;

if (num1 > num2 && num1 > num3) {
  resultado2 = num1;
} else if (num2 > num1 && num2 > num3) {
  resultado2 = num2;
} else if (num3 > num1 && num3 > num2) {
  resultado2 = num3;
}

console.log(resultado2);

//Programa 4

const n = 4;

if (n > 0) {
  console.log("Positive");
}else if (n < 0){
  console.log("Negative");
}else {
  console.log("Zero");
}

//Programa 5

const a1 = 41;
const a2 = 80;
const a3 = -60;

if(a1 + a2 + a3 == 180 && a1, a2, a3 > 0) {
  console.log("Triângulo");
}else {
  console.log("Erro");
}

//Programa 6

let peca = "Cavalo";

if (peca.toLowerCase() == "peão") {
  console.log("1 casa para frente.");
} else if (peca.toLowerCase() == "torre") {
  console.log("Quantas casas quiser, para frente, para trás, para direita ou para esquerda.");
} else if (peca.toLowerCase() == "bispo") {
  console.log("Quantas casas quiser, para diagonais.");
} else if (peca.toLowerCase() == "cavalo") {
  console.log("Qualquer direção, movimentos em L.");
} else if (peca.toLowerCase() == "rei"){
  console.log("1 casa para qualquer direção.");
} else if (peca.toLowerCase() == "rainha") {
  console.log("Quantas casas quiser, para qualquer direção.");
} else {
  console.log("Não é uma peça do xadrez.");
}

//Programa 7

let nota = 100;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else {
  console.log("ERRO");
}

//Programa 8

const numero1 = 10;
const numero2 = 11;
const numero3 = 13;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log(true)
} else {
  console.log(false)
}

//Programa 9

const number1 = 20;
const number2 = 30;
const number3 = 10;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  console.log(true)
} else {
  console.log(false)
}

//Programa 10

const custo = 100;
const venda = 160;
let imposto = custo * 20 / 100;
const custoTotal = custo + imposto;

const lucro = (venda - custoTotal) * 1000;

console.log(lucro)

//Programa 11

const salary = 2000;

if (salary <= 1556.94) {
  salaryTotal = salary + (salary * 8 / 100);
  console.log(salaryTotal);
} else if (salary >= 1556.94 && salary < 2594.92) {
  salaryTotal = salary + (salary * 9 / 100);
  console.log(salaryTotal);
} else if (salary >= 2594.92 && salary < 5189.82) {
  salaryTotal = salary + (salary * 11 / 100);
  console.log(salaryTotal);
} else {
  salaryTotal = salary + 570.88
  console.log(salaryTotal);
}






