let symbol = "+";
let gridSize = 10;

let grid = "";
for (let outer = 0; outer < gridSize; outer++) {
    grid += outer % 2 == 0 ? " " : "";
    for (let inner = 0; inner < gridSize; inner++) {
        grid += inner % 2 == 0 ? symbol : " ";
    }
    grid += "\n";
}
console.log(grid);
