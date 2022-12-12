const buttonChangeColorEl = document.querySelector('.change-color');
const backgroundColorEl = document.querySelector('.color');
const body = document.body;

buttonChangeColorEl.addEventListener('click', onTargetButton);

function onTargetButton(e) {
   backgroundColorEl.textContent = getRandomHexColor();
   body.style.backgroundColor = getRandomHexColor();
   console.log(backgroundColorEl.textContent);
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
