import { getTodosFromLocalStorage, setTodosToLocalStorage } from './storage.js';

export const todos = getTodosFromLocalStorage();

export function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todos.push(todo);
  setTodosToLocalStorage(todos);

  return todo;
}

export function completeTodoById(id) {
  const todo = todos.find((item) => item.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  setTodosToLocalStorage(todos);

  return todo;
}

export function deleteTodoById(id) {
  const index = todos.findIndex((item) => item.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
  setTodosToLocalStorage(todos);
}
