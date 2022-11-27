function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
});
