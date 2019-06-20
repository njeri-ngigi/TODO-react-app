import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoCard from '../../components/todo-card';
import Button from '../../components/button';
import { fetchAllTodos } from '../../redux/actions/todos';

import '../../assets/styles/todos.css';
import '../../assets/styles/common.css';


class Todos extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllTodos())
  }

  todos = (data) => {
    const items = []
    data.map((todo) => items.push(
      <Link to="/todo/1" key={todo.title}>
        <TodoCard todo={todo}/>
      </Link>
      )
    )
    return items
  }

  render() {
    const { todos } = this.props;
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
          {this.todos(todos)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todosReducer: { todos }}) => ({todos})

export default connect(mapStateToProps)(Todos);
