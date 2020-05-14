// Select color input
let colorInput = document.getElementById('colorPicker');
// Select size input
let sizeInput = document.getElementById('sizePicker');
//Select Design canvas
let canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener('click', function(event){
  event.preventDefault();

  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

  //If there is a previous canvas, remove it
  while(canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
  }

  //Call makeGrid()
  makeGrid(height, width);
  //console.log('height: ' + height + ' and width: ' + width);
});

function makeGrid(height, width) {
  //for loop to create rows
  for (let i = 1; i<= height; i++){
    let row = document.createElement('tr');
    canvas.appendChild(row);
    //for loop to create cells
    for (let j = 1; j<= width; j++){
      let cell = document.createElement('td');
      row.appendChild(cell);

      //Fill cell with the value of colorInput using an event listener
      cell.addEventListener('click', function(){
        this.style.backgroundColor = colorInput.value;
      })
    }
  }
}
