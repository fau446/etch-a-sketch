function createGrid() {
    reset();
    let size = prompt("How many pixels do you want the box?");
    let container = document.querySelector('#container');
    container.style.setProperty('--grid-size', size);
    size = size * size;
    for (let i = 0; i < size; i++) {
        let cell = document.createElement('div');
        cell.textContent = "c";
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    draw();
}

function reset() {
    let toRemove = document.querySelectorAll('.cell');
    toRemove.forEach((cell) => {
        cell.remove();
    })
}

function draw() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            e.target.style.background = 'black';
        })
    })

}

const gridBtn = document.querySelector('#grid-btn');
gridBtn.addEventListener('click', createGrid);