// Backtick ` //

'use strict';

// use strict limiterà JS e mi obbligherà a definire le variabili //

    //    Chiedi all’utente il suo nome // 
    // poi chiedi il suo cognome // 
    // poi chiedi il suo colore preferito // 
    // Infine scrivi sulla pagina nomecognomecolorepreferito21 // 
    
    // Bonus 1: visualizzate le informazioni anche nella console del browser; //
    // Bonus 2: provate a generare un numero casuale con Javascript; //


    /* 
    
    ESEMPIO DI CONCATENAZIONE
    
    const nome = "Marco";
    const cognome = "Rossi";
    const nomeCompleto = nome + " " + cognome;
    console.log(nomeCompleto); // Stampa "Marco Rossi"

*/

/*  
    impostare una variabile 
    nella variabile c'è il contenuto HTML
    rappresentato dal paragrago con id       
*/

let output = outputText.innerHTML;

/* 
    outputText dovrà avere il valore 
    dell'elemento con id quindi del paragrafo

    outputText = document = quindi html

    getElementById = vai a pescare l'elemento con id = p
    
    quale id? ('password') = 
    <p id="password">La password è: </p>
*/

let outputText = document.getElementById('password');


const name = prompt('Il tuo nome');

const surname = prompt ('Il tuo cognome');

const color = prompt('Il tuo colore preferito');

/* mettere insieme le tre informazioni */

output = `${output}${userName}${userLastName}${userFavColor}



/* math.random             per generare numeri casuali*/

console.log(name, surname, color)

