// console.log('Hello World!');
// let noOfSquares = 0;

const button = document.querySelector
    ('#button').addEventListener('click', function () {
        const noOfSquares = prompt("Please choose a number of squares");
        // const noOfSquares = 4;
        // alert(noOfSquares);
        createTable(noOfSquares);
    })

const container = document.querySelector(".container");

function createTable(noOfSquares) {
    for (let i = 0; i < (noOfSquares ** 2); i++) {
        const createDiv = document.createElement('div');
        container.appendChild(createDiv);
        let width = noOfSquares * 25;
        container.style.width = `${width}px`;
    }
}



const boxes = document.querySelectorAll(".container > div");

boxes.forEach(box => {
    box.addEventListener('mouseover', (e) =>
        box.style.backgroundColor = 'black');
});

boxes.forEach(box => {
    box.addEventListener('mouseout', (e) =>
        box.style.backgroundColor = 'white');
});

