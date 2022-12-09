const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItemEl = document.querySelector('#ingredients');

const makeIngredientsInItem = ingredients => {
   return ingredients.map(ingredient => {
      const itemEl = document.createElement('li');
      itemEl.textContent = `${ingredient}`;
      itemEl.classList.add('item');
      return itemEl;
   });
};
const elements = makeIngredientsInItem(ingredients);
ingredientsItemEl.append(...elements);
