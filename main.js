function blackColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'black';
        }
    }
}

function redColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'red';
        }
    }
}

function yellowColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'yellow';
        }
    }
}

function blueColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'blue';
        }
    }
}

function greenColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'green';
        }
    }
}

function orangeColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'orange';
        }
    }
}

function purpleColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            this.style.backgroundColor = 'purple';
        }
    }
}

function randomColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function (e) {
            const rndCol = '#' + Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = rndCol;
        }
    }
}

function eraseColour() {
    let squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "";
    }
}

function squareGrid(x, y) {
    let container1 = document.getElementById('container1');
    container1.style.setProperty('--grid-rows', x);
    container1.style.setProperty('--grid-cols', y);
    for (let i = 0; i < x * y; i++) {
        let grid = container1.appendChild(document.createElement("div"));
        grid.className = "square";
        blackColour();
    }
}
squareGrid(16, 16);

function changeGrid() {
    let x = prompt("***Note: Larger numbers take longer to process.\n\nHow many squares per side (1 - 100): ");
    if (isNaN(x)) {
        alert("That's not a valid entry. Try again");
    } else {
        let container1 = document.getElementById('container1');
        let container2 = document.getElementById('container2');
        let squares = document.getElementsByClassName('square');
        for (let y = 0; y < x * x; y++) {
            container1.remove();
            let container3 = document.createElement('div')
            container3.id = "container2";
            container2.style.display = 'grid';
            container2.style.height = '514px';
            container2.style.width = '514px';
            container2.style.margin = '0 auto';
            container2.style.border = '1px solid gray';
            container2.style.marginTop = '-11%';
            container2.style.gridTemplateColumns = 'repeat(var(--grid-cols), 1fr)';
            container1.style.gridTemplateColumns = 'repeat(var(--grid-rows), 1fr)';
            container2.style.setProperty('--grid-rows', x);
            container2.style.setProperty('--grid-cols', x);
            let grid = container2.appendChild(document.createElement("div"));
            grid.className = "square";
            blackColour();
        }
    }
}

let x = document.querySelectorAll('button');
x.forEach(button => {
    button.addEventListener('click', () => {
        let selection = button.innerHTML;
        switch (selection) {
            case "CLEAR GRID":
                eraseColour();
                break;
            case "RANDOM COLOURS":
                randomColour();
                break;
            case "DEFAULT COLOUR":
                blackColour();
                break;
            case "RED":
                redColour();
                break;
            case "YELLOW":
                yellowColour();
                break;
            case "BLUE":
                blueColour();
                break;
            case "GREEN":
                greenColour();
                break;
            case "ORANGE":
                orangeColour();
                break;
            case "PURPLE":
                purpleColour();
                break;
            case "CHANGE GRID SIZE":
                changeGrid();
                break
        }
    });
});