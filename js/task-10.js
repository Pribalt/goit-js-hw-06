const numberInputEl = document.querySelector('input[type="number"]');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', onButtonClickCreateBoxes);
buttonDestroyEl.addEventListener('click', onButtonClickDestroyBoxes);

function onButtonClickCreateBoxes() {
   createBoxes(numberInputEl.value);
}

function createBoxes(amount) {
   for (let i = 0; i < amount; i += 1) {
      const divInBoxesEl = document.createElement('div');
      const size = 30 + 10 * i + 'px';
      divInBoxesEl.style.height = size;
      divInBoxesEl.style.width = size;
      divInBoxesEl.style.backgroundColor = `${getRandomHexColor()}`;
      divBoxesEl.append(divInBoxesEl);
   }
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function onButtonClickDestroyBoxes() {
   destroyBoxes();
}

function destroyBoxes() {
   divBoxesEl.innerHTML = '';
}
