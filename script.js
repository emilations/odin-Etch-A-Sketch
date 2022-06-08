// Initialisation #############################################################
const grid = document.querySelector(".grid");

const DEFAULTSIZE = 16;
const BLACK = "black"
const RED = "red"
const WHITE = "white"

let color = "black";

window.onload = () => {
    createGrid(DEFAULTSIZE)
    setColor(BLACK)
    listenToRadio()
    listenToButton()
    enableDraw()
}

// Function delcaration ##################################################################
function listenToRadio() {
    const radioButtons = document.querySelectorAll(
        'input[name="control-size__radio-button"]');
    radioButtons[1].checked = "true"; // Enable radio button 16x16 by default
    radioButtons.forEach(function(radioButton){
        radioButton.addEventListener("click", function(e) {
            createGrid(e.originalTarget.value)})})
}

function listenToButton() {
    const buttons = document.querySelectorAll(".control-color__button");
    buttons.forEach(function(button){
        button.addEventListener("click", function(e) {
            setColor(e.originalTarget.value)})})
}

function createGrid(size) {
    resetGrid()
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid__row");
        for (let j = 0; j < size; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid__element");
            gridRow.append(gridElement)};
        grid.append(gridRow)}
    enableDraw()
}

function enableDraw() {
    const gridElements = document.querySelectorAll(".grid__element");
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", brushColor)
    })
}

function setColor(newColor) {
    color = newColor;
}

function brushColor() {
    this.style.backgroundColor = color;
}

function resetGrid() {
    grid.innerHTML = "";
}