const rangeInput = document.querySelector('#font-size-control');
const fontExample = document.querySelector('#text');

rangeInput.addEventListener('input', () => {
    fontExample.style.fontSize = `${rangeInput.value}px`;
});