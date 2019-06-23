import React, { Component } from 'react';

import TodoForm from '../../components/todo-form';

class EditTodo extends Component {
  render() {
    let title = 'Title';
    let description = 'Enter a description'
    const { id: index } = this.props.match.params;
    const { location } = this.props;
    if (location) {
      ({title, description} = location.state);
    } 

    return (
      <TodoForm
        title={title}
        placeholder={description}
        index={index}
        todoAction="edit"/>
    )
  }
}

export default EditTodo;
