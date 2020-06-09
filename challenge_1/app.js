console.log('Hello!');
var currentPlayer = 'X';
var playArray = [];

// Set box as the full collection of boxes
let box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
  playArray.push('-');
}

var move = e => {
  if (currentPlayer === 'X') {
    e.target.innerHTML  = 'X';
    e.target.removeEventListener('click', move);
    currentPlayer = 'O';
    for (let i = 0; i < playArray.length; i++) {
      if (box[i].innerHTML !== playArray[i]) {
        playArray[i] = box[i].innerHTML;
      }
    }
  } else {
    e.target.innerHTML = 'O';
    e.target.removeEventListener('click', move);
    currentPlayer = 'X';
    for (let i = 0; i < playArray.length; i++) {
      if (box[i].innerHTML !== playArray[i]) {
        playArray[i] = box[i].innerHTML;
      }
    }
  }
  console.log(playArray);
};

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', move);
}