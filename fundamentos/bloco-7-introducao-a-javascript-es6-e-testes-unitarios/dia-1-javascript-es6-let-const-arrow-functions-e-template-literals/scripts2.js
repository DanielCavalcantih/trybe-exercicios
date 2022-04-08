// Desafio 1

const fatorial = (numero) => {
    let n = numero
    let resultado = 1
    for (let index = n; index >= 1; index -= 1) {
        resultado *= index;   
    }
    return resultado;
}

console.log(fatorial(4));

// Desafio 2

const longestWord = frase => {
    let words = frase.split(" ");
    let maiorPalavra = "";
    for (let i = 0;i < words.length;i++) {
        if (words[i].length > maiorPalavra.length) {
            maiorPalavra = words[i];
        }
    }
    return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Desafio 3

const button = document.getElementById('btn')
const pCount = document.getElementById("count");
button.addEventListener('click', clickCount)

let count = 0;
function clickCount () {
    count ++;
    pCount.innerText = count;
}
    




