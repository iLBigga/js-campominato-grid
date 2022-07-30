// Selezione elemento con classe table
let table = document.querySelector('.table');
// Selezione submit input

const submitElement = document.querySelector('input[type="submit"]')
// Selezione select


// Prendo il valore di select e lo salvo in gridDimension

// Creo variabile per calcolare il quadrato del valore di gridDimension




// Utilizzo addEventListener su submit
submitElement.addEventListener('click', function(){ 
    let cella = ''
    let gridDimension = document.querySelector('select');
    let numeroCelle = gridSize(gridDimension) ** 2;
    // Creo ciclo for per creare le celle
    for (let i = 0; i < numeroCelle; i++) {
        // Creo elemento div con classe square tramite una funzione
        cella = getSquare();
        // Inserisco il numero della cella 
        cella.innerHTML = i + 1;
        // Appendo elemento al tabellone
        table.append(cella); 
    }
    console.log(numeroCelle)
});




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

function gridSize(valore){
    let gridSize = valore.value;
    if( gridSize === "easy"){
        gridSize = 10;
    } else if (gridSize === "normal"){
        gridSize = 9
    } else if (gridSize === "hard") {
        gridSize = 7
    }
    return gridSize
}