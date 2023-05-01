
const counter = document.querySelector('#counter');
const valueSpan = counter.querySelector('#value');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});
