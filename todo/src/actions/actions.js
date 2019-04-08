
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}