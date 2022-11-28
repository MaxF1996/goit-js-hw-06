function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorDisplay = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', () => {
  const generatedColor = getRandomHexColor();
  colorDisplay.textContent = generatedColor;
  body.style.backgroundColor = generatedColor;
});
