'use strict';

let inputChoice = '';
let computerChoise = 'dispari';
const button = document.getElementById('btn');

//FUNZIONE SOMMA
function somma(num1, num2) {
    const sum = num1 + num2;
    return(sum);
}

button.addEventListener("click", function () {

    //SCELTA PARI O DISPARI
    inputChoice = document.getElementById('choose').value;
    

    if (inputChoice === 'dispari') {
        computerChoise = 'pari';
    }

    console.log('utente ' + inputChoice);
    console.log('computer ' + computerChoise);

    //SCEGLI NUMERO
    const inputNumber = document.getElementById('input-number').valueAsNumber;
    if (inputNumber > 5) {
        alert('error, scegli un numero da 1 a 5')
    }
    const numberPc = Math.floor(Math.random() * 5) + 1;
    
    console.log(inputNumber);
    console.log(numberPc);

    //ANNUNCIO VINCITORE
    const risultato = somma(inputNumber, numberPc);
    console.log('somma' + risultato)
    document.querySelector('.somma').innerHTML = 'la somma è: ' + risultato;

    if(risultato % 2 === 0 && inputChoice === 'pari'){
        document.querySelector('.vincitore').innerHTML = 'hai vinto';
        console.log('hai vinto');
    }
    else if(risultato % 3 === 0 && inputChoice === 'dispari'){
        document.querySelector('.vincitore').innerHTML = 'hai vinto';
        console.log('hai vinto');
    }
    else{
        document.querySelector('.vincitore').innerHTML = 'hai perso';
        console.log('hai perso');
    }

})
