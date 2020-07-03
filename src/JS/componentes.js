import { Todo } from "../classes";

const divToDoList = document.querySelector('.todo-list');

export const crearTodoHtml = (todo) => {


    const htmlToDo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
   </li>`;

    divToDoList.innerHTML = divToDoList.innerHTML + htmlToDo;

    return htmlToDo;


}