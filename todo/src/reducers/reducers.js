import { 
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    EDIT_TODO
} from '../actions/actions.js';

const initial = {
    todos: [
        {
            id: 1,
            text: "mow the lawn",
            complete: false
        },
    ]
}

export default function(state = initial, action){
    // state is the current state of our app
    // action has a type, and a payload

    switch(action.type){
        case ADD_TODO:
            console.log("added todo", action.payload)

            let newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: true
            }

            return {
                ...state,
                todos: [...state.todos, newTodo]
            };

        case TOGGLE_TODO:
            console.log(action)
            let findTodoIndex = state.todos.findIndex(todo => todo.id === action.payload); // get location of todo in todos list
            let updatedTodos = [...state.todos] // make a copy of todos from state

            // use location to grab todo from copy and update its value
            updatedTodos[findTodoIndex] = {
                ...updatedTodos[findTodoIndex], // copy contents of todo
                complete: !updatedTodos[findTodoIndex].complete // toggle value of completed
            }

            // console.log(toggledTodo)
            return {
                ...state,
                todos: updatedTodos
            };

        case DELETE_TODO:
            console.log("deleted todo")
            return state;
        case EDIT_TODO:
            console.log("edited todo")
            return state;
        default:
            return state;
    }
}