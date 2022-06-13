function createGrid() {
    reset();
    let size = prompt("How many pixels do you want the box? (Max of 100)");
    if (size > 100) {
        size = 100;
    }
    let container = document.querySelector('#container');
    container.style.setProperty('--grid-size', size);
    size = size * size;
    for (let i = 0; i < size; i++) {
        let cell = document.createElement('div');
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

function clearGrid() {
    let toClear = document.querySelectorAll('.cell');
    toClear.forEach((cell) => {
        cell.style.background = 'white';
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

function randomColor() {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function drawRandomColors () {
    let cells = document.querySelectorAll('.cell');
    if (!randomColors) {
        randomColors = true;
        randomColorBtn.style.background = 'pink';
        randomColorBtn.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'wheat';
        })
        randomColorBtn.addEventListener('mouseleave', function (e) {
            e.target.style.background = 'pink';
        })
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', function(e) {
                e.target.style.background = randomColor();
            })
        })
    } else {
        randomColors = false;
        randomColorBtn.style.background = 'palegoldenrod';
        randomColorBtn.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'wheat';
        })
        randomColorBtn.addEventListener('mouseleave', function (e) {
            e.target.style.background = 'palegoldenrod';
        })
        draw();
    }
}

let randomColors = false;

const gridBtn = document.querySelector('#grid-btn');
gridBtn.addEventListener('click', createGrid);

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearGrid);

const randomColorBtn = document.querySelector('#random-color-btn');
randomColorBtn.addEventListener('click', drawRandomColors);

randomColor();