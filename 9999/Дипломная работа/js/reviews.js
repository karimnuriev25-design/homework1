const modal = document.getElementById('modal');
const openButton = document.getElementById('reviewsOpenModal');
const closeBtn = document.getElementById('closeModal');
const body = document.body;
const sendModalButton = document.getElementById('sendModalButton');
const modalInput = document.querySelector('.modal__input');
const toast = document.querySelector('.toast');

openButton.addEventListener('click', () => {
  modal.classList.add('modal--open');
  body.classList.add('active');
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('modal--open');
  body.classList.remove('active');
}

sendModalButton.addEventListener('click', () => {
  if (modalInput.value.trim() === '') {
    return;
  }

  toast.classList.add('show--active');

  setTimeout(() => {
    toast.classList.remove('show--active');
  }, 2000);
  modalInput.value = '';
});
