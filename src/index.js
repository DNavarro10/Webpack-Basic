import './CSS/styles.css';

// import {Todo} from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './JS/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript!!')


todoList.nuevoTodo( tarea );

tarea.completado = true;

crearTodoHtml( tarea );

// todoList.nuevoTodo(tarea);

// console.log(TodoList);
