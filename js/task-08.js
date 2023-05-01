const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('Todos los espacios deben ser rellenados');
  } else {
    const data = {
      email,
      password
    };
    console.log(data);

    form.reset();
  }
});
