const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsHtml = document.querySelector('#ingredients');

const listIngredients = document.createDocumentFragment();

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.insertAdjacentHTML('afterbegin', ingredients[i]);
  listIngredients.append(li);
}

ingredientsHtml.append(listIngredients);
