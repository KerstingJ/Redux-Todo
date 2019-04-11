import React from 'react';
import styled from 'styled-components';

export default function(props){
    const { todo } = props;

    return (
        <Todo onClick={props.toggle} >
            <span className={todo.complete ? "completedTodo" : ""}>
                {todo.text}
            </span>
        </Todo>
    )
}

const Todo = styled.div`
    
    span.completedTodo {
        text-decoration: line-through;
    }
`