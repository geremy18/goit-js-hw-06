
const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const expectedLength = input.getAttribute('data-length');
  const actualLength = input.value.length;

  if (actualLength === parseInt(expectedLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
