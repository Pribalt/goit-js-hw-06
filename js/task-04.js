const counters = document.querySelectorAll('#counter button');
const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const valueCounter = document.querySelector('#value');
let counterValue = 0;

counters.forEach(el => {
   el.addEventListener('click', e => {
      if (el === removeListenerBtn) {
         counterValue -= 1;
      } else if (el === addListenerBtn) {
         counterValue += 1;
      }
      valueCounter.textContent = counterValue;
   });
});
