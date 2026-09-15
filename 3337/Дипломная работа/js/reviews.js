const modal = document.getElementById('modal');
const openBtn = document.getElementById('reviewsOpenModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
  modal.classList.add('modal--open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});

/* закрытие по клику на оверлей */
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('modal--open');
});

/* закрытие по Esc */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('modal--open');
});
