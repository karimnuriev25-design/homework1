// js/filter-chips.js

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreChips');
    
    if (!showMoreBtn) {
        console.log('Кнопка "Показать еще" не найдена');
        return;
    }

    let isExpanded = false;

    showMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const hiddenChips = document.querySelectorAll('.filter-chips-text--hidden');
        const btnText = this;

        // ===== ПОКАЗЫВАЕМ ТЕГИ =====
        if (!isExpanded) {
            // Показываем все скрытые теги (их всего 2)
            hiddenChips.forEach(chip => {
                chip.classList.remove('filter-chips-text--hidden');
                chip.classList.add('filter-chips-text--visible');
                chip.style.display = 'inline-block';
            });

            btnText.textContent = 'Скрыть';
            isExpanded = true;
        } 
        // ===== СКРЫВАЕМ ТЕГИ =====
        else {
            // Находим все теги (кроме первых 4)
            const allChips = document.querySelectorAll('.filter-chips-text');
            
            allChips.forEach((chip, index) => {
                // Оставляем первые 4 тега видимыми
                if (index >= 4) {
                    chip.classList.remove('filter-chips-text--visible');
                    chip.classList.add('filter-chips-text--hidden');
                    chip.style.display = 'none';
                }
            });

            btnText.textContent = 'Показать еще';
            isExpanded = false;
        }
    });
});