// Global variable
const DEFAULTSIZE = 16

// Initial declarations
const grid = document.querySelector(".grid");

// Function calling
createGrid(DEFAULTSIZE);

// A size of 16 will create a grid of 16x16
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < size; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridRow.append(gridElement);
        }
        grid.append(gridRow)}}