'use strict';

const items = document.querySelectorAll('.item');
const numberOfItems = items.length;

console.log('Number of categories:', numberOfItems);

for (const item of items) {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements: ', item.querySelectorAll('li').length);
}
