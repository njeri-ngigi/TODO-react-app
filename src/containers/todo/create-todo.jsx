import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/create-todo.css';
import '../../assets/styles/common.css';

class CreateTodo extends Component {
  render() {
    const textareaPlaceholder = `
    Add some text here. E.g.

    - get some milk
    
    - call mum
    
    - walk the dog`
    return (
      <div class="main-div">
        <div class="left-div">
          <h1>Add your TODO</h1>
          <span className="left-div-arrow">&#187;</span>
        </div>
        <div class="right-div">
          <h3>Right here</h3>
          <form>
            <input type="text" placeholder="Title"/>
            <textarea
              placeholder={textareaPlaceholder}>
            </textarea>
            <span>
              <Link to="/"><button>Cancel</button></Link>
              <Link to="/todos"><button>Add to my List</button></Link>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateTodo;
