document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product__card');

  productCards.forEach((card) => {
    const minusBtn = card.querySelector('.js-btn-minus');
    const plusBtn = card.querySelector('.js-btn-plus');
    const counterValue = card.querySelector('.js-counter-value');

    if (!minusBtn || !plusBtn || !counterValue) return;

    const updateMinusButtonState = (currentValue) => {
      if (currentValue <= 1) {
        minusBtn.disabled = true;
        minusBtn.style.opacity = '0.5';
        minusBtn.style.cursor = 'not-allowed';
      } else {
        minusBtn.disabled = false;
        minusBtn.style.opacity = '1';
        minusBtn.style.cursor = 'pointer';
      }
    };

    updateMinusButtonState(parseInt(counterValue.textContent));

    plusBtn.addEventListener('click', () => {
      let currentValue = parseInt(counterValue.textContent);
      currentValue += 1;
      counterValue.textContent = currentValue;
      updateMinusButtonState(currentValue);
    });

    minusBtn.addEventListener('click', () => {
      let currentValue = parseInt(counterValue.textContent);
      if (currentValue > 1) {
        currentValue -= 1;
        counterValue.textContent = currentValue;
        updateMinusButtonState(currentValue);
      }
    });
  });
});
