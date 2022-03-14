let userName = "Daniel Cavalcanti";
let userPassword = 1234;
let acess = true;

if (userName === "Daniel Cavalcanti" && userPassword === 1234) {
  console.log("Acesso Permitido");
} else {
  console.log("Acesso Negado");
  acess = false;
}

let quantidade = 10;
let bag = 0;

if (acess === true) {
  for (let indexPaes = 0 ; indexPaes <= quantidade ; indexPaes += 1) {
    bag = indexPaes;
    console.log("Existe " + bag + " pães na sacola.");
  }
} else {
  console.log("Não é possível adicionar pães na sacola. Acesso Negado!")
}