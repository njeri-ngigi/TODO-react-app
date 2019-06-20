import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import { Home } from './containers/home/home';
import { Todo } from './containers/todo/todo';
import { Todos } from './containers/todos/todos';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/todo/:id" component={Todo}/>
          <Route path="/todos" component={Todos}/>
        </div>
      </Router>
     
    )
  }
}

export default App;
