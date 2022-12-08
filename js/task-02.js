const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItemEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
   const itemEl = document.createElement('li');
   itemEl.textContent = `${ingredient}`;
   itemEl.classList.add('item');
   return itemEl;
});
console.log(elements);
ingredientsItemEl.append(...elements);
