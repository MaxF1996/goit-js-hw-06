'use strict'

let counterValue = 0;

const minusButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const counterHtml = document.querySelector('#value');

minusButton.addEventListener('click', () => {
    counterValue -= 1;
    counterHtml.textContent = counterValue;
    return counterValue;
});
plusButton.addEventListener('click', () => {
    counterValue += 1;
    counterHtml.textContent = counterValue;
    return counterValue;
});