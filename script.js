function createSketchDivs(sideLength) {
	const sketchBoard = document.querySelector('#sketch-board');

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

createSketchDivs(16);