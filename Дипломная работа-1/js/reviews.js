// js/reviews.js

document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    
    if (!loadMoreBtn) {
        console.log('Кнопка "Показать еще" не найдена');
        return;
    }

    // Количество отзывов, которые показываются за 1 клик
    const SHOW_COUNT = 3;
    
    // Сколько отзывов видно по умолчанию (изменено с 3 на 4)
    const DEFAULT_VISIBLE = 4;
    
    let isExpanded = false;

    loadMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const btnText = this.querySelector('.load-more-btn');
        const hiddenReviews = document.querySelectorAll('.reviews__wrapper--hidden');

        if (!isExpanded) {
            // ===== ПОКАЗЫВАЕМ ОТЗЫВЫ =====
            if (hiddenReviews.length === 0) {
                btnText.textContent = 'Все отзывы показаны';
                return;
            }

            let shownCount = 0;
            hiddenReviews.forEach(review => {
                if (shownCount < SHOW_COUNT) {
                    review.classList.remove('reviews__wrapper--hidden');
                    review.classList.add('reviews__wrapper--visible');
                    review.style.display = 'flex';
                    shownCount++;
                }
            });

            const remainingHidden = document.querySelectorAll('.reviews__wrapper--hidden');
            
            if (remainingHidden.length === 0) {
                btnText.textContent = 'Скрыть';
            } else {
                btnText.textContent = 'Показать еще';
            }

            isExpanded = true;
        } else {
            // ===== СКРЫВАЕМ ОТЗЫВЫ =====
            const allReviews = document.querySelectorAll('.reviews__wrapper:not(.reviews__wrapper-top)');
            
            allReviews.forEach((review, index) => {
                // Оставляем первые DEFAULT_VISIBLE (4) отзыва видимыми
                if (index >= DEFAULT_VISIBLE) {
                    review.classList.remove('reviews__wrapper--visible');
                    review.classList.add('reviews__wrapper--hidden');
                    review.style.display = 'none';
                }
            });

            btnText.textContent = 'Показать еще';
            isExpanded = false;
        }

        updateReviewsCounter();
    });

    function updateReviewsCounter() {
        const visibleReviews = document.querySelectorAll(
            '.reviews__wrapper:not(.reviews__wrapper--hidden):not(.reviews__wrapper-top)'
        );
        const counter = document.querySelector('.reviews__title-number');
        
        if (counter) {
            counter.textContent = visibleReviews.length;
        }
    }

    function checkInitialState() {
        const hiddenReviews = document.querySelectorAll('.reviews__wrapper--hidden');
        const btnText = loadMoreBtn.querySelector('.load-more-btn');
        
        if (hiddenReviews.length === 0) {
            btnText.textContent = 'Скрыть';
            isExpanded = true;
        } else {
            btnText.textContent = 'Показать еще';
            isExpanded = false;
        }
        
        updateReviewsCounter();
    }

    checkInitialState();

    console.log('✅ Скрипт отзывов загружен!');
    console.log('📊 Видимых отзывов (по умолчанию 4):', 
        document.querySelectorAll('.reviews__wrapper:not(.reviews__wrapper--hidden):not(.reviews__wrapper-top)').length
    );
    console.log('📊 Скрытых отзывов:', 
        document.querySelectorAll('.reviews__wrapper--hidden').length
    );
});