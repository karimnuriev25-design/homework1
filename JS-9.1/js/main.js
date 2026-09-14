'use strict';

//  данные
const todos = [];

//функция создание задачи в массиве
function addTodo(text) {
  const todo = {
    id: Date.now(), //уникальный id
    text: text,
    completed: false, // изначально задача не выполнена
  };
  todos.push(todo); // добавляю созданный обьект в конец массива todos
  return todo; // возращаю обьект наружу чтобы сразу передать его id в data-атрибут Dom элемента
}

//Переключаю  сделано/не сделано  по номеру задачи
function completeTodoById(id) {
  const todo = todos.find((item) => item.id === id); // Ищем в списке задачу с таким же id,если нашли то она лежит в todo
  if (todo) {
    todo.completed = !todo.completed; // Если было true станет false и наоборот
  }
}

//удаляю задачу из списка по номеру
function deleteTodoById(todos, todoId) {
  const index = todos.findIndex((item) => item.id === todoId); //Находим под каким номером задача лежит в списке

  if (index !== -1) {
    // - 1 значит не нашли Если  не -1 значит нашли
    todos.splice(index, 1); // Вырезаем 1 задачу в списке
  }
}

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

  const todo = addTodo(text); //создаем задачу в массиве

  // клонирую шаблон вместе с кнопками
  const li = template.cloneNode(true);

  // убираю атрибут hidden у клона
  li.removeAttribute('hidden');

  li.dataset.id = todo.id; // привязываем Dom элемент к данным через data-id

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

  const todoId = Number(todoElement.dataset.id);

  //проверям есть ли у кликнутого элемента класс  /button-complete/
  if (e.target.matches('button-complete')) {
    //добавляем и убираем этот класс
    li.classList.toggle('completed', todo.completed);
  }

  completeTodoById(todoId); // обновляем данные в массиве

  const todo = todos.find((item) => item.id === todoId);
  //проверям есть ли у кликнутого элемента класс  /button-delete/
  if (e.target.classList.contains('button-delete')) {
    //Если есть то удаляем

    deleteTodoById(todos, todoId); //удаляем задачу из массива
    li.remove();
  }
});
