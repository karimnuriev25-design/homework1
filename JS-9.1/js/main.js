'use strict';

const todos = [];

function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todos.push(todo);
  return todo;
}

function completeTodoById(id) {
  const todo = todos.find((item) => item.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

function deleteTodoById(todos, todoId) {
  const index = todos.findIndex((item) => item.id === todoId);
  if (index !== -1) {
    todos.splice(index, 1);
  }
}

const input = document.querySelector('.input');
const button = document.querySelector('#myButton');
const targetBox = document.querySelector('#targetBox');
const template = document.querySelector('.todo');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  const todo = addTodo(text);

  const li = template.cloneNode(true);
  li.removeAttribute('hidden');
  li.dataset.id = todo.id;
  li.querySelector('.todo-text').textContent = text;

  targetBox.appendChild(li);
  input.value = '';
});

targetBox.addEventListener('click', (e) => {
  const li = e.target.closest('.todo');
  if (!li) return;

  const todoId = Number(li.dataset.id);

  if (e.target.matches('.button-complete')) {
    completeTodoById(todoId);

    const todo = todos.find((item) => item.id === todoId);
    if (todo) {
      li.classList.toggle('completed', todo.completed);
    }
  }

  if (e.target.matches('.button-delete')) {
    deleteTodoById(todos, todoId);
    li.remove();
  }
});
