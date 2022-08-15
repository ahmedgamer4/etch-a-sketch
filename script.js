const box = document.getElementById('box');

function makeGrid(rows, cols){
    box.style.setProperty('--grid-rows', rows);
    box.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < rows*cols; i++){
        let node = document.createElement('div');
        /*node.innerText = i + 1;*/
        box.appendChild(node).className = 'grid-item';
    }
}

function clearGrid(){
    box.innerHTML = '';
}

function hover(){
    let nodes = document.querySelectorAll('.grid-item');
    nodes.forEach(node => {
        node.addEventListener('mouseover', e => {
            e.target.style.background = "#042434";
        });
    })
}

let r = 16;
let c = 16;

function changeBox(){

    let changeButton = document.getElementById("change-button");
    changeButton.addEventListener('click', e => {
        let rows = prompt('Rows: ');
        let cols = prompt("Columns: ")
        let items = document.querySelectorAll('.grid-item');

        clearGrid()
        
        /* makeGrid(parseInt(rows), parseInt(cols)); */
        c = Number(cols);
        r = Number(rows);
        makeGrid(r, c)
    });
}

window.onload = e => {
    makeGrid(r, c);
    hover();
    changeBox();
}