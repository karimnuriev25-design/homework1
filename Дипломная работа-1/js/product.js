

document.addEventListener('DOMContentLoaded', function() {
    const actionRows = document.querySelectorAll('.action-row');
    
    console.log('Найдено карточек:', actionRows.length); 

    actionRows.forEach(row => {
        const minusBtn = row.querySelector('.counter__btn-minus');
        const plusBtn = row.querySelector('.counter__btn-plus');
        const stepperValue = row.querySelector('.stepper-value');

        console.log('Кнопка минус:', minusBtn);
        console.log('Кнопка плюс:', plusBtn);   

        if (plusBtn) {
            plusBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let val = parseInt(stepperValue.textContent) || 1;
                stepperValue.textContent = val + 1;
                console.log('Новое значение:', stepperValue.textContent); 
            });
        }

        if (minusBtn) {
            minusBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let val = parseInt(stepperValue.textContent) || 1;
                if (val > 1) {
                    stepperValue.textContent = val - 1;
                    console.log('Новое значение:', stepperValue.textContent); 
                }
            });
        }
    });
});