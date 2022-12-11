const countersEl = document.querySelectorAll('#counter button');
const addListenerBtnEl = document.querySelector('[data-action="increment"]');
const removeListenerBtnEl = document.querySelector('[data-action="decrement"]');
const valueCounterEl = document.querySelector('#value');
let counterValue = 0;

countersEl.forEach(el => {
   el.addEventListener('click', e => {
      if (el === removeListenerBtnEl) {
         counterValue -= 1;
      } else if (el === addListenerBtnEl) {
         counterValue += 1;
      }
      valueCounterEl.textContent = counterValue;
   });
});
