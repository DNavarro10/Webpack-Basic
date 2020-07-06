import { Todo } from "../classes";
import { todoList} from '../index';

//selectores
const divToDoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

const toggle = document.querySelector('.toggle');

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

// eventos
txtInput.addEventListener('keyup', ( event ) => {
   
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value);
        
        todoList.nuevoTodo( nuevoTodo)

    
        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }
});

divToDoList.addEventListener('click', (event) => {
  

    const nombreElemento = event.target.localName;
    const todoElemento   = event.target.parentElement.parentElement;
    const todoID         = todoElemento.getAttribute('data-id');

    console.log(nombreElemento);

    if ( nombreElemento.includes('input')){

        todoList.marcarCompletado(todoID);
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')){
        
        todoList.eliminarTodo(todoID);
        divToDoList.removeChild(todoElemento)
        
        
    }


    console.log(todoList);
  
    
})