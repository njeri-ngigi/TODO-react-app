import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store';
import Home from './containers/home/home';
import ViewTodo from './containers/todo/view-todo';
import CreateTodo from './containers/todo/create-todo';
import Todos from './containers/todos/todos';
import EditTodo from './containers/todo/edit-todo';

import './assets/styles/App.css';

class App extends Component {
  render() {
    const { store, persistor } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/createTodo" component={CreateTodo}/>
            <Route path="/editTodo/:id" component={EditTodo}/>
            <Route path="/todo/:id" component={ViewTodo}/>
            <Route path="/todos" component={Todos}/>
          </div>
        </Router>
        </PersistGate>
        
      </Provider>
    )
  }
}

export default App;
