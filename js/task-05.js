const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const newName = nameInput.value.trim() !== '' ? nameInput.value : 'Anonymous';
  nameOutput.textContent = newName;
});
