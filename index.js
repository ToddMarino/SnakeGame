const mainGrid = document.querySelector('.grid');
const startBtn = document.querySelector('#start');
const scoreBoard = document.querySelector('#score');
const squares = [];
const currentSnake = [2,1,0];
let direction = 1;
let width = 10;


function createGrid() {

    for(let i = 0; i<100; i++) {
        const square = document.createElement('div')
        squares.push(square)
        mainGrid.appendChild(square)
        square.classList.add('square')
    }
}


    createGrid()
    currentSnake.forEach(index => squares[index].classList.add('snake'))


function move() {
    // onkeypress remove last element of currentSnake
    const tail = currentSnake.pop()
    // remove styling on element
    squares[tail].classList.remove('snake')
    // add square in direction on board
    currentSnake.unshift(currentSnake[0] + direction)
    // add styling to new square
    squares[currentSnake[0]].classList.add('snake')
}
move()

// let timerId = setInterval(move, 1000)

function controls(event) {
    switch (event.key) {
        case "Down":
        case "S":
        case "ArrowDown":
            console.log('move down')
            direction =+ width
        break;
        case "Up":
        case "W":
        case "ArrowUp":
            console.log('move up')
            direction =-width
        break;
        case "Left":
        case "A":
        case "ArrowLeft":
            console.log('move left')
            direction = -1
        break;
        case "Right":
        case "D":
        case "ArrowRight":
            console.log('move right')
            direction = 1
        break;
        default:
            return;
    }
}

document.addEventListener('keypress', controls)



