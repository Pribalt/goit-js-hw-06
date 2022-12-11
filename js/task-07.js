const rangeInputEl = document.querySelector('#font-size-control');
const textInputEl = document.querySelector('#text');

rangeInputEl.addEventListener('change', onRangeChange);

function onRangeChange(evt) {
   console.log(Number(evt.currentTarget.value));
   textInputEl.style.fontSize = `${Number(evt.currentTarget.value)}px`;
}
