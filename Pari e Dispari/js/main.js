'use strict';

let inputChoice = '';
let computerChoise = 'dispari';
const button = document.getElementById('btn');

button.addEventListener("click", function () {

    //SCELTA PARI O DISPARI
    inputChoice = document.getElementById('choose').value;

    if (inputChoice === 'dispari') {
        computerChoise = 'pari'
    }
    console.log('utente ' + inputChoice);
    console.log('computer ' + computerChoise);

    
})
