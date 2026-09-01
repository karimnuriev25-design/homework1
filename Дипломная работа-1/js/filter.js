// js/filter.js

document.addEventListener('DOMContentLoaded', function() {
    const selectTrigger = document.querySelector('.select-trigger');
    const dropdown = document.querySelector('.select-dropdown');
    const selectedText = document.getElementById('selectedOption');
    const productWrapper = document.querySelector('.product__card-wrapper');

    if (!selectTrigger || !dropdown || !selectedText) return;

    // Открытие/закрытие списка при клике
    selectTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        dropdown.classList.toggle('open');
    });

    // Закрытие списка при клике вне него
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select')) {
            selectTrigger.classList.remove('active');
            dropdown.classList.remove('open');
        }
    });

    // Выбор опции
    dropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            // Убираем активный класс у всех
            dropdown.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            this.classList.add('active');

            // Меняем текст на выбранный
            selectedText.textContent = this.textContent;

            // Закрываем список
            selectTrigger.classList.remove('active');
            dropdown.classList.remove('open');

            // Сортируем карточки
            const sortType = this.dataset.value;
            sortProducts(sortType);
        });
    });

    // Функция сортировки
    function sortProducts(sortType) {
        if (!productWrapper) return;

        const articles = Array.from(productWrapper.querySelectorAll('article'));
        const cards = articles.map(article => ({
            element: article,
            card: article.querySelector('.product__card')
        }));

        // Получаем цену из карточки
        function getPrice(card) {
            const priceText = card.querySelector('.current-price')?.textContent || '0';
            return parseInt(priceText.replace(/\s/g, '').replace(/[^0-9]/g, '')) || 0;
        }

        // Получаем название товара
        function getTitle(card) {
            return card.querySelector('.product__card-title')?.textContent || '';
        }

        // Сортировка
        let sortedArticles = [];

        switch(sortType) {
            case 'popular':
                // Сортировка по популярности (оставляем как есть)
                sortedArticles = cards.map(item => item.element);
                break;

            case 'cheap':
                // Сначала дешёвые
                sortedArticles = cards.sort((a, b) => {
                    return getPrice(a.card) - getPrice(b.card);
                }).map(item => item.element);
                break;

            case 'expensive':
                // Сначала дорогие
                sortedArticles = cards.sort((a, b) => {
                    return getPrice(b.card) - getPrice(a.card);
                }).map(item => item.element);
                break;

            case 'new':
                // Новинки (обратный порядок)
                sortedArticles = cards.reverse().map(item => item.element);
                break;

            case 'rating':
                // Сортировка по рейтингу (если есть звезды)
                sortedArticles = cards.sort((a, b) => {
                    // Можно добавить логику рейтинга
                    return 0;
                }).map(item => item.element);
                break;

            default:
                sortedArticles = cards.map(item => item.element);
        }

        // Очищаем и заново вставляем отсортированные карточки
        productWrapper.innerHTML = '';
        sortedArticles.forEach(article => {
            productWrapper.appendChild(article);
        });
    }
});