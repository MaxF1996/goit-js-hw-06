const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  if (formData.email === '' || formData.password === '') {
    alert('Пусті поля');
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
});
