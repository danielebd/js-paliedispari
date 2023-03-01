'use strict';

const parola = prompt('inserisci parola');
    console.log(parola);

function palindromo(text){

    let risultato = false;
    let dritto = '';

    let i = 0;
    while(i < text.length){
        dritto += text[i];
        i++;
    }
    //console.log(dritto);

    let rovescio = '';

    let a = text.length -1;
    while(a >= 0){
        rovescio += text[a];
        //console.log(rovescio);
        a--;
    }
    //console.log(rovescio);


    if(dritto === rovescio){
        risultato = true
    }
    return ('la parola è palindroma? ' + risultato)
}
alert(palindromo(parola));

