document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.querySelector('.news-more-btn');
  const hiddenWrapper = document.querySelector('.news__wrapper--hidden');
  const showMoreIcon = document.querySelector('.news__show-more-icon');

  if (!showMoreBtn || !hiddenWrapper) return;

  let isOpen = false;

  const showHidden = () => {
    hiddenWrapper.style.display = 'none';
    hiddenWrapper.classList.remove('news__wrapper--hidden');
    hiddenWrapper.classList.add('news__wrapper--visible');
    hiddenWrapper.style.removeProperty('display');
  };

  // Плавно скрываем
  const hideHidden = () => {
    hiddenWrapper.classList.remove('news__wrapper--visible');
    hiddenWrapper.classList.add('news__wrapper--hiding');

    const onAnimationEnd = (e) => {
      if (e.animationName !== 'newsFadeOut') return;
      hiddenWrapper.classList.remove('news__wrapper--hiding');
      hiddenWrapper.classList.add('news__wrapper--hidden');
      hiddenWrapper.style.display = 'none';
      hiddenWrapper.removeEventListener('animationend', onAnimationEnd);
    };

    hiddenWrapper.addEventListener('animationend', onAnimationEnd);
  };

  showMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isOpen) {
      showHidden();
      showMoreBtn.textContent = 'Скрыть';
      if (showMoreIcon) showMoreIcon.style.transform = 'rotate(180deg)';
      isOpen = true;
    } else {
      hideHidden();
      showMoreBtn.textContent = 'Показать еще';
      if (showMoreIcon) showMoreIcon.style.transform = 'rotate(0deg)';
      isOpen = false;
    }
  });
});
