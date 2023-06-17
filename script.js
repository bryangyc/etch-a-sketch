// console.log('Hello World!');
// let noOfSquares = 0;


const container = document.querySelector(".container");

function createTable(noOfSquares) {
    for (let i = 0; i < (noOfSquares ** 2); i++) {
        const createDiv = document.createElement('div');
        container.appendChild(createDiv);
        let d = container.offsetWidth / noOfSquares;
        createDiv.style.width = `${d}px`;
        createDiv.style.height = `${d}px`;
        createDiv.style.backgroundColor = '#ffff';


        createDiv.addEventListener('mouseover', (e) => {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            createDiv.style.backgroundColor = '#' + randomColor;
        });
    };
};


const button1 = document.querySelector
    ('#noOfSquares').addEventListener('click', function () {
        let noOfSquares = prompt("Please choose a number of squares");
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
