// TRACCIA
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// esecuzione


// chiedo all'utente di scegliere pari o dispari
const userChoice = prompt("Scegli pari o dispari");
console.log(userChoice);

// chiedo all'utente di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

// sommo i due numeri
let sum = userNumber + randomNumber();
console.log(sum);

// creo una funzione per generare un numero random da 1 a 5
function randomNumber(){
    let numRandom = Math.floor(Math.random() * 5) + 1;
    console.log (numRandom);
    return numRandom;
}
    


// creo una funzione per stabilire se la somma dei due numeri e pari o dispari
function numberEvenOrOdd(number){
    if (number % 2 === 0){
        return "pari";
    }else{
        return "dispari";
    }
}
console.log(numberEvenOrOdd(sum));

// dichiaro chi ha vinto
if (userChoice === numberEvenOrOdd(sum)){
    console.log("Ha vinto user");
}else{
    console.log("Ha vinto computer");
}