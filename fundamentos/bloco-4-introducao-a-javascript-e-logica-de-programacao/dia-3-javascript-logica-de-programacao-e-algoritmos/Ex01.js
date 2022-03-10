let numero = 10;
let fatorial = 1;

for (let index = numero ; index >= 1 ; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);