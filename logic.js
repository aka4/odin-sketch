const container = document.getElementById("container");
let gridSize = 16;

setupGrid(gridSize);

function createGridItems (grSize) {
    for(let i=0; i < grSize*grSize; i++) {
        const divchild = document.createElement("div");
        container.appendChild(divchild).className = "grid-item";
        divchild.style.setProperty("background-color", "white");
    }
}

function deleteGridItems () {
    let items = document.querySelectorAll(".grid-item");
    items.forEach(item => item.parentNode.removeChild(item));
}

const button = document.getElementById("gridsize");
button.addEventListener("click", function() {
    gridSize = prompt("Size for grid");
    while(gridSize > 100) {
        gridSize = prompt("Too big! Try again");
    }

    setupGrid(gridSize);
} );

function setColor(color) {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseover", (event) => {
    event.target.style.setProperty("background-color", color);
    }))
}
function setupGrid (grSize) {
    container.style.setProperty("--grid-column", grSize);
    container.style.setProperty("--grid-row", grSize);

    deleteGridItems();    
    createGridItems(grSize);
    setColor("black");

}