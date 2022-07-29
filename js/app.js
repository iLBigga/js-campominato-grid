// Selezione elemento con classe table
let table = document.querySelector('.table');
// Selezione submit input

const submitElement = document.querySelector('input[type="submit"]')
// Selezione select

let gridDimension = document.querySelector('select');
// Prendo il valore di select e lo salvo in gridDimension
gridDimension = parseInt(gridDimension.value);
// Creo variabile per calcolare il quadrato del valore di gridDimension
let numeroCelle = gridDimension ** 2;

// Utilizzo addEventListener su submit
submitElement.addEventListener('click', function(){ 
    // Creo ciclo for per creare le celle
    for (let i = 0; i < numeroCelle; i++) {
        // Creo elemento div con classe square tramite una funzione
        const cella = getSquare();
        // Inserisco il numero della cella 
        cella.innerHTML = i + 1;
        // Appendo elemento al tabellone
        table.append(cella); 
    }
}, {once: true});

// Creo funzione per creare celle
function getSquare() {
    // Creo costante square per creare un div
    const square = document.createElement('div');
    // Aggiungo classe square a div
    square.classList.add('square');
    // Utilizzo addEventListener su square
    square.addEventListener('click', function(){
        // Al click aggiungo classe clicked
        square.classList.add('clicked')
        // Stampo la cella in console
        console.log(this)
        
    })
    return square;
}