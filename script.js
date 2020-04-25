const sketchBoard = document.querySelector('#sketch-board');
const resetBoard = document.querySelector('#removeDrawing');
const blackMode = document.querySelector('#blackMode');
const colorMode = document.querySelector('#colorMode');
const changeNumberOfPixels = document.querySelector('#changeNumberOfPixels');

let boardSize = 10;
let gameModeBlack = true;
let currentColor = 0; 

createSketchDivs(boardSize);

resetBoard.addEventListener('click', () => {
	remove(); 
	createSketchDivs(boardSize);
});

blackMode.addEventListener('click', () => {
	if (gameModeBlack) {
		return; 
	};
	remove(); 
	gameModeBlack = true; 
	createSketchDivs(boardSize);
});

colorMode.addEventListener('click', () => {
	if (!gameModeBlack) {
		return; 
	};
	remove(); 
	gameModeBlack = false; 
	createSketchDivs(boardSize);
});

changeNumberOfPixels.addEventListener('click', () => {
	const newSize = parseInt(prompt("Enter a whole number between 1 and 256."))
	if (newSize < 1 || newSize > 256) {
		return;
	}
	boardSize = newSize;
	remove(); 
	createSketchDivs(boardSize);
})



// Function definitions 
function createSketchDivs(sideLength) {
	const sketchBoard = document.querySelector('#sketch-board');
	for(let i = 0; i < sideLength; i++) {
		let row = document.createElement('div');
		row.setAttribute('class', 'row');
		for (let j = 0; j < sideLength; j++) {
			let pixel = document.createElement('div');
			pixel.setAttribute('class', 'pixel');
			pixel.addEventListener('mouseover', changeToBlack);
			row.appendChild(pixel);
		}
		sketchBoard.appendChild(row);
	}
}

function changeToBlack(e) {
	e.srcElement.style.backgroundColor = "black";
}

function remove() {
	const board = document.querySelector('#sketch-board');
	const rows = document.querySelectorAll("div.row");
	rows.forEach((row) => {
		board.removeChild(row);
	})
}

function changePixels() {
	const sideLength = parseInt(prompt('Please enter a value between 1 and 200 for the number of pixels per row.'));
	remove(); 
	createSketchDivs();
}