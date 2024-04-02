const padContainer = document.querySelector("#container");
let size = 25
createGrid(size)
function createGrid(size) {
        for (let i = 0; i < (size*size); i++) {
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("gridSquare")
        gridSquare.style.backgroundColor = "red"
        gridSquare.style.width = (650/size) + "px"
        padContainer.appendChild(gridSquare);
    }
}
