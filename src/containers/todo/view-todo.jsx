import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/button';
import months from '../../mock-data/months';
import { changeLastLocation } from '../../redux/actions/todos';

import '../../assets/styles/view-todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.getTodoDetails = this.getTodoDetails.bind(this);
  }

  componentDidMount() {
    const { dispatch, location: {pathname} } = this.props;
    dispatch(changeLastLocation(pathname));
  }

  getTodoDetails() {
    const { todos } = this.props;
    const { id } = this.props.match.params;
    let { date } = todos[id];
    if (typeof date === "string") date = new Date(date)
    return { ...todos[id], date, id }
  }

  render() {
    const { date, description, title, id } = this.getTodoDetails();
    return (
      <div className="view-todo">
        <div className="view-todo-left">
          <h1>{title}</h1>
          <h3>{date.getDay()} {months[date.getMonth()]}, {date.getYear() + 1900}</h3>
          <p>{description}</p>
          <span className="view-todo-left-button">
            <Link to="/createTodo"><Button label="Add another todo"/></Link>
            <Link to={{
              pathname: `/editTodo/${id}`,
              state: {
                description,
                title
              }
            }}>
              <Button label="Edit this TODO"/>
            </Link>
          </span>
        </div>
        <div className="view-todo-right">
          <span className="view-todo-right-button">
            <Link to="/"><button>Home</button></Link>
            <Link to="/todos"><button>All TODOs</button></Link>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({todosReducer: { todos }}) => ({todos})

export default connect(mapStateToProps)(Todo);
