import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Todo from './components/Todo.js';

import {
  addTodo, toggleTodo, editTodo, deleteTodo
} from './actions/actions.js'

function app(props){

  const [todo, setTodo] = useState('');

  const handleInput = event => {
    if (event.target.name === "todo") {
      setTodo(event.target.value)
    }
  }

  const add = event => {
    event.preventDefault();
    props.addTodo(todo);
    setTodo("")
  }

  return (
    <App className="App">
      <h1>TODO list:</h1>
      {console.log(props.todos)}
      {props.todos.map(todo => <Todo key={todo.id} toggle={()=> props.toggleTodo(todo.id)} todo={todo}/>)}

      <form>
        <input name="todo" onChange={handleInput} value={todo}></input>
        <button onClick={add}>Add Todo</button>
      </form>
    </App>
  );

}

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

//connect takes in a function that maps(Redux)StateTo(Components)Props
//and it takes in some actions
export default connect(mapStateToProps, {addTodo, toggleTodo, editTodo, deleteTodo})(app)