const padContainer = document.querySelector("#container");
const btnContainer = document.createElement("button")
btnContainer.textContent = "Click me to select a grid size"
document.body.appendChild(btnContainer)
let size = 16
createGrid(size)

function createGrid(size) {
        padContainer.textContent = ""
        for (let i = 0; i < (size*size); i++) {
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("gridSquare")
        gridSquare.style.width = (650/size) + "px"
        padContainer.appendChild(gridSquare); }
    
        const gridSq = padContainer.querySelectorAll(".gridSquare")
            for (const square of gridSq) {
            square.addEventListener("mouseover", mOver);}
};
  
function mOver () {
    event.target.classList.add("over")
};

btnContainer.addEventListener("click", () => {
    let size = prompt("Enter a whole number between 2 and 100").trim()
    if (size > 100 || isNaN (size) || size == "" || size == null ){
        alert("Please enter a whole number between 2 and 100")
    } else {
        createGrid(size)
    }
    
    
})