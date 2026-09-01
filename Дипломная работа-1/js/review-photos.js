// js/review-photos.js — Продвинутая версия

document.addEventListener('DOMContentLoaded', function() {
    
    const viewPhotoLinks = document.querySelectorAll('.reviews__item-author');
    
    viewPhotoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const reviewItem = this.closest('.reviews__item');
            if (!reviewItem) return;
            
            const hiddenPhotos = reviewItem.querySelector('.reviews__photos--hidden');
            const visiblePhotos = reviewItem.querySelector('.reviews__photos--visible');
            const linkText = this.querySelector('span');
            
            // Считаем количество скрытых фото
            let hiddenCount = 0;
            if (hiddenPhotos) {
                hiddenCount = hiddenPhotos.querySelectorAll('.reviews__item-image').length;
            }
            
            if (hiddenPhotos && hiddenPhotos.classList.contains('reviews__photos--hidden')) {
                // ===== ПОКАЗЫВАЕМ ФОТО =====
                hiddenPhotos.classList.remove('reviews__photos--hidden');
                hiddenPhotos.classList.add('reviews__photos--visible-all');
                hiddenPhotos.style.display = 'flex';
                
                if (linkText) {
                    linkText.textContent = `Скрыть фото (${hiddenCount})`;
                }
            } else {
                // ===== СКРЫВАЕМ ФОТО =====
                const allHiddenPhotos = reviewItem.querySelectorAll('.reviews__photos--visible-all');
                
                allHiddenPhotos.forEach(photos => {
                    photos.classList.remove('reviews__photos--visible-all');
                    photos.classList.add('reviews__photos--hidden');
                    photos.style.display = 'none';
                });
                
                if (linkText) {
                    linkText.textContent = `Смотреть все фото (${hiddenCount})`;
                }
            }
        });
    });
    
    console.log('✅ Скрипт "Смотреть все фото" загружен!');
});