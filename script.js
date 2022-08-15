const box = document.getElementById('box');
const DEFAULT = 'color';
const default_color = '#333';

let currentMode = DEFAULT;
let currentColor = default_color;

var slider = document.getElementById('slider');
var output = document.getElementById('demo');

const rainbow_btn = document.getElementById('rainbow');
const color_btn = document.getElementById('color');

rainbow_btn.onclick = e => {
    buttonOn('rainbow')
    currentMode = 'rainbow';
};

color_btn.onclick = e => {
    buttonOn('color');
    currentMode = 'color';
}

let mousedown = false;
document.body.onmousedown = e => {
    mousedown = true;
}
document.body.onmouseup = e => {
    mousedown = false;
}


output.innerHTML = 16;

slider.oninput = function(){
    output.innerHTML = this.value;
}
slider.onchange = e => {
    changeBox(e.target.value, e.target.value)
}


let r = 16;
let c = 16;

function makeGrid(rows, cols){
    box.style.setProperty('--grid-rows', rows);
    box.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < rows*cols; i++){
        let node = document.createElement('div');
        node.addEventListener('mouseover', changeColor);
        node.addEventListener('mousedown', changeColor);
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
        event.target.style.backgroundColor = currentColor;
    }
}

function clearGrid(){
    box.innerHTML = '';
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
    else if (currentMode === 'color'){
        color_btn.classList.remove('active');
    }

    if (mode === 'rainbow'){
        rainbow_btn.classList.add('active');
    }
    else if (mode === 'color'){
        color_btn.classList.add('active');
    }
}

window.onload = e => {
    makeGrid(r, c);
    buttonOn(DEFAULT)
}
