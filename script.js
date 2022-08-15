const box = document.getElementById('box');
const DEFAULT = 'color';
const default_color = '#333'

let currentMode = DEFAULT;
let currentColor = default_color;

var slider = document.getElementById('slider');
var output = document.getElementById('demo');

const rainbow_btn = document.getElementById('rainbow');

rainbow_btn.onclick = e => {
    buttonOn('rainbow')
    currentMode = 'rainbow';
};

let mousedown = false;
document.body.onmousedown = e => {
    mousedown = true;
}
document.body.onmouseup = e => {
    mousedown = false;
}


output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}
slider.onchange = e => {
    changeBox(e.target.value, e.target.value)
}

let nodes = document.querySelectorAll('.grid-item');
nodes.forEach(node => {
    changeColor(node);
})

let r = parseInt(output.value);
let c = parseInt(output.value);

function makeGrid(rows, cols){
    box.style.setProperty('--grid-rows', rows);
    box.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < rows*cols; i++){
        let node = document.createElement('div');
        /*node.innerText = i + 1;*/
        box.appendChild(node).className = 'grid-item';
    }
}

function changeColor(event){
    if (event.type === "mouseover" && !mousedown) return;
    if (currentMode === 'rainbow'){
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
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

function reloadGrid(){
    clearGrid();
    makeGrid(r, c)
}

function changeBox(rows, cols){
    r = rows;
    c = cols;
    reloadGrid();
}

function buttonOn(mode){
    if (currentMode === 'rainbow'){
        rainbow_btn.classList.remove('active');
    }
    /*else if (currentMode === 'color'){

    }*/

    if (mode === 'rainbow'){
        rainbow_btn.classList.add('active');
    }
}

window.onload = e => {
    makeGrid(r, c);
    buttonOn(DEFAULT)
}

