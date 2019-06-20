import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button';

import '../../assets/styles/home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="flex-content">
          <h1 className="mb-5">T . O . D . O </h1>
          <h3 className="mb-10">manage your life like a pro</h3>
          <Link to="/createTodo"><Button label="Add a TODO"/></Link>
          <Link to="/todos"><Button label="All my TODOs"/></Link>
        </div>
      </div>
    )
  }
}

export default Home;