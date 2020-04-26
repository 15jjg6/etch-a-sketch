const sketchBoard = document.querySelector('#sketch-board');
const resetBoard = document.querySelector('#removeDrawing');
const blackMode = document.querySelector('#blackMode');
const colorMode = document.querySelector('#colorMode');
const changeNumberOfPixels = document.querySelector('#changeNumberOfPixels');

let boardSize = 10;
let gameModeShade = true;
let currentColor = 0; 

createSketchDivs(boardSize);

resetBoard.addEventListener('click', () => {
	remove(); 
	createSketchDivs(boardSize);
});

blackMode.addEventListener('click', () => {
	if (gameModeShade) {
		return; 
	};
	remove(); 
	gameModeShade = true; 
	createSketchDivs(boardSize);
});

colorMode.addEventListener('click', () => {
	if (!gameModeShade) {
		return; 
	};
	remove(); 
	gameModeShade = false; 
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
			if (gameModeShade) {
				pixel.addEventListener('mouseover', sketch);
			} else {
				pixel.addEventListener('mouseover', changeToColor);
			}
			row.appendChild(pixel);
		}
		sketchBoard.appendChild(row);
	}
}

function sketch(e) {
	const currentColor = e.srcElement.style.backgroundColor;
	if (!currentColor) {
		e.srcElement.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
		return;
	} else if (currentColor.slice(0, 4) !== 'rgba'){
		return;
	}

	let alpha = getTransparency(currentColor)
	if (alpha === 1) { 
		return;
	}

	const newTransparency = alpha + 0.1;
	e.srcElement.style.backgroundColor = "rgba(0, 0, 0, " + newTransparency + ")";
}

function getTransparency(rgbaString) { //want 14 15 16
	return parseFloat(rgbaString.slice(14, 17));
}

function changeToColor(e) {
	e.srcElement.style.backgroundColor = "hsl(" + currentColor + ", 80%, 50%)";
	currentColor = (currentColor + 15) % 360; 
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