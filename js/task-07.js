const rangeInputEl = document.querySelector('#font-size-control');
const textInputEl = document.querySelector('#text');

rangeInputEl.addEventListener('input', onRangeChange);

function onRangeChange(e) {
   console.log(Number(e.currentTarget.value));
   textInputEl.style.fontSize = `${Number(e.currentTarget.value)}px`;
}
