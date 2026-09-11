'use strict';

const todoKeys = {
  id: 'id',
  text: 'text',
  is_completed: 'is_completed',
};

const todos = [];

const errTodoNotFound = (todoId) => {
  return `Todo with id ${todoId} not found`;
};

// для увелич айлишника
const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxId, todo) => {
      return Math.max(maxId, todo[todoKeys.id]);
    }, 1) + 1
  );
};

// задаем id , text и выполнение
const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };

  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoId = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex == -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};
