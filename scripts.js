const button = document.getElementById('button');
const container = document.querySelector(".container");
const newGridBtn = button.cloneNode(true);

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

        
    } else if (newGridBtn !== null){
        /* new grid buttton */
        newGridBtn.innerHTML = "press to create new grid"
        newGridBtn.id = "GridBtn"
        document.body.appendChild(newGridBtn);
    };
});

/*new grid function */
newGridBtn.addEventListener('click', () => {
    newGridNum = parseInt(prompt("set a number for new grid:"));
    if (newGridNum <= 100) {
        alert('function works!')
    } else {
        alert('number is too big!');
    }
})







