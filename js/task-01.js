const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(function (item) {
   const firstItemEl = item.firstElementChild.textContent;
   const lastItemEl = item.lastElementChild.children.length;
   console.log(`Category: ${firstItemEl}`);
   console.log(`Elements: ${lastItemEl}`);
});
