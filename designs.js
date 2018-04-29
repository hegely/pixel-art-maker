const tbl = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const colorPicker = document.querySelector('#colorPicker');
let inputHeight = document.querySelector('#inputHeight');
let inputWidth = document.querySelector('#inputWidth');

sizePicker.addEventListener('submit', function (e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {

    tbl.innerHTML = '';
    let height = inputHeight.value;
    let width = inputWidth.value;

   for (let i = 0; i < height; i++) {
        let row = tbl.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', function() {
				cell.style.backgroundColor = colorPicker.value;
			});			
		}      
    }
}