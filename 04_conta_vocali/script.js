/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function stringhe(word){
    let vocali="aeiou"
    let lettere= word.split("").filter(carattere=>(vocali.includes(carattere))).join("")
   
    return  lettere
}


// Invoca la funzione qui e stampa il risultato in console

console.log(stringhe(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)