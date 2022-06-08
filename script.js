// ############################ Initialisation ################################
const grid = document.querySelector(".grid");

const DEFAULTSIZE = 16;
const BLACK = "black"
const RED = "red"
const WHITE = "white"

let gridElements;
let randomizeColor = false;

// ################################### Start ##################################
window.onload = () => {
    createGrid(DEFAULTSIZE)
    setColor(BLACK)
    enableDraw()

    listenToSizeControl()
    listenToColorControl()
    listenToReset()
}

// ######################### Function delcaration #############################
function listenToSizeControl() {
    const sizeButtons = document.querySelectorAll(
        'input[name="control-size-radio-button"]');
    sizeButtons[1].checked = "true"; // Enable radio button 16x16 by default
    sizeButtons.forEach(function(radioButton){
        radioButton.addEventListener("click", function(e) {
            console.log(e)
            createGrid(e.target.value);
            enableDraw();
        })})
}

function listenToColorControl() {
    const colorButtons = document.querySelectorAll(
        'input[name="control-color-radio-button"]');
    colorButtons[0].checked = "true"; // Enable radio button Black by default
    colorButtons.forEach(function(button){
        button.addEventListener("click", function(e) {
            setColor(e.target.value)})})
}

function createGrid(size) {
    grid.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid__row");
        for (let j = 0; j < size; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid__element");
            gridRow.append(gridElement)};
        grid.append(gridRow)}
}

function enableDraw() {
    gridElements = document.querySelectorAll(".grid__element");
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", function() {
            if (randomizeColor) {
                setColor("random")
                this.style.backgroundColor = color;
            } else {
                this.style.backgroundColor = color;}})})
    resetGrid()
}

function listenToReset() {
    const button = document.querySelector(".control-reset__button");
    button.addEventListener("click", function() {
        resetGrid()})
}


function setColor(newColor) {
    randomizeColor = (newColor == "random") ? true : false;
    color = (newColor == "random") ? "#" + Math.floor(Math.random()*16777215).toString(16) : newColor;
}

function resetGrid() {
    gridElements.forEach((gridElement) => {
        gridElement.style.backgroundColor = WHITE})
}

function randomColor() {
    let randomNumber = Math.random()
}