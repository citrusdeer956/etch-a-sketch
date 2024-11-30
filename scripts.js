const button = document.getElementById('button');
const container = document.querySelector(".container");


button.addEventListener('click', () => {
    // checks if square exceeds 5x5 limit
    if (container.children.length < 16) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('grid');
        container.appendChild(divSquare);
        console.log('this if statement is working!')
    } else {
       alert("SQUARE FULL!");
    }
});