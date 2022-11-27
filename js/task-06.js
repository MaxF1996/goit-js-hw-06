const validationInput = document.querySelector('#validation-input');
const validLength = +validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length === validLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
    console.log(validationInput.value.length);
    console.log(validLength);
});