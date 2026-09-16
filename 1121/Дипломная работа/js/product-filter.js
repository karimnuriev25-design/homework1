document.addEventListener('DOMContentLoaded', () => {
  // 1. Находим элементы управления
  const selectTrigger = document.querySelector('.select-trigger');
  const selectedOptionText = document.getElementById('selectedOption');
  const sortDropdown = document.getElementById('sortDropdown');
  const dropdownItems = sortDropdown.querySelectorAll('li');
  const productWrapper = document.querySelector('.product__card-wrapper');

  // Получаем все карточки товаров в виде массива
  // Важно: мы берем именно article, так как они являются контейнерами для сортировки
  const products = Array.from(productWrapper.querySelectorAll('article'));

  // 2. Логика открытия/закрытия выпадающего списка
  selectTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); // Предотвращаем всплытие, чтобы не сработал клик по документу
    sortDropdown.classList.toggle('open');
    selectTrigger.classList.toggle('active');
  });

  // Закрытие списка при клике вне его
  document.addEventListener('click', (e) => {
    if (!selectTrigger.contains(e.target) && !sortDropdown.contains(e.target)) {
      sortDropdown.classList.remove('open');
      selectTrigger.classList.remove('active');
    }
  });

  // 3. Функция для получения цены из карточки
  const getPrice = (card) => {
    const priceElement = card.querySelector('.current-price');
    if (!priceElement) return 0;
    // Убираем все кроме цифр (пробелы, буква Р, запятые)
    // Например: "59 990Р" -> 59990
    const priceText = priceElement.textContent.replace(/[^\d]/g, '');
    return parseInt(priceText, 10);
  };

  // 4. Функция сортировки
  const sortProducts = (sortType) => {
    let sortedProducts = [...products];

    if (sortType === 'cheap') {
      // Сначала дешёвые (по возрастанию)
      sortedProducts.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortType === 'expensive') {
      // Сначала дорогие (по убыванию)
      sortedProducts.sort((a, b) => getPrice(b) - getPrice(a));
    } else {
      // "Сначала популярные" или другие - возвращаем исходный порядок
      // (или можно оставить как есть, если сортировка не требуется)
      // Для сброса в исходное состояние можно использовать исходный массив products
      sortedProducts = products;
    }

    // Очищаем контейнер и вставляем отсортированные элементы
    // Используем DocumentFragment для производительности (опционально, но полезно)
    productWrapper.innerHTML = '';
    sortedProducts.forEach((product) => {
      productWrapper.appendChild(product);
    });
  };

  // 5. Обработка кликов по пунктам меню
  dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Получаем значение data-value (cheap, expensive и т.д.)
      const value = item.getAttribute('data-value');
      const text = item.textContent;

      // Обновляем текст в триггере
      selectedOptionText.textContent = text;

      // Обновляем активный класс
      dropdownItems.forEach((li) => li.classList.remove('active'));
      item.classList.add('active');

      // Закрываем список
      sortDropdown.classList.remove('open');
      selectTrigger.classList.remove('active');

      // Запускаем сортировку
      sortProducts(value);
    });
  });
});
