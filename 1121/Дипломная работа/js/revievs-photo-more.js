const openMorePhotoBtns = document.querySelectorAll('.reviews__more-photo');

openMorePhotoBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const reviewMain = btn.closest('.reviews__main');
    const hiddenPhotos = reviewMain.querySelector('.reviews__photos--hidden');

    if (!hiddenPhotos) return;

    hiddenPhotos.classList.toggle('filter-chips-link--visible');

    if (hiddenPhotos.classList.contains('filter-chips-link--visible')) {
      btn.textContent = 'Скрыть фото';
    } else {
      btn.textContent = 'Смотреть все фото';
    }
  });
});
