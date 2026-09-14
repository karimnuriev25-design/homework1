const targetBox = document.querySelector('#targetBox');
const template = document.querySelector('.todo');

export function renderTodo(todo) {
  const li = template.cloneNode(true);
  li.removeAttribute('hidden');
  li.dataset.id = todo.id;
  li.querySelector('.todo-text').textContent = todo.text;

  if (todo.completed) {
    li.classList.add('completed');
  }

  targetBox.appendChild(li);
}
export function removeTodoElement(li) {
  li.remove();
}
export function toggleTodoElement(li, todo) {
  li.classList.toggle('completed', todo.completed);
}
export function clearInput(input) {
  input.value = '';
}
