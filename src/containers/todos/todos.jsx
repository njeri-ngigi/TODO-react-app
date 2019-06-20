import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TodoCard from '../../components/todo-card';
import todoData from '../../mock-data/todos';
import Button from '../../components/button';

import '../../assets/styles/todos.css';
import '../../assets/styles/common.css';


class Todos extends Component {
  componentDidMount() {
    // call dispatch to add data to store
  }

  todos = () => {
    const items = []
    todoData.map(
      (todo) => items.push(
        <Link to="/todo/1" key={todo.title}>
          <TodoCard todo={todo}/>
        </Link>
        )
      )
    return items
  }

  render() {
    return (
      <div className="todos main-div">
        <div className="left-div">
          <h1>All TODOs</h1>
          <span>
            <Link to="/"><Button label=" &#171; Go Back Home"/></Link>
            <Link to="/createTodo"><Button label="Add a TODO &#187;"/></Link>
          </span>
        </div>
        <div className="right-div">
          {this.todos()}
        </div>
      </div>
    )
  }
}

export default Todos;
