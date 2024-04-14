document.addEventListener("DOMContentLoaded", function() {
  const board = document.querySelector(".board");
  const inputField = document.querySelector("input");
  const setSizeButton = document.querySelector(".setSize");
  const resetBtn = document.querySelector(".reset");
  const randomBtn = document.querySelector(".random");
  const whiteBtn = document.querySelector('.whiteBtn');
  const blackBtn = document.querySelector('.blackBtn');

  function createGrid(size) {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-item");
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#212121";
      });

      board.appendChild(square);
    }
  }

  createGrid(16);

  // Set Grid Size
  setSizeButton.addEventListener("click", (e) => {
    e.preventDefault();
    const input = parseInt(inputField.value);
    inputField.value = "";
    if (isNaN(input) || input < 2 || input > 100) {
      alert("Please enter a valid size between 2 and 100");
    } else {
      createGrid(input);
    }
  });

  // Reset the grid
  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const squares = document.querySelectorAll(".grid-item");
    squares.forEach((square) => {
      square.style.backgroundColor = "";
    });
  });

  // random color button
  randomBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const squares = document.querySelectorAll(".grid-item");
    for (let square of squares) {
      square.style.backgroundColor = "";
      square.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${r}, ${g}, ${b})`;
        square.style.backgroundColor = randomColor;
      });
    }
  });

  whiteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const squares = document.querySelectorAll(".grid-item");
    for (let square of squares) {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = '#fff';
      });
    }
  });

  blackBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const squares = document.querySelectorAll(".grid-item");
    for (let square of squares) {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = '#212121';
      });
    }
  });

});
