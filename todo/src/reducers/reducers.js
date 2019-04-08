import { 
    ADD_TODO,
    COMPLETE_TODO,
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
            console.log("added todo")
            return state;
        case COMPLETE_TODO:
            console.log("completed todo")
            return state;
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