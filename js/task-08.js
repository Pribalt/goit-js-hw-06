const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onForsubmit);

function onForsubmit(evt) {
   evt.preventDefault();
   const formElements = evt.currentTarget.elements;

   const email = formElements.email.value;
   const password = formElements.password.value;

   if (email === '' || password === '') {
      alert('WARNING! All fields must be filled');
   } else if (email !== '' || password !== '') {
      formEl.reset();
   }

   const formData = {
      email,
      password,
   };

   console.log(formData);
}
