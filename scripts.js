const button = document.getElementById('button');
const container = document.querySelector(".container");
const gridSize = 960;
let mouseDrawing = false;

// create default div squares
// Function to create a new grid
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    const squareSize = gridSize / size; // Calculate the size of each square
    
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;
    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;
    
    for (let i = 0; i < size * size; i++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('grid');
        divSquare.style.width = `${squareSize}px`;
        divSquare.style.height = `${squareSize}px`;
        divSquare.style.border = "1px solid #ddd";
        divSquare.style.backgroundColor = "white";
        
        divSquare.addEventListener('mousedown', () => {
            mouseDrawing = true;
            divSquare.style.backgroundColor = 'black';
        });
        divSquare.addEventListener('mouseover', () => {
            if (mouseDrawing && divSquare.style.backgroundColor === "white") {
                divSquare.style.backgroundColor = 'black';
            }
        });

        
        container.appendChild(divSquare);
    }
    document.addEventListener('mouseup', () => {
        mouseDrawing = false;
    });
};

//default grid
createGrid(16);

        
/*new grid function */
button.addEventListener('click', () => {
    newGridNum = parseInt(prompt("set a number for new grid:"));
    if (newGridNum <= 100) {
        alert('function works!');
        /*clears existing grid*/
        createGrid(newGridNum);
    } else {
        alert('number is too big!');
    }
})







