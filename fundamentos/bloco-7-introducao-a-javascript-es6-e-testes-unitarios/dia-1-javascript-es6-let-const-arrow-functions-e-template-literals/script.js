// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope += 'ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

console.log(testingScope(true));
  
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortArray = (a, b) => a - b

const arrayFormatado = () => oddsAndEvens.sort(sortArray);

console.log(arrayFormatado()); // será necessário alterar essa linha 😉