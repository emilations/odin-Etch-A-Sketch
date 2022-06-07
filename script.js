// Ini
const DEFAULTSIZE = 16;
const grid = document.querySelector(".grid");

// Function calling
createGrid(DEFAULTSIZE);
listenToRadio();
drawGrid();


function drawGrid() {
    const gridElements = document.querySelectorAll(".grid__element");
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", function(e){
            this.classList.add("grid__element--hover")
        })
    })

}

// A size of 16 will create a grid of 16x16
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
        drawGrid();
}

// Listen to radio control for grid size
function listenToRadio() {
    const radioButtons = document.querySelectorAll('input[name="control-size__radio-button"]');
    // fix start: enable default value
    radioButtons[1].checked = "true";
    // fix end:
    radioButtons.forEach(function(radioButton){
        radioButton.addEventListener("click", function(e) {
            createGrid(e.originalTarget.value)
        })
    })
}