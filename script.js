// console.log('Hello World!');
// let noOfSquares = 0;


const container = document.querySelector(".container");
// const boxes = document.querySelectorAll(".container > div");
// Random colour
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

function createTable(noOfSquares) {
    for (let i = 0; i < (noOfSquares ** 2); i++) {
        const createDiv = document.createElement('div');
        container.appendChild(createDiv);
        let d = 700 / noOfSquares;
        createDiv.style.width = `${d}px`;
        createDiv.style.height = `${d}px`;

        // boxes.forEach(box => {
        //     box.addEventListener('mouseover', (e) =>
        //         box.style.backgroundColor = 'black');
        // });

        // boxes.forEach(box => {
        //     box.addEventListener('mouseout', (e) =>
        //         box.style.backgroundColor = 'white');
        // });
        createDiv.addEventListener('mouseover', (e) =>
            createDiv.style.backgroundColor = '#' + randomColor);
        // createDiv.addEventListener('mouseout', (e) =>
        //     createDiv.style.backgroundColor = 'white');
    };

}

const button1 = document.querySelector
    ('#noOfSquares').addEventListener('click', function () {
        let noOfSquares = prompt("Please choose a number of squares");
        // const noOfSquares = 4;
        // alert(noOfSquares);
        if (noOfSquares > 100) {
            noOfSquares = 100 // Default the number to 100 if more than 100
        } else;
        createTable(noOfSquares);

    })


const button2 = document.querySelector('#reset').addEventListener('click', function () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
})
