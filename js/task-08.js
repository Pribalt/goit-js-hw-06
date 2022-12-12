const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onForsubmit);

function onForsubmit(e) {
   e.preventDefault();
   const formElements = e.currentTarget.elements;

   const email = formElements.email.value;
   const password = formElements.password.value;

   if (email === '' || password === '') {
      alert('WARNING! All fields must be filled');
      return false;
   } else if (email !== '' || password !== '') {
      formEl.reset();
   }

   const formData = {
      email,
      password,
   };

   console.log(formData);
}
