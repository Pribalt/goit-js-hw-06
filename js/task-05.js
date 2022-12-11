const textInputEl = document.querySelector('#name-input');
const titleOutputEl = document.querySelector('#name-output');

const onTargetInput = evt => {
   titleOutputEl.textContent = evt.currentTarget.value;

   if (!evt.currentTarget.value) {
      titleOutputEl.textContent = 'Anonymous';
   }
};

textInputEl.addEventListener('input', onTargetInput);
