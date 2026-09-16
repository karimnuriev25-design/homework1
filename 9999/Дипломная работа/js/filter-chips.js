// Находим кнопку по id
const toggleButton = document.getElementById('showMoreChips');

// Находим все скрытые элементы
const hiddenChips = document.querySelectorAll('.filter-chips-text--hidden');

if (toggleButton && hiddenChips.length > 0) {
  toggleButton.addEventListener('click', (event) => {
    // Отменяем стандартное поведение ссылки (переход по #)
    event.preventDefault();

    // Переключаем класс у каждого скрытого элемента
    hiddenChips.forEach((chip) => {
      chip.classList.toggle('filter-chips-text--hidden');
    });

    // Меняем текст кнопки
    const isHidden = hiddenChips[0].classList.contains(
      'filter-chips-text--hidden',
    );
    toggleButton.textContent = isHidden ? 'Показать еще' : 'Скрыть';
  });
}
