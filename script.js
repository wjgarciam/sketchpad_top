const padContainer = document.querySelector("#container");
let size = 25
createGrid(size)

function createGrid(size) {
        for (let i = 0; i < (size*size); i++) {
        let columns = document.createElement("div")
        columns.classList.add("columns")
        columns.style.backgroundColor = "red"
        columns.style.width = (650/size) + "px"
        padContainer.appendChild(columns);
    }
}
