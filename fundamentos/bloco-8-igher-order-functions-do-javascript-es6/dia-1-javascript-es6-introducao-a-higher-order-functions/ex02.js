const checkNumber = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado;

const result = (numeroApostado, func) => {
    const randomNumber = Math.floor((Math.random() * 5) + 1);
    return func(numeroApostado, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};
console.log(result(2, checkNumber));



