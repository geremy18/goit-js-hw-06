const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    return alert('Todos los espacios deben ser rellenados');
  }  
  
    const data = {
      email,
      password
    };
    console.log(data);

    event.currentTarget.reset();
});
