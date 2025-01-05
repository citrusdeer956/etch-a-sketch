const button = document.getElementById('button');
const container = document.querySelector(".container");

button.addEventListener('click', () => {
    // checks if square exceeds 5x5 limit
    if (container.children.length < 16) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('grid');
        container.appendChild(divSquare);
        /*mouse hover event listener*/
        divSquare.addEventListener('mouseover', function(event) {
            this.style.backgroundColor = 'red';
        });
        divSquare.addEventListener('mouseout', function(event) {
            this.style.backgroundColor = 'black';
        });
    } else {
       alert("SQUARE FULL!");
    }; 
});





