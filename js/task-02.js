const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItemEl = document.querySelector('#ingredients');

const makeIngredientsInItem = ingredients => {
   return ingredients.map(el => {
      const itemEl = document.createElement('li');
      itemEl.textContent = `${el}`;
      itemEl.classList.add('item');
      return itemEl;
   });
};
const elements = makeIngredientsInItem(ingredients);
ingredientsItemEl.append(...elements);
