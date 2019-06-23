import React, { Component } from 'react';

import TodoForm from '../../components/todo-form';

class CreateTodo extends Component {
  render() {
    const placeholder = `
    Add some text here. E.g.
  
    - get some milk
    
    - call mum
    
    - walk the dog`

    return (
      <TodoForm
        title="Title"
        placeholder={placeholder}
        todoAction="add"/>
    )
  }
}

export default CreateTodo;
