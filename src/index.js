import './CSS/styles.css';

// import {Todo} from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './JS/componentes';

export const todoList = new TodoList();


//localstorage
todoList.todos.forEach( todo => crearTodoHtml(todo));

todoList.todos[1].imprimirClase();

console.log('Todos: ', todoList.todos);
