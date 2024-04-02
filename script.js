const padContainer = document.querySelector("#container");
let size = prompt("Please select a size for the grid")
createGrid(size)
function createGrid(size) {
    for (let i = 0; i < (size); i++) {
        let columns = document.createElement("div")
        columns.classList.add("columns")
        columns.textContent = "Hello"
        columns.style.color = "blue"
        padContainer.appendChild(columns);
    }
    
    for (let i = 0; i < (size); i++) {
        let rows = document.createElement("div")
        rows.classList.add("rows")
        rows.textContent = "Hello"
        rows.style.color = "red"
        padContainer.appendChild(rows);
    }
}
