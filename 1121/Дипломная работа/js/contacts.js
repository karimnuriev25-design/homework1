const toast2 = document.querySelector('.contact__toast');
const contactsButton = document.getElementById('submitApplication');
const constInputLeft = document.querySelector('.contact__input-left');

contactsButton.addEventListener('click', () => {
  if (constInputLeft.value.trim() === '') {
    return;
  }

  toast2.classList.add('show__active-toast');

  setTimeout(() => {
    toast2.classList.remove('show__active-toast');
  }, 2000);
  constInputLeft.value = '';
});
