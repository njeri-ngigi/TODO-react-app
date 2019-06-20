import React from 'react';

import months from '../mock-data/months';

import '../assets/styles/todo-card.css';

const todoCard = ({todo: {date, title, description}}) => (
  <div className="todo-card">
    <div>
      <h2>{date.getDay()}</h2>
      <p>{months[date.getMonth()]}, {date.getYear() + 1900}</p>
    </div>
    <div className="todo-description">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default todoCard;