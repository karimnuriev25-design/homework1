export function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export function setTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
