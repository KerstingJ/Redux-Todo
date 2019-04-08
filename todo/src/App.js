import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Todo from './components/Todo.js';

import {
  addTodo, completeTodo, editTodo, deleteTodo
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
  }

  return (
    <App className="App">
      <h1>TODO list:</h1>

      {props.todos.map(todo => <Todo />)}

      <form>
        <input name="todo" onChange={handleInput}></input>
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
//connect takes in a function that mapsStateToProps
//and it takes in some actions
export default connect(mapStateToProps, {addTodo, completeTodo, editTodo, deleteTodo})(app)