/*initialize grid
initialize cars

function drawScene:
    for each cell in grid:
        draw cell
    for each car in cars:
        draw car

function updateScene:
    for each car in cars:
        update car position
        handle collisions

function animationLoop:
    updateScene
    drawScene
    requestAnimationFrame(animationLoop)

animationLoop */ 

//maybe it has to be a 2d array of arrays, so it would be like 
//[[0,0], [0,1],
// [1,0], [1,1]]

let grid = [];
let rows = 4;
let cols = 4;

function initGrid(){
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j ++) {
            grid[i][j] = [i,j]
            
        }
    }
    console.log(grid)
}

initGrid()

function drawGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j ++) {
            ctx.fillStyle = "red"
            ctx.fillRect(i * 100, j * 100, 100, 100)
        }
    }
}

drawGrid()