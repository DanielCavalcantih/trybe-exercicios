let body = document.querySelector('body')
let button = document.getElementById('enviar');

button.addEventListener('click', interromperEvento)
function interromperEvento(event){
    event.preventDefault();
    console.log('Informações enviadas!');
}

let buttonReset = document.createElement('button');
buttonReset.innerText = 'Resetar informações';
buttonReset.addEventListener('click', function(){
    location.reload();
})

body.appendChild(buttonReset);
