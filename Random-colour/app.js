'use strict'

const button = document.querySelector("button");
const body = document.querySelector("body");
const colour = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo','Violet']

body.style.backgroundColor = 'pink'

button.addEventListener('click', changeB)

function changeB() {
    const indexColour = parseInt(Math.random()*colour.length)
    body.style.backgroundColor = colour[indexColour]   
}