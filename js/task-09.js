const buttonChangeColorEl = document.querySelector('.change-color');
const backgroundColorEl = document.querySelector('.color');
const body = document.body;

buttonChangeColorEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
   return (body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`);
}
