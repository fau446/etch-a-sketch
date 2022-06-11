function createGrid(size) {
    let container = document.querySelector('#container');
    container.style.setProperty('--grid-size', size);
    size = size * size;
    for (let i = 0; i < size; i++) {
        let cell = document.createElement('div');
        cell.textContent = "c";
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

createGrid(16);