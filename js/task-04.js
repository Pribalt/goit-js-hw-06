const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueCounterEl = document.querySelector('#value');
let counterValue = 0;

incrementBtnEl.addEventListener('click', onAddValue);
decrementBtnEl.addEventListener('click', onMinusValue);

function onAddValue(e) {
   counterValue += 1;
   valueCounterEl.textContent = counterValue;
}

function onMinusValue(e) {
   counterValue -= 1;
   valueCounterEl.textContent = counterValue;
}
