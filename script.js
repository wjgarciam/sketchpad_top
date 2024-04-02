const padContainer = document.querySelector("#container");
const div = document.createElement("div")
div.textContent = "Hello"
div.style.color = "blue"
padContainer.appendChild(div);

let size = prompt("Please select a size for the grid")

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