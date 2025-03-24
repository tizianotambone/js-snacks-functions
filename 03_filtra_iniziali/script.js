/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function words(names){
    let stringhe=[]
    for (let index = 0; index < names.length; index++) {
       if( names[index].charAt(0).toLowerCase()== "a"){
        stringhe.push(names[index])
       } 
    }
    return stringhe
    
       
        
}


// Invoca la funzione qui e stampa il risultato in console

console.log(words(names))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]