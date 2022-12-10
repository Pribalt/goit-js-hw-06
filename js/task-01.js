const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(el => {
   const firstItemEl = el.firstElementChild.textContent;
   const lastItemEl = el.lastElementChild.children.length;
   console.log(`Category: ${firstItemEl}`);
   console.log(`Elements: ${lastItemEl}`);
});
