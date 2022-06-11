function createGrid(size) {
    let container = document.querySelector('#container');
    for (let rows = 0; rows < size; rows++) {
        let row = document.createElement('div');
        row.classList.add('row');
        // for loop to add the number of columns
        for (let columns = 0; columns < size; columns++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

createGrid(4);