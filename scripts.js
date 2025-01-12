const button = document.getElementById('button');
const container = document.querySelector('.container');
const btnClear = document.getElementById('btnClear');
const gridSize = 700;
let mouseDrawing = false;

// Function to generate a random color
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Function to create a new grid
function createGrid(size) {
    container.innerHTML = ''; 
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
        divSquare.style.backgroundColor = "white";
        
        divSquare.addEventListener('mousedown', () => {
            mouseDrawing = true;
            divSquare.style.backgroundColor = getRandomColor();
        });
        divSquare.addEventListener('mouseover', () => {
            if (mouseDrawing) {
                divSquare.style.backgroundColor = getRandomColor();
            }
        });
        
        container.appendChild(divSquare);
    }
    document.addEventListener('mouseup', () => {
        mouseDrawing = false;
    });
}

// default grid
createGrid(16);

// button event listener to create a new grid
button.addEventListener('click', () => {
    newGridNum = parseInt(prompt("Set a number for new grid:"));
    if (newGridNum <= 100) {
        createGrid(newGridNum);
    } else {
        alert('Number is too big!');
    }
});


btnClear.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(square => {
        square.style.backgroundColor = 'white';
    });
});