import React from 'react';

export default function(props){
    const { todo } = props;

    return (
        <div>{todo.text}</div>
    )
}