const button = document.getElementById('button');
const container = document.querySelector('.container');
const btnClear = document.getElementById('btnClear');
const btnColorToggle = document.getElementById('btnColor');
const gridSize = 700;
let mouseDrawing = false;
let isRainbowColor = true; // tracks current brush mode

// Function to generate a random color
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Function to create a new grid
function createGrid(size) {
    container.innerHTML = ''; // removes previous grid
    const squareSize = gridSize / size; // calculate the size of each square
    
    // sets up container grid display
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;
    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;
    
    // creates grid squares
    for (let i = 0; i < size * size; i++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('grid');
        divSquare.style.width = `${squareSize}px`;
        divSquare.style.height = `${squareSize}px`;
        divSquare.style.backgroundColor = "white";
        
        // adds drawing interactivity
        divSquare.addEventListener('mousedown', () => {
            mouseDrawing = true;
            divSquare.style.backgroundColor = isRainbowColor ? getRandomColor() : 'black';
        });
        divSquare.addEventListener('mouseover', () => {
            if (mouseDrawing) {
                divSquare.style.backgroundColor = isRainbowColor ? getRandomColor() : 'black';
            }
        });
        
        // adds each square in the loop
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
        alert('Error! Invalid number.');
    }
});

// button event listener to clear grid drawing
btnClear.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

btnColorToggle.addEventListener('click', () => {
    isRainbowColor = !isRainbowColor; // toggle the mode
    if (isRainbowColor) {
        alert('brush set to rainbow mode!');
    } else {
        alert('brush set to black mode!');
    }
    
});
