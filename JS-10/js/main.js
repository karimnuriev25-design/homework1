import { todos, addTodo, completeTodoById, deleteTodoById } from './todos.js';
import {
  renderTodo,
  removeTodoElement,
  toggleTodoElement,
  clearInput,
} from './ul.js';

const input = document.querySelector('.input');
const button = document.querySelector('#myButton');
const targetBox = document.querySelector('#targetBox');

todos.forEach((todo) => {
  renderTodo(todo);
});

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === '') {
    return;
  }

  const todo = addTodo(text);

  renderTodo(todo);
  clearInput(input);
});
targetBox.addEventListener('click', (e) => {
  const li = e.target.closest('.todo');

  if (!li) {
    return;
  }

  const todoId = Number(li.dataset.id);

  if (e.target.matches('.button-complete')) {
    const todo = completeTodoById(todoId);

    toggleTodoElement(li, todo);

    return;
  }

  if (e.target.matches('.button-delete')) {
    deleteTodoById(todoId);
    removeTodoElement(li);
  }
});
