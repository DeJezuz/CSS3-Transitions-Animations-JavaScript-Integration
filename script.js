// Part 2: Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Part 2: Scope demonstration
let globalColor = 'blue';

function changeColor(newColor) {
  let localColor = newColor;
  return localColor;
}

// Part 3: Trigger animation with JS
document.getElementById('animateBtn').addEventListener('click', () => {
  const box = document.getElementById('animatedBox');
  box.classList.toggle('animate');
});

// Part 3: Card flip function
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}
