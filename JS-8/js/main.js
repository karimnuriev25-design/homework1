'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('#myButton');
const targetBox = document.querySelector('#targetBox');

const template = document.querySelector('.todo');

// + il
button.addEventListener('click', () => {
  //текст в инпуте
  const text = input.value.trim();
  if (text === '') {
    return;
  }

  // клонирую шаблон вместе с кнопками
  const li = template.cloneNode(true);

  // убираю атрибут hidden у клона
  li.removeAttribute('hidden');

  // меняю текст
  li.querySelector('.todo-text').textContent = text;

  //добавляю в список
  targetBox.appendChild(li);

  //убираю текст после создания
  input.value = '';
});

//кнопка + -
// + для всех новых заметках
targetBox.addEventListener('click', (e) => {
  //Если клик был по кнопке внутри задачи найдётся вся задача li.
  const li = e.target.closest('.todo');
  //Если мимо выходим
  if (!li) return;

  //проверям есть ли у кликнутого элемента класс  /button-complete/
  if (e.target.classList.contains('button-complete')) {
    //добавляем и убираем этот класс
    li.classList.toggle('completed');
  }

  //проверям есть ли у кликнутого элемента класс  /button-delete/
  if (e.target.classList.contains('button-delete')) {
    //Если есть то удаляем
    li.remove();
  }
});
