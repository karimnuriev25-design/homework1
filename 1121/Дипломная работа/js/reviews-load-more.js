document.addEventListener('DOMContentLoaded', () => {
  // Кнопка "Показать еще" / "Свернуть".
  const loadMoreBtn = document.getElementById('loadMoreReviews');

  // Все скрываемые отзывы (Анна, Михаил, Екатерина).
  const hiddenReviews = document.querySelectorAll('.reviews__wrapper--hidden');

  // Если кнопки нет — выходим, чтобы не ловить null.
  if (!loadMoreBtn) return;

  // Флаг состояния: сейчас отзывы скрыты.
  let isExpanded = false;

  // Ссылка внутри кнопки — её текст будем менять.
  const loadMoreText = loadMoreBtn.querySelector('.load-more-btn');

  // Обработчик клика.
  loadMoreBtn.addEventListener('click', (e) => {
    // Отменяем переход по <a href="#">, чтобы страница не прыгала наверх.
    e.preventDefault();

    // Переключаем флаг.
    isExpanded = !isExpanded;

    // Проходим по каждому скрытому отзыву.
    hiddenReviews.forEach((review) => {
      // toggle с вторым аргументом:
      // если isExpanded === true — класс снимается (отзыв виден),
      // если false — класс добавляется (отзыв скрыт).
      review.classList.toggle('reviews__wrapper--hidden', !isExpanded);
    });

    // Меняем текст кнопки в зависимости от состояния.
    if (loadMoreText) {
      loadMoreText.textContent = isExpanded ? 'Свернуть' : 'Показать еще';
    }
  });
});
