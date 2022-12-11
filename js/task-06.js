const inputEl = document.querySelector('#validation-input');
const numberOfCharacters = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
   if (evt.currentTarget.value.length === Number(numberOfCharacters)) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
   } else {
      inputEl.classList.add('invalid');
   }
}
