// js/news.js

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.querySelector('.news__show-more-wrapper');
    
    if (!showMoreBtn) {
        console.log('Кнопка "Показать еще" не найдена');
        return;
    }

    let isExpanded = false;
    let isMobile = window.innerWidth <= 390;

    function checkMobile() {
        isMobile = window.innerWidth <= 390;
    }

    window.addEventListener('resize', checkMobile);

    showMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const btnText = this.querySelector('.news-more-btn');
        const hiddenWrappers = document.querySelectorAll('.news__wrapper--hidden');

        if (!isExpanded) {
            if (hiddenWrappers.length === 0) {
                btnText.textContent = 'Все новости показаны';
                return;
            }

            const firstHidden = hiddenWrappers[0];
            
            firstHidden.classList.remove('news__wrapper--hidden');
            firstHidden.classList.add('news__wrapper--visible');
            firstHidden.style.display = 'flex';

            const articles = firstHidden.querySelectorAll('.news__article');
            articles.forEach((article, index) => {
                // На экранах < 390px показываем только 2 карточки
                if (isMobile && index >= 2) {
                    article.style.display = 'none';
                } else {
                    article.style.display = 'flex';
                    article.style.opacity = '1';
                }
            });

            const remainingHidden = document.querySelectorAll('.news__wrapper--hidden');
            
            if (remainingHidden.length === 0) {
                btnText.textContent = 'Скрыть';
            } else {
                btnText.textContent = 'Показать еще';
            }

            isExpanded = true;
        } else {
            const visibleWrappers = document.querySelectorAll('.news__wrapper--visible');
            
            visibleWrappers.forEach(wrapper => {
                wrapper.classList.add('news__wrapper--hiding');
                
                setTimeout(() => {
                    wrapper.classList.remove('news__wrapper--visible');
                    wrapper.classList.remove('news__wrapper--hiding');
                    wrapper.classList.add('news__wrapper--hidden');
                    wrapper.style.display = 'none';
                    
                    const articles = wrapper.querySelectorAll('.news__article');
                    articles.forEach(article => {
                        article.style.display = 'none';
                        article.style.opacity = '0';
                    });
                }, 300);
            });

            btnText.textContent = 'Показать еще';
            isExpanded = false;
        }
    });

    function checkInitialState() {
        const hiddenWrappers = document.querySelectorAll('.news__wrapper--hidden');
        const btnText = showMoreBtn.querySelector('.news-more-btn');
        
        if (hiddenWrappers.length === 0) {
            btnText.textContent = 'Скрыть';
            isExpanded = true;
        } else {
            btnText.textContent = 'Показать еще';
            isExpanded = false;
        }
        
        checkMobile();
    }

    checkInitialState();

    console.log('✅ Скрипт новостей загружен!');
});