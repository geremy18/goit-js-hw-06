const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) =>{
  const newName =
    event.currentTarget.value.trim() != ""
      ? event.currentTarget.value
      : "Anonymous";
    nameOutput.textContent = newName;
})
