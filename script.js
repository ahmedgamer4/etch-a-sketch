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

function hover(){
    let nodes = document.querySelectorAll('.grid-item');
    nodes.forEach(node => {
        node.addEventListener('mouseover', e => {
            e.target.style.background = "#042434";
        });
    })
}

/*function changeBox(){
    let changeButton = document.createElement('button');
    changeButton.id = 'change-button';
    changeButton.textContent = 'Change Grid';
    box.appendChild(changeBox);
}*/

makeGrid(16, 16);
hover()
