document.addEventListener('DOMContentLoaded', () => {
  //  все нужные элементы
  const basketBtn = document.querySelector('.js-basket-btn');
  const cartPanel = document.querySelector('.js-cart-panel');
  const cartOverlay = document.querySelector('.js-cart-overlay');
  const cartClose = document.querySelector('.js-cart-close');

  if (!basketBtn || !cartPanel || !cartOverlay || !cartClose) return;
  const openCart = () => {
    cartPanel.classList.add('is-open');
    cartOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // блокируем скролл
  };
  // Закрытие корзины
  const closeCart = () => {
    cartPanel.classList.remove('is-open');
    cartOverlay.classList.remove('is-open');
    document.body.style.overflow = ''; // возвращаем скролл
  };
  // Слушатели
  basketBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  //  Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartPanel.classList.contains('is-open')) {
      closeCart();
    }
  });
});
