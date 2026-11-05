const viewport = document.querySelector('.review-viewport');
const slider = EmblaCarousel(viewport, {
  loop: true,
  align: 'center',
  duration: 32,
  breakpoints: { '(prefers-reduced-motion: reduce)': { duration: 0 } },
});
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let timer,
  holding = false;
function restart() {
  clearInterval(timer);
  if (
    !holding &&
    !document.hidden &&
    !motion.matches &&
    !viewport.matches(':focus-visible')
  )
    timer = setInterval(() => slider.scrollNext(), 6500);
}
function select() {
  const index = slider.selectedScrollSnap();
  for (const selector of ['.review-slide', '.review-dots i'])
    document
      .querySelectorAll(selector)
      .forEach((el, i) => (el.dataset.current = String(i === index)));
  restart();
}
slider
  .on('select', select)
  .on('reInit', select)
  .on('pointerDown', () => {
    holding = true;
    restart();
  })
  .on('pointerUp', () => {
    holding = false;
    restart();
  });
viewport.addEventListener('keydown', (e) => {
  if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
    e.key === 'ArrowLeft' ? slider.scrollPrev() : slider.scrollNext();
  }
});
for (const event of ['focus', 'blur'])
  viewport.addEventListener(event, restart);
motion.addEventListener('change', restart);
document.addEventListener('visibilitychange', restart);
select();

/* МОДАЛЬНОЕ ОКНО  */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('reviewModal');
  const openBtn = document.getElementById('openReview');
  const closeBtn = modal.querySelector('.review-close');
  const form = document.getElementById('reviewForm');
  const formContent = document.getElementById('reviewFormContent');
  const success = document.getElementById('reviewSuccess');
  const doneBtn = document.getElementById('reviewDone');

  let lastFocused = null;

  // Создаём сообщение для тех, кто уже оставил отзыв
  const already = document.createElement('div');
  already.className = 'review-already';
  already.hidden = true;
  already.innerHTML = `
    <div class="review-already-icon">♡</div>
    <h3>Вы уже оставили отзыв!</h3>
    <p>
      Спасибо, что поделились своими впечатлениями.
      Ваш отзыв уже сохранён, поэтому повторно
      отправить его нельзя.
    </p>
    <button class="btn rust" type="button" id="reviewAlreadyDone">
      Понятно
    </button>
  `;

  modal.querySelector('.review-modal-card').appendChild(already);

  function hasReviewed() {
    return localStorage.getItem('hasWrittenReview') === 'true';
  }

  function openModal() {
    lastFocused = document.activeElement;

    form.reset();

    const reviewed = hasReviewed();

    formContent.hidden = reviewed;
    success.hidden = true;
    already.hidden = !reviewed;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (reviewed) {
      already.querySelector('button').focus();
    } else {
      form.elements.reviewName.focus();
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocused?.focus();
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  doneBtn.addEventListener('click', closeModal);

  already.querySelector('button').addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('active')) return;

    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    if (event.key === 'Tab') {
      const focusable = [
        ...modal.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled])',
        ),
      ].filter((el) => el.getClientRects().length > 0);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Запрещаем повторную отправку
    if (hasReviewed()) {
      formContent.hidden = true;
      success.hidden = true;
      already.hidden = false;
      already.querySelector('button').focus();
      return;
    }

    const name = form.elements.reviewName.value.trim();
    const message = form.elements.reviewText.value.trim();

    if (!name || !message) {
      form.reportValidity();
      return;
    }

    try {
      const reviews = JSON.parse(localStorage.getItem('siteReviews') || '[]');

      reviews.push({
        name,
        message,
        date: new Date().toISOString(),
      });

      localStorage.setItem('siteReviews', JSON.stringify(reviews));

      // Запоминаем, что отзыв уже оставлен
      localStorage.setItem('hasWrittenReview', 'true');
    } catch (error) {
      console.error('Ошибка сохранения отзыва:', error);
      alert('Не удалось сохранить отзыв. Попробуйте ещё раз.');
      return;
    }

    formContent.hidden = true;
    already.hidden = true;
    success.hidden = false;
    closeBtn.focus();
  });
});
