// TRACCIA 
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// esecuzione

// chiedo all'utente di inserire una parola
const utenteWord = prompt("Inserisci una parola");


// inverto la parola usando una funzione
function reverseWord(word){
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--){
        reverse += word[i];
    }
    return reverse
}
console.log(reverseWord(utenteWord));


// controllo se la parola e palindroma e stampo il risultato
if (utenteWord ===  reverseWord(utenteWord)){
    console.log("La parola è palindroma");
    
}else{
    console.log("La parola non è palindroma");
    
}