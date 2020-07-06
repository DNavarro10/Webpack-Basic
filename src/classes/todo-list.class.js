export class TodoList {

    constructor(){

        this.todos = [];
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id ) 

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

        
    }

    eliminarCompletados(){
        
    }
}