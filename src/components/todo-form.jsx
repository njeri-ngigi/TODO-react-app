import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { mutateTodosList } from '../redux/actions/todos';

import '../assets/styles/create-todo.css';
import '../assets/styles/common.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      placeholder: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { title, placeholder } = this.props;
    this.setState({
      title, placeholder
    })
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, placeholder: description } = this.state;
    const { dispatch, todos, todoAction, index } = this.props;
    let location = '/todos'
    if (todoAction === 'add') {
      const date = new Date();
      todos.unshift({ date, title, description })
    }

    if (todoAction === 'edit') {
      todos[index].title = title;
      todos[index].description = description;
      location = `/todo/${index}`;
    }

    dispatch(mutateTodosList(todos))
    window.location.href = location;
  }

  render() {
    const { title, placeholder } = this.state;
    const { todoAction, lastLocation } = this.props;
    return (
      <div className="main-div">
        <div className="left-div">
          <h1>{todoAction === 'edit' ? 'Edit' : 'Add'} your TODO</h1>
          <span className="left-div-arrow">&#187;</span>
        </div>
        <div className="right-div">
          <h3>Right here</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              required
              name="title"
              placeholder={title}
              value={todoAction === 'edit' ? title : ""}
              onChange={this.handleChange}/>
            <textarea
              required
              name="placeholder"
              placeholder={placeholder}
              value={todoAction === 'edit' ? placeholder : ""}
              onChange={this.handleChange}/>
            <span>
              <Link to={lastLocation}><button>Cancel</button></Link>
              <button type="submit">{todoAction === 'edit' ? 'Save' : 'Add to my List'}</button>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todosReducer, todosReducer: { todos, lastLocation }}) => ({
  todos,
  lastLocation
})

export default connect(mapStateToProps)(TodoForm);
