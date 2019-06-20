import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Home from './containers/home/home';
import ViewTodo from './containers/todo/view-todo';
import CreateTodo from './containers/todo/create-todo';
import Todos from './containers/todos/todos';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/createTodo" component={CreateTodo}/>
            <Route path="/todo/:id" component={ViewTodo}/>
            <Route path="/todos" component={Todos}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
