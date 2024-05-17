function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomColorBtn = document.querySelector('.change-color');
const randomColorText = document.querySelector('.color');

randomColorBtn.addEventListener('click', addColor);

function addColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  randomColorText.textContent = document.body.style.backgroundColor;
}

