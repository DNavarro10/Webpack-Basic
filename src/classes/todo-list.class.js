import { Todo } from "./todo.class";

export class TodoList {

    constructor(){

        this.cargarLocalStorage()
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id ) 

        this.guardarLocalStorage()
        //devuelve un nuevo arrigle in el que sea igual al id accionado, envia todo a un nuevo toods..
    }

    marcarCompletado(id){

    
        for( const todo of this.todos ) {
        
            console.log (id, todo.id);
            if( todo.id == id ){

                todo.completado = !todo.completado;
                break;
            }
        }

        this.guardarLocalStorage();
        
    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter(todo => !todo.completado ) 
    }

    guardarLocalStorage(){
        
        localStorage.setItem('todo', JSON.stringify( this.todos));

    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')
        ?
         this.todos = JSON.parse(localStorage.getItem('todo')) 
         : this.todos = []);
         
         this.todos = this.todos.map(obj => Todo.fromJson(obj))
    }

   
}