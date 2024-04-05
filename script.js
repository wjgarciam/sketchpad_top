const padContainer = document.querySelector("#container");
let size = 16
createGrid(size)
function createGrid(size) {
        for (let i = 0; i < (size*size); i++) {
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("gridSquare")
        gridSquare.style.width = (650/size) + "px"
        padContainer.appendChild(gridSquare);
    }
}
const gridSq = padContainer.querySelectorAll(".gridSquare")
for (const square of gridSq) {
    square.addEventListener("mouseover", mOver);}
    
function mOver () {
    event.target.classList.add("over")
}