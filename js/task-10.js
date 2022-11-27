function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

const createBoxes = amount => {
  if (boxes.firstChild) {
    destroyBoxes();
  }

  amount = +document.querySelector('#controls >[type="number"]').value;

  for (let i = 1, size = 30; i <= amount; i += 1, size += 10) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
};

const destroyBoxes = () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.lastChild);
  }
};

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
