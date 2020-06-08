console.log('Hello!');

var currentPlayer = 'X';

var move = e => {
  // e.preventDefault();
  if (currentPlayer === 'X') {
    e.target.innerHTML  = 'X';
    currentPlayer = 'O';
  } else {
    e.target.innerHTML = 'O';
    currentPlayer = 'X';
  }
};

let box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click', move);
}

