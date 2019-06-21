import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createNewTodo } from '../../redux/actions/todos';

import '../../assets/styles/create-todo.css';
import '../../assets/styles/common.css';

class CreateTodo extends Component {
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
    const { dispatch, todos, history } = this.props;
    const date = new Date();
    todos.unshift({ date, title, description })
    dispatch(createNewTodo(todos))
    history.push('/todos');
  }

  
  render() {
    const { title, placeholder } = this.state;
    
    return (
      <div className="main-div">
        <div className="left-div">
          <h1>Add your TODO</h1>
          <span className="left-div-arrow">&#187;</span>
        </div>
        <div className="right-div">
          <h3>Right here</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              name="title"
              placeholder={title}
              onChange={this.handleChange}/>
            <textarea
              name="placeholder"
              placeholder={placeholder}
              onChange={this.handleChange}/>
            <span>
              <Link to="/"><button>Cancel</button></Link>
              <button type="submit">Add to my List</button>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todosReducer: { todos, title, placeholder, todoType }}) => ({
  todos,
  title,
  placeholder,
  todoType
})

export default connect(mapStateToProps)(CreateTodo);
