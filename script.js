function createSketchDivs(sideLength) {
	const sketchBoard = document.querySelector('#sketch-board');
	//console.log(sketchBoard.lastChild);
	while (sketchBoard.lastElementChild) {
		sketchBoard.removeChild(sketchBoard.lastElementChild);
	}

	for(let i = 0; i < sideLength; i++) {
		let row = document.createElement('div');
		row.setAttribute('class', 'row');
		for (let j = 0; j < sideLength; j++) {
			let pixel = document.createElement('div');
			pixel.setAttribute('class', 'pixel');
			row.appendChild(pixel);
		}
		sketchBoard.appendChild(row);
	}
}

function changeColor(e) {
	e.srcElement.classList.add("color");
}


createSketchDivs(40);

const pixels = document.getElementsByClassName('pixel');
console.log(pixels);
Array.from(pixels).forEach(function (pixel) {
	pixel.addEventListener('mouseover', changeColor);
	pixel.mouseover = changeColor;
});